import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import {
  authorizationValidationMiddleware,
  errorHandlerMiddleware,
  notificationHandlerMiddleware,
} from 'server/middlewares';
import { ftpUserValidationSchema } from 'validationSchema/ftp-users';
import { convertQueryToPrismaUtil, getOrderByOptions, parseQueryParams } from 'server/utils';
import { getServerSession } from '@roq/nextjs';
import { GetManyQueryOptions } from 'interfaces';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getFtpUsers();
    case 'POST':
      return createFtpUser();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFtpUsers() {
    const {
      limit: _limit,
      offset: _offset,
      order,
      ...query
    } = parseQueryParams(req.query) as Partial<GetManyQueryOptions>;
    const limit = parseInt(_limit as string, 10) || 20;
    const offset = parseInt(_offset as string, 10) || 0;
    const response = await prisma.ftp_user
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findManyPaginated({
        ...convertQueryToPrismaUtil(query, 'ftp_user'),
        take: limit,
        skip: offset,
        ...(order?.length && {
          orderBy: getOrderByOptions(order),
        }),
      });
    return res.status(200).json(response);
  }

  async function createFtpUser() {
    await ftpUserValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.access_right?.length > 0) {
      const create_access_right = body.access_right;
      body.access_right = {
        create: create_access_right,
      };
    } else {
      delete body.access_right;
    }
    if (body?.folder?.length > 0) {
      const create_folder = body.folder;
      body.folder = {
        create: create_folder,
      };
    } else {
      delete body.folder;
    }
    const data = await prisma.ftp_user.create({
      data: body,
    });
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}

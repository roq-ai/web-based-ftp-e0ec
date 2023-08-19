import axios from 'axios';
import queryString from 'query-string';
import { AccessRightInterface, AccessRightGetQueryInterface } from 'interfaces/access-right';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAccessRights = async (
  query?: AccessRightGetQueryInterface,
): Promise<PaginatedInterface<AccessRightInterface>> => {
  const response = await axios.get('/api/access-rights', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAccessRight = async (accessRight: AccessRightInterface) => {
  const response = await axios.post('/api/access-rights', accessRight);
  return response.data;
};

export const updateAccessRightById = async (id: string, accessRight: AccessRightInterface) => {
  const response = await axios.put(`/api/access-rights/${id}`, accessRight);
  return response.data;
};

export const getAccessRightById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/access-rights/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAccessRightById = async (id: string) => {
  const response = await axios.delete(`/api/access-rights/${id}`);
  return response.data;
};

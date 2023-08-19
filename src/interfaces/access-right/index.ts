import { FtpUserInterface } from 'interfaces/ftp-user';
import { GetQueryInterface } from 'interfaces';

export interface AccessRightInterface {
  id?: string;
  name: string;
  description?: string;
  ftp_user_id?: string;
  created_at?: any;
  updated_at?: any;

  ftp_user?: FtpUserInterface;
  _count?: {};
}

export interface AccessRightGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  ftp_user_id?: string;
}

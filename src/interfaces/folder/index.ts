import { FileInterface } from 'interfaces/file';
import { FtpUserInterface } from 'interfaces/ftp-user';
import { GetQueryInterface } from 'interfaces';

export interface FolderInterface {
  id?: string;
  name: string;
  path: string;
  ftp_user_id?: string;
  created_at?: any;
  updated_at?: any;
  file?: FileInterface[];
  ftp_user?: FtpUserInterface;
  _count?: {
    file?: number;
  };
}

export interface FolderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  path?: string;
  ftp_user_id?: string;
}

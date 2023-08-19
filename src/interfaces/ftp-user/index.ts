import { AccessRightInterface } from 'interfaces/access-right';
import { FolderInterface } from 'interfaces/folder';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FtpUserInterface {
  id?: string;
  username: string;
  password: string;
  folder_access: string;
  rights: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  access_right?: AccessRightInterface[];
  folder?: FolderInterface[];
  user?: UserInterface;
  _count?: {
    access_right?: number;
    folder?: number;
  };
}

export interface FtpUserGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  password?: string;
  folder_access?: string;
  rights?: string;
  user_id?: string;
}

import { FolderInterface } from 'interfaces/folder';
import { GetQueryInterface } from 'interfaces';

export interface FileInterface {
  id?: string;
  name: string;
  path: string;
  size: number;
  folder_id?: string;
  created_at?: any;
  updated_at?: any;

  folder?: FolderInterface;
  _count?: {};
}

export interface FileGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  path?: string;
  folder_id?: string;
}

const mapping: Record<string, string> = {
  'access-rights': 'access_right',
  files: 'file',
  folders: 'folder',
  'ftp-users': 'ftp_user',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

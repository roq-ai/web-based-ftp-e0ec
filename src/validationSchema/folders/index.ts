import * as yup from 'yup';

export const folderValidationSchema = yup.object().shape({
  name: yup.string().required(),
  path: yup.string().required(),
  ftp_user_id: yup.string().nullable(),
});

import * as yup from 'yup';

export const ftpUserValidationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
  folder_access: yup.string().required(),
  rights: yup.string().required(),
  user_id: yup.string().nullable(),
});

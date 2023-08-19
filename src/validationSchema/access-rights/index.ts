import * as yup from 'yup';

export const accessRightValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  ftp_user_id: yup.string().nullable(),
});

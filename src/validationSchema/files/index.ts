import * as yup from 'yup';

export const fileValidationSchema = yup.object().shape({
  name: yup.string().required(),
  path: yup.string().required(),
  size: yup.number().integer().required(),
  folder_id: yup.string().nullable(),
});

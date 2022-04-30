import * as yup from 'yup';

export const ActivityCategoryCreateSchema = yup.object().shape({
  name: yup.string().required(),
});

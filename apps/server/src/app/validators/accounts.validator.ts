import * as yup from 'yup';
import { CurrencyValue } from '@magiclick/utils/types/currency';

export const AccountCreateSchema = yup.object().shape({
  name: yup.string().required(),
  currency: yup
    .string()
    .required()
    .oneOf([CurrencyValue.TRY, CurrencyValue.USD, CurrencyValue.GBP]),
});

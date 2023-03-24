import * as Yup from 'yup';

export const NAME_SCHEMA = Yup.string().matches(/^[A-Z][a-z]{1, 16}$/, 'Must be latin letter').required();

export const EMAIL_SCHEMA = Yup.string().email('Enter correct email').required();

export const PASSWORD_SCHEMA = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/, 'Enter correct password').required();

// export const SIGN_UP_SCHEMA = Yup.object({
//   firstName: NAME_SCHEMA,
//   lastName: NAME_SCHEMA,
//   email: EMAIL_SCHEMA,
//   password: PASSWORD_SCHEMA,
//   age: Yup.number().min(14).max(99),
// })

export const SIGN_IN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  password2: Yup.string().oneOf([Yup.ref('password')], 'Password does not match'),
})
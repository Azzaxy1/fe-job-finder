import * as yup from 'yup'

const loginSchema = yup.object({
  email: yup
    .string()
    .email('Masukkan email yang valid')
    .required('Email harus diisi'),
  password: yup
    .string()
    .required('Password harus diisi')
    .min(6, 'Password minimal 6 karakter')
    .matches(/[a-z]+/, 'Password harus mengandung huruf kecil')
    .matches(/[A-Z]+/, 'Password harus mengandung huruf kapital')
    .matches(/[0-9]+/, 'Password harus mengandung angka')
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      'Password harus mengandung karakter khusus'
    )
})

const registerSchema = yup.object({
  name: yup.string().required('Nama harus diisi'),
  email: yup
    .string()
    .email('Masukkan email yang valid')
    .required('Email harus diisi'),
  phone: yup
    .string()
    .typeError('Nomor Telepon harus berupa angka')
    .required('Nomor Telepon harus diisi'),
  password: yup
    .string()
    .required('Password harus diisi')
    .min(6, 'Password minimal 6 karakter')
    .matches(/[a-z]+/, 'Password harus mengandung huruf kecil')
    .matches(/[A-Z]+/, 'Password harus mengandung huruf kapital')
    .matches(/[0-9]+/, 'Password harus mengandung angka')
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      'Password harus mengandung karakter khusus'
    ),
  confirmPassword: yup
    .string()
    .required('Konfirmasi Password harus diisi')
    .oneOf([yup.ref('password'), null], 'Password tidak cocok')
})

const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .required('Password harus diisi')
    .min(6, 'Password minimal 6 karakter')
    .matches(/[a-z]+/, 'Password harus mengandung huruf kecil')
    .matches(/[A-Z]+/, 'Password harus mengandung huruf kapital')
    .matches(/[0-9]+/, 'Password harus mengandung angka')
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      'Password harus mengandung karakter khusus'
    ),
  confirmPassword: yup
    .string()
    .required('Konfirmasi Password harus diisi')
    .oneOf([yup.ref('password'), null], 'Password tidak cocok')
})

const setPasswordSchema = yup.object({
  email: yup
    .string()
    .email('Masukkan email yang valid')
    .required('Email harus diisi')
})

export { loginSchema, registerSchema, resetPasswordSchema, setPasswordSchema }

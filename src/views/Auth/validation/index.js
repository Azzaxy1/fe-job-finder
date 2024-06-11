import * as yup from 'yup'

const loginSchema = yup.object({
  email: yup.string().email(
    'Masukkan email yang valid'
  ).required('Email harus diisi'),
  password: yup.string().required('Password harus diisi').min(6, 'Password minimal 6 karakter')
    .matches(
      /[a-z]+/,
      'Password harus mengandung huruf kecil'
    )
    .matches(
      /[A-Z]+/,
      'Password harus mengandung huruf kapital'
    )
    .matches(
      /[0-9]+/,
      'Password harus mengandung angka'
    )
    .matches(
      /[!@#$%^&*()_+{}|<>,./?-]/,
      'Password harus mengandung karakter khusus'
    )
})

export { loginSchema }

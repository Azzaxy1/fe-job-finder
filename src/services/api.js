const baseURL = import.meta.env.VITE_API_URL

const getAccessToken = () => {
  return localStorage.getItem('accessToken')
}

const putAccessToken = (accessToken) => {
  return localStorage.setItem('accessToken', accessToken)
}

const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

const login = async ({ email, password }) => {
  const response = await fetch(`${baseURL}/api/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const responseJson = await response.json()

  const { message } = responseJson

  if (message !== 'Login Success') {
    throw new Error(message)
  }

  const { resource } = responseJson

  return resource
}

const register = async ({ name, email, phone, password, confirmPassword, role }) => {
  const response = await fetch(`${baseURL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phone, password, confirm_password: confirmPassword, role })
  })

  const responseJson = await response.json()
  const { message } = responseJson

  if (message !== 'Register Success') {
    return { success: false }
  }

  return { success: true, message }
}

const getUserLogged = async () => {
  const response = await fetchWithToken(`${baseURL}/api/profile`)
  const responseJson = await response.json()

  const { resource } = responseJson
  return resource
}

const logout = async () => {
  const response = await fetchWithToken(`${baseURL}/api/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const responseJson = await response.json()
  const { message } = responseJson
  if (message !== 'Logout Success') {
    throw new Error(message)
  }

  localStorage.removeItem('accessToken')

  return message
}

export { login, fetchWithToken, logout, putAccessToken, register, getUserLogged }

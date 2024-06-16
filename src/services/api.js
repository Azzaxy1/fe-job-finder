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

  const { message, resource } = responseJson

  if (message !== 'Login Success') {
    throw new Error(message)
  }

  return { resource, message }
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
  const { success, message } = responseJson

  if (!success) {
    throw new Error(JSON.stringify(message))
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

  return message
}

const updateProfile = async ({ name, email, phone, address, description, image, cv }) => {
  const response = await fetchWithToken(`${baseURL}/api/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, phone, address, description, image, cv })
  })

  const responseJson = await response.json()

  const { success, message } = responseJson
  if (!success) {
    throw new Error(message)
  }

  return message
}

const getDashboardJob = async () => {
  const response = await fetchWithToken(`${baseURL}/api/jobs/dashboard`)
  const responseJson = await response.json()

  const { resource } = responseJson
  return resource
}

export { login, fetchWithToken, logout, updateProfile, putAccessToken, register, getUserLogged, getDashboardJob }

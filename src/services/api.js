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

  const { message, resource, success } = responseJson

  if (message !== 'Login Success') {
    throw new Error(message)
  }

  return { resource, message, success }
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

  return { success, message }
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

const updateProfile = async ({ name, email, phone, address, description, foto, file }) => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('phone', phone)
  formData.append('address', address)
  formData.append('description', description)
  if (foto) formData.append('foto', foto)
  if (file) formData.append('file', file)

  const response = await fetchWithToken(`${baseURL}/api/profile`, {
    method: 'POST',
    body: formData
  })

  const responseJson = await response.json()
  const { success, message, resource } = responseJson
  if (!success) {
    throw new Error(message)
  }

  return { message, success, resource }
}

const getAllJob = async () => {
  const response = await fetchWithToken(`${baseURL}/api/jobs`)
  const responseJson = await response.json()

  const { resource, success } = responseJson
  return { resource, success }
}

const applyJob = async ({ id }) => {
  const response = await fetchWithToken(`${baseURL}/api/worker/apply-job/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const responseJson = await response.json()

  const { success, message } = responseJson
  return { success, message }
}

const getApplyJob = async () => {
  const response = await fetchWithToken(`${baseURL}/api/worker/apply-job`)
  const responseJson = await response.json()

  const { success, message, resource } = responseJson
  return { success, message, resource }
}

const getDashboard = async () => {
  const response = await fetchWithToken(`${baseURL}/api/hire/jobs/dashboard`)
  const responseJson = await response.json()

  const { resource } = responseJson
  return resource
}

const getDashboardJob = async () => {
  const response = await fetchWithToken(`${baseURL}/api/hire/jobs`)
  const responseJson = await response.json()

  const { resource } = responseJson
  return resource
}

const addJob = async ({ title, company, location, salarymin, salarymax, type, description }) => {
  const response = await fetchWithToken(`${baseURL}/api/hire/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, company, location, salarymin, salarymax, type, description })
  })

  const responseJson = await response.json()
  const { success, message, resource } = responseJson
  if (!success) {
    throw new Error(message)
  }

  return { message, success, resource }
}

const editJob = async ({ title, company, location, salarymin, salarymax, type, description, id }) => {
  const response = await fetchWithToken(`${baseURL}/api/hire/jobs/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, company, location, salarymin, salarymax, type, description })
  })

  const responseJson = await response.json()
  const { success, message, resource } = responseJson
  if (!success) {
    throw new Error(message)
  }

  return { message, success, resource }
}

const deleteJob = async ({ id }) => {
  const response = await fetchWithToken(`${baseURL}/api/hire/jobs/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const responseJson = await response.json()
  const { success, message, resource } = responseJson
  if (!success) {
    throw new Error(message)
  }

  return { message, success, resource }
}

export {
  login,
  fetchWithToken,
  logout,
  updateProfile,
  applyJob,
  getApplyJob,
  getAllJob,
  putAccessToken,
  register,
  getUserLogged,
  getDashboard,
  getDashboardJob,
  addJob,
  editJob,
  deleteJob
}

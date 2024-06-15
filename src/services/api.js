const baseURL = import.meta.env.VITE_API_URL

const getAccessToken = () => {
  return localStorage.getItem('token')
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

  console.log(response)

  const responseJson = await response.json()

  console.log(responseJson)

  const { message } = responseJson

  if (message !== 'Login Success') {
    throw new Error(message)
  }

  const { resource } = responseJson

  return resource
}

export { login, fetchWithToken, putAccessToken }

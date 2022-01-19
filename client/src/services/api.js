import Axios from 'axios'

export const BASE_URL = 'postgres://enboniuimemrwa:0d03dbefb45a5b64af482ab900915e517f059ed5a984d8434883654ddeed80dd@ec2-35-171-90-188.compute-1.amazonaws.com:5432/d9vsd2tesd493v'
const Client = Axios.create({ baseURL: BASE_URL })
// Intercepts every request axios makes
Client.interceptors.request.use(
    (config) => {
      // Reads the token in localstorage
      const token = localStorage.getItem('token')
      // if the token exists, we set the authorization header
      if (token) {
          config.headers['authorization'] = `Bearer ${token}`
      }
      return config // We return the new config if the token exists or the default config if no token exists.
      // Provides the token to each request that passes through axios
    },
    (error) => Promise.reject(error)
  )

export default Client
import axios from 'axios'
import router from '@/router'

export function useAxios (url, config, callback) {
  const loading = true
  let result = null

  if (typeof config === 'function') {
    callback = config
    config = {}
  }

  axios({
    url,
    ...config,
    timeout: 60000,
    baseURL: '/'
  })
    .then(res => {
      const { data } = res
      if (data.code === 200) {
        result = data.data
        callback(result)
      }
    })
    .catch(() => {
      router.push('/error')
    })

  return { loading, result }
}

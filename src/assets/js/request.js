import axios from 'axios'
import router from '@/router'

function handleError (error) {
  console.info('>>>>>', error)
  return Promise.reject(error)
}

// 根据开发环境和生产环境使用不同的 baseURL
// const baseURL = '/'
// 通过 Node 中间件代理，实现跨域请求
const baseURL = 'http://47.106.196.184:3000'
const instance = axios.create({
  baseURL: baseURL,
  timeout: 600000,
  withCredentials: false
})
// http request 拦截器
instance.interceptors.request.use(
  config => {
    console.log('请求的 config', config)
    return config
  },
  error => {
    return handleError(error)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  response => {
    const status = response.data.code
    // 拦截响应，做统一处理
    if (status === 200) {
      console.log('', response.data.data)
      return response.data.data
    }
  },
  error => {
    return handleError(error)
  }
)

export default instance

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

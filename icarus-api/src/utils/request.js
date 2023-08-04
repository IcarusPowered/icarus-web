import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { setToken, getInfo } from '@/utils/storage.js'

const request = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: {
    // Authorization: `Bearer ${ store.getters.token }`,
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json; charset=utf-8',
  }
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  const token = store.getters.token
  config.headers.token = token || '' // 请求添加token
  // config.headers.Authorization = 'Bearer ' + store.getters.token
  // if (token) {
  //   config.headers['Access-Token'] = token
  //   config.headers.platform = 'H5'
  // }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(async function (response) {
  // 如果接口返回token，替换本地旧token
  if (response.headers.token) {
    const newToken = response.headers.token
    if (localStorage.getItem('user_info')) {
      setToken(newToken)
    }
  }
  //  自定义设置后台返回code对应的响应方式
  if (response.data.code === 203) { // 未登录或登录超时
    return Promise.reject(new Error('登录超时'))
  } else if (response.state === 401) { // 如果是token过期，跳转至登录,或者判断是否有refresh_token
    // 1.重新登录 影响体验
    Vue.prototype.$message.error('登录已过期，请重新登录！')
    store.commit('user/setUserInfo', {})
    // 此处接跳转登录逻辑
    // 2.判断是否有refresh_token，重新发起请求获取token，无需登录，体验好
    if (!getInfo() || !getInfo().refresh_token) { // 无refresh_token 重新登录
      return this.$route.push('/login')
    } else {
      try {
        // 如果更新token成功，把之前失败的用户请求继续发出去
        await getNewToken(getInfo())
        // config 是一个对象，其中包含本次失败请求相关的那些配置信息，例如 url、method 都有
        // return 把 request 的请求结果继续返回给发请求的具体位置
        return request(response) // ！！！！！！此处可能有错，重新发起请求，这个if else逻辑好像要放在下面error里面
      } catch (error) {
        // 如果更新token失败，直接跳转 登录页
        console.log('请求刷新token出错了' + error)
        this.$route.push('/login')
      }
    }
  } else { // 接口正常，返回数据
    return response
  }
}, function (error) {
  return Promise.reject(error)
})

//  请求新的token
async function getNewToken (user) {
  // 发送请求新的 token的请求
  const { data } = await axios({
    url: '',
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${user.refresh_token}`
    }
  })
  // 判断请求是否成功
  if (data.message === '') {
    // 拿到新的token ，存到store和本地里
    const newToken = data.data.token
    // 调用store用的方法，更新token
    setToken(newToken)
  }
}

export default request

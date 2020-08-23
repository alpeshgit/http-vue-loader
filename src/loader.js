import Vue from 'vue'
import httpVueLoader from './httpVueLoader'

import axios from 'axios'

httpVueLoader.httpRequest = function (url, payload) {

  return axios.post(url, payload)
    .then(function (res) {

      return res.data.vuetemplate
    })
    .catch(function (err) {
      console.log(err)
      return Promise.reject(err.status)
    })
}

Vue.use(httpVueLoader)

//export default { httpVueLoader }

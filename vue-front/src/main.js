import Vue from 'vue'

import './plugins/view-ui.js'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import './plugins/md5.js'
import './plugins/sse.js'
import axios from 'axios'

import router from './router'

import VueMarkdown from 'vue-markdown'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' // 选择需要的样式

Vue.component('vue-markdown', VueMarkdown)
Vue.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

Vue.prototype.$http = axios

if (process.env.NODE_ENV === 'production') {
    console.log('部署环境')
} else if(process.env.NODE_ENV === 'development') {
    console.log('开发环境')
}

// 配置请求根路径
axios.defaults.baseURL = process.env.VUE_APP_API_URL

axios.interceptors.request.use(config => {
    console.log(config)
    // config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

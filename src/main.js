import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' //作用:避免每个页面都要写导入axios
import App from './App.vue'

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if(res.status == 0){         //成功
    return res.data;
  }else if(res.status == 10){  //未登录
    window.location.href = '/#/login'
  }else{
    alert(res.msg);
  }
});

Vue.use(VueAxios,axios);//将实例挂载上去，发送请求时可以直接用this
Vue.config.productionTip = false//生产环境的提示

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

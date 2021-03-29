import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Auth } from '../firebase'

Vue.config.productionTip = false

let app

Auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
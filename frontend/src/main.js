import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Auth } from '@/firebase'
import vuetify from './plugins/vuetify';
import authMiddleware from '@/auth'

Vue.config.productionTip = false

let app

// Configures axios with authentication headers
authMiddleware();


Auth.onAuthStateChanged(() => {
  if (!app) {
   app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})
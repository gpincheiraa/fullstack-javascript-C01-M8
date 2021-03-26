import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products){
      state.products = products
    }
  },
  actions: {
    async getProducts({commit}){
      try {
        console.log(process.env.VUE_APP_TEST);
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/products`)
        commit('SET_PRODUCTS', response.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})

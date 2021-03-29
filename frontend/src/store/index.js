import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    product: {
      name: '',
      description: '',
      code: ''
    }
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
    },

    async createProducts({dispatch}, productParams){
      console.log(process.env.NODE_ENV, process.env.VUE_APP_API_URL);
      try {
        await axios.post(` ${process.env.VUE_APP_API_URL}/products`, productParams);
        dispatch("getProducts");
      } catch (error) {
        console.log(error);
      } 
    }
  },
  modules: {
  }
})

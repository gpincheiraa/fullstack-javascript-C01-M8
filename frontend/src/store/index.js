import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
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
    },
    SET_USER(state, user){
      state.user = user
    }
  },
  actions: {
    async getProducts({commit}){
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/products`)
        commit('SET_PRODUCTS', response.data)
      } catch (error) {
        console.log(error);
      }
    },

    async createProducts({dispatch}, productParams){
      try {
        await axios.post(` ${process.env.VUE_APP_API_URL}/products`, productParams);
        dispatch("getProducts");
      } catch (error) {
        console.log(error);
      } 
    },
    setUser({commit}, user){
      commit('SET_USER',user)
    }
  },
  modules: {
  }
})

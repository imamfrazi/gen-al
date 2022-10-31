import Vue from 'vue'
import Vuex from 'vuex'
import penumpangKeretaStore from './penumpang/penumpangKeretaStore'
import userStore from './user/userStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    penumpangKeretaStore,
    userStore
  }
})
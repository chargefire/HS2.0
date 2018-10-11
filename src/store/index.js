import Vue from 'vue'
import Vuex from 'Vuex'
import vuexModules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: vuexModules
})


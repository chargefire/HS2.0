import Vue from 'vue'
import Vuex from 'Vuex'
import vueModules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:vueModules
})


import Vue from 'vue'
import Vuex from 'vuex'

import leftbarModule from '@/store/leftbarModule'

Vue.use( Vuex )


export default new Vuex.Store({
    modules: {
        leftbarModule,
    }
})
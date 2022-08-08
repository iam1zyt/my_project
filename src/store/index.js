import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = true



const store = new Vuex.Store({
    state:{
        piedata:[],
        scatterdata:[],
    },
    mutations:{
        setPieData(state,piedata){
            state.piedata = piedata;
        },
        setScatterData(state,scatterdata){
            state.scatterdata = scatterdata;
        },
    },
    actions:{
    },
    getters:{

    },

})

export default store;
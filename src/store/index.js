import Vue from 'vue'
import Vuex from 'vuex'
import user from './module/user'


Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
    modules:{
        user,
    },
    state:{
        token:'',
        username:'zyt',
        userSate:0,
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
       /*  // 将token存储到state和localStorage中
        SET_TOKEN(state,token){
            state.token = token;
            localStorage.setItem("token",token)
        } */
    },
    actions:{
    },
    getters:{

    },

})

export default store;
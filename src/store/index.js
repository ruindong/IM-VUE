import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            userId: "",
            userName: ""
        }
    },
    getters: {
        getUserInfo (state) {
            return state.userInfo
        }
    },
    mutations: {
        setUserInfo (state, info) {
            state.userInfo = info;
        }
    },
    actions: {},
    modules: {}
})

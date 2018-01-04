import Vuex from 'vuex'
import Vue from "vue";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        new_staff_form:false
    },
    mutations: {
        increment (state) {
            state.count++
        },
        open_new_staff_form(state){
            state.new_staff_form = true;
        },
        close_new_staff_form(state){

            state.new_staff_form = false
        }
    },
    getters:{
        new_staff_form_is_open(state){
            return state.new_staff_form
        }
    }
})

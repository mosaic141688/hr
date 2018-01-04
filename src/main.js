import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.css'
import './style.css'
import VueRouter from 'vue-router'
import store from './store'
import VueSocketio from 'vue-socket.io';
Vue.use(VueSocketio, 'localhost:3000',store);


Vue.use(VueRouter)


Vue.use(Vuetify, {
    theme: {
        primary: '#a00000',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
})

new Vue({
  el: '#app',
    router,
    store,
  render: h => h(App)
})



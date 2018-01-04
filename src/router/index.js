import VueRouter from 'vue-router'
import personel from '../components/personel'
import positions from '../components/positions'
import leave from '../components/leave'
import login from '../components/login'
import Vue from 'vue'

let router
    // Configure routes for all Applets
    const routes = [
        {
            path: '/',
            name:'Home',
            component:personel
        },
        {
            path: '/personel',
            name:'Home',
            component:personel
        },
        {
            path: '/positions',
            name:'Home',
            props:true,
            component:positions
        },
        {
            path: '/leave',
            name:'Home',
            component:leave
        },
        {
            path: '/login',
            name:'Home',
            component:login
        }
    ]




Vue.use(VueRouter)

    // Instantiate `router`
export default new VueRouter({
        routes,
        mode: 'history'
    })

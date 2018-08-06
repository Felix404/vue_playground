import Vue from 'vue'
import Router from 'vue-router'
import Main from './../views/DefaultLayout'
import Profile from './../views/Profile'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main
        },
        {
            path: '/user/',
            component: Profile
        },
        {
            path: '/events/',
            component: Main
        }
    ]
})
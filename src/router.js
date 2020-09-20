import Vue from 'vue'
import Router from 'vue-router'
import Dyeing from '../pages/dyeing_manage.vue'
import Search from '../pages/dyeing_search.vue'
import Entrance from '../pages/entrance_manage.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/dyeing',
            name: 'Dyeing',
            component: Dyeing
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/entrance',
            name: 'Entrance',
            component: Entrance
        },
        {
            path: '/',
            name: 'default_search',
            component: Search
        }
    ]
})
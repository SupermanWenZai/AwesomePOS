import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/components/pages/Pos'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Pos',
        component: Pos
    }]
})
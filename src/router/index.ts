import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'


import HomeRoutes from './modules/home'


const routes: Array<RouteRecordRaw> = [
    ...HomeRoutes
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
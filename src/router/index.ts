import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'


import HomeRoutes from './homeRouter'


const routes: Array<RouteRecordRaw> = [
    ...HomeRoutes
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router
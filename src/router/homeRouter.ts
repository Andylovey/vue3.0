import {
    RouteRecordRaw
} from 'vue-router'
import Home from '@/views/Home'
import ResponsePage from '@/views/Home/ApiPage/ResponsePage'
import LifeCyclePage from '@/views/Home/ApiPage/LifeCyclePage'

const HomeRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/responsepage',
                name: 'ResponsePage',
                component: ResponsePage,
                alias: '/'
            },
            {
                path: '/lifecyclepage',
                name: 'LifeCyclePage',
                component: LifeCyclePage,
            }
        ]
    },
    //...
]

export default HomeRoutes
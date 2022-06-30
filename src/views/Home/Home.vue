<template>
    <el-container class="layout-container-demo" style="height: 100%">
        <el-aside width="200px">
            <el-scrollbar>
                <el-menu>
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <Document />
                            </el-icon>常见API
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="(menu) in menusList" :key="menu.index" @click="handleRouteMenu(menu)"
                                :index="menu.index">
                                {{ menu.name }}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-sub-menu>
                </el-menu>
            </el-scrollbar>
        </el-aside>

        <el-container style="display: block;height: 100%;overflow: auto;">
            <router-view></router-view>
        </el-container>


    </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Document, Setting } from '@element-plus/icons-vue'
import router from '../../router'

interface menusList {
    index: string
    name: string
    path: string
}

const menusList: Array<menusList> = [
    {
        index: '1-1',
        name: 'ref,reactive,toRef,toRefs',
        path: '/responsepage'
    },
    {
        index: '1-2',
        name: '生命周期函数',
        path: '/lifecyclepage'
    }
]

const handleRouteMenu = (menu: menusList) => {
    router.push(menu.path)
}

</script>

<style scoped>
.layout-container-demo .el-aside {
    border-right: 1px solid #ccc;
}

.layout-container-demo .el-menu {
    border-right: none;
}
</style>

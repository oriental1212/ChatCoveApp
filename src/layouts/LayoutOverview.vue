<script setup>
import { ref } from 'vue'
import Sider from './SiderLayout/SiderLayout.vue'
import Search from '@/components/search/SearchDialog.vue'

const searchChangeFlag = ref(false)
</script>

<template>
    <div class="layout-overview">
        <n-layout has-sider class="layout">
            <!-- 边框 -->
            <n-layout-sider collapse-mode='width' :width="120" class="sider">
                <Sider></Sider>
            </n-layout-sider>
            <!-- 内容 -->
            <n-layout-content class="content">
                <div class="content-children">
                    <router-view></router-view>
                </div>
            </n-layout-content>
        </n-layout>
        <!-- 搜索 -->
        <div class="search" v-show="searchChangeFlag">
            <Search></Search>
        </div>
    </div>
</template>

<style lang="less" scoped>
#app {
    width: 100%;
    height: 100%;
}
.layout-overview {
    width: 100%;
    height: 100%;
    .search{
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 99;
    }
    .layout{
        height: 100vh;
        width: 100%;
        .sider{
            background-color: var(--BackgroundColor);
        }
        .content{
            background-color: var(--BackgroundColor);
            width: 100%;
            height: 100%;
            .content-children{
                height: calc(100vh - 30px);
                margin: 15px 15px 15px 10px;
                border: 0 solid;
                border-radius: 20px;
                background-color: #25272A;
            }
        }
    }
}
</style>

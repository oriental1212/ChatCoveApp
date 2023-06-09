<script setup>
import Sider from './SiderLayout/SiderLayout.vue'
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

</style>

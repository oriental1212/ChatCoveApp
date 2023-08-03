<script setup>
import Account from './personal-settings/AccountSetting.vue'
import { useSettingStore } from '@/stores/modules/setting/index.js'

const settingStore = useSettingStore()
</script>

<template>
    <div class="setting-page-main">
        <div class="setting-page-main-content">
            <div class="title">{{ settingStore.settingTitle }}</div>
            <Account v-if="'账号设置' === settingStore.settingTitle"></Account>
        </div>
    </div>
</template>

<style lang="less" scoped>
@width: 660px;
.setting-page-main{
    height: calc(100vh - 30px);
    min-width: 660px;
    overflow-x: hidden;
    flex: 1;
    .setting-page-main-content{
        padding: 40px var(--image16Size) 60px 56px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .title{
            width: 100%;
            height: 70px;
            font-size: 48px;
            line-height: 40px;
            color: var(--text-color);
            border-bottom: 1px solid var(--color-line);
            margin-bottom: 40px;
        }
    }
    .setting-page-main-content::-webkit-scrollbar {
        display: none;
    }
}
.setting-page-main::-webkit-scrollbar {
    display: none;
}
</style>

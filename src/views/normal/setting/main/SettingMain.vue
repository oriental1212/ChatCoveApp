<script setup>
import Account from './personal-settings/AccountSetting.vue'
</script>

<template>
    <div class="setting-page-main">
        <div class="setting-page-main-content">
            <div class="title">111</div>
            <div class="description">1234566</div>
            <Account></Account>
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
            height: 40px;
            font-size: 48px;
            line-height: 40px;
            color: var(--text-color);
        }
        .description{
            padding: 16px 0;
            height: 20px;
            font-size: 14px;
            line-height: 20px;
            color: var(--text-tip-color);
            border-bottom: 1px solid var(--color-line);
            margin-bottom: 40px;
        }
    }
    .setting-page-main-content::-webkit-scrollbar {
        display: none;
    }
}
</style>

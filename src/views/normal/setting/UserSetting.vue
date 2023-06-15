<script setup>
import SettingMain from './main/SettingMain.vue'
import SettingNav from './nav/SettingNav.vue'
</script>

<template>
    <div class="setting-page-overflow">
        <SettingNav></SettingNav>
        <SettingMain></SettingMain>
    </div>
</template>

<style lang="less" scoped>
.setting-page-overflow{
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}
</style>

<script setup>
import ChannelSidebar from './cpns/ChannelSidebar.vue'
</script>

<template>
    <div class="channel-page">
        <ChannelSidebar></ChannelSidebar>
        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
.channel-page{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
</style>

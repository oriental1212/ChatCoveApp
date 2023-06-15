<script setup>
import FriendsSidebar from '@/components/friends/Sidebar/FriendsSidebar.vue'
</script>

<template>
    <div class="friends-page">
        <FriendsSidebar></FriendsSidebar>
        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
.friends-page{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
</style>

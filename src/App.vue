<script setup>
import { dateZhCN, zhCN } from 'naive-ui'
import { useThemeStore } from '@/stores/modules/theme/index.js'
// import { computed } from 'vue'

const themeStore = useThemeStore()
themeStore.osThemeInit()
// const theme = computed(() => {
//     return themeStore.theme
// })
</script>
        <!-- :theme="theme" -->
<template>
    <n-config-provider
        :locale="zhCN"
        :date-locale="dateZhCN"
        class="provider"
    >
        <n-message-provider>
            <router-view></router-view>
        </n-message-provider>
    </n-config-provider>
</template>

<style lang="less" scoped>
</style>

import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
    state: () => ({
        // 搜索控制
        searchFlag: false
    }),
    actions: {
        // 主题初始化
        searchFlagChange () {
            this.searchFlag = !this.searchFlag
        }
    }
})

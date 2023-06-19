import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
    state: () => ({
        // 搜索控制
        searchFlag: false,
        insertChannelFlag: false
    }),
    actions: {
        // 搜索改变
        searchFlagChange () {
            this.searchFlag = !this.searchFlag
        },
        // 服务器添加改变
        insertChannelFlagChange () {
            this.insertChannelFlag = !this.insertChannelFlag
        }
    }
})

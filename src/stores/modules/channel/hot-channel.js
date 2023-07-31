import { defineStore } from 'pinia'

export const useHotChannelStore = defineStore('hotChannel', {
    state: () => ({
        // 热门服务器
        hotChannelList: null,
        allChannelList: null
    }),
    actions: {
        // 获取热门服务器
        getHotChannelList () {
            return true
        }
    }
})

import { defineStore } from 'pinia'

export const useChannelInfoStore = defineStore('channelInfo', {
    state: () => ({
        // 服务器列表
        ChannelList: []
    }),
    actions: {
        // 获取服务器
        getHotChannelList () {
            return true
        },
        // 创建服务器
        createChannel (createChannlInfo) {
            this.ChannelList.push(createChannlInfo)
        }
    }
})

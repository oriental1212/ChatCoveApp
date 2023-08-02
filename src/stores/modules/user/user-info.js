import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        // 用户信息
        userInfo: null
    }),
    actions: {
    }
})

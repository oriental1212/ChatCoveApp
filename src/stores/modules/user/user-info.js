import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        // 用户信息
        userInfo: {
            nickName: 'dongfang',
            summery: '我真帅',
            gender: '男',
            birthday: '123131',
            location: '123131'
        }
    }),
    actions: {
    }
})

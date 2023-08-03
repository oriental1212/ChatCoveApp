import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
    state: () => ({
        // 设置标题名称
        settingTitle: '账号设置'
    }),
    actions: {
        // 设置标题改变
        settingTitleChange (item) {
            this.settingTitle = item
        }
    }
})

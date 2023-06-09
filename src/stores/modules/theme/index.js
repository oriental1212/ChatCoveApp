import { defineStore } from 'pinia'
import { darkTheme, useOsTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', {
    state: () => ({
        // 初始化主题
        theme: null
    }),
    actions: {
        // 主题初始化
        osThemeInit () {
            if (!localStorage.getItem('chatCoveTheme')) {
                const osTheme = useOsTheme()
                this.theme = osTheme.value === 'dark' ? darkTheme : null
            }
        }
    }
})

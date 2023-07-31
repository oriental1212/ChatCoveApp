export const navRouter = [
    {
        title: '个人设置',
        children: [
            {
                title: '账号设置',
                isActive: true
            },
            {
                title: '隐私设置',
                isActive: false
            },
            {
                title: '授权管理',
                isActive: false
            },
            {
                title: '邀请码',
                isActive: false
            },
            {
                title: '表情管理',
                isActive: false
            }
        ]
    },

    {
        title: '应用设置',
        children: [
            {
                title: '语音设置',
                isActive: false
            },
            {
                title: '按键设置',
                isActive: false
            },
            {
                title: '通知',
                isActive: false
            },
            {
                title: '语言',
                isActive: false
            },
            {
                title: '外观',
                isActive: false
            },
            {
                title: '工具',
                isActive: false
            },
            {
                title: '高级设置',
                isActive: false
            }
        ]
    }
]

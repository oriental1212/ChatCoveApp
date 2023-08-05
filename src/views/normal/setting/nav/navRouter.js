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
            }
        ]
    }
]

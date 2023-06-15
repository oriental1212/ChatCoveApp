export const updateRecords = {
    title: '更新记录',
    isActive: false,
    isShow: false

}
export const navRouter = [
    {
        title: '个人设置',
        children: [
            {
                title: '账号设置',
                isActive: true
            },
            {
                title: '背包',
                isActive: false

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
            }
        ]
    },
    {
        title: '充值服务',
        children: [
            {
                title: '激活vip',
                isActive: false
            },
            {
                title: '道具商城',
                isActive: false
            },
            {
                title: '我的账单',
                isActive: false
            },
            {
                title: '兑换码',
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
                title: '表情管理',
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

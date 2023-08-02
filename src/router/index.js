import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/app/hotChannel'
        },
        {
            name: 'appOverview',
            path: '/app',
            component: () => import('@/layouts/LayoutOverview.vue'),
            children: [
                // 设置页面跳转
                {
                    name: 'userSetting',
                    path: '/app/userSetting',
                    component: () => import('@/views/normal/setting/UserSetting.vue')
                },
                // 好友页面跳转
                {
                    name: 'friends',
                    path: '/app/friends',
                    component: () => import('@/views/friends/FriendPage.vue'),
                    children: [
                        {
                            name: 'allFriends',
                            path: '/app/friends/allFriends',
                            component: () => import('@/views/friends/all-friends/AllFriends.vue')
                        },
                        {
                            name: 'blacklistFriends',
                            path: '/app/friends/blacklistFriends',
                            component: () => import('@/views/friends/blacklist-friends/BlacklistFriends.vue')
                        },
                        {
                            name: 'onlineFriends',
                            path: '/app/friends/onlineFriends',
                            component: () => import('@/views/friends/online-friends/OnlineFriends.vue')
                        },
                        {
                            name: 'privateChat',
                            path: '/app/friends/privateChat',
                            component: () => import('@/views/friends/cpns/PrivateChat.vue')
                        }
                    ]
                },
                // 频道页面跳转
                {
                    name: 'channel',
                    path: '/app/channel',
                    component: () => import('@/views/channel/ChannelPage.vue'),
                    children: [
                        {
                            name: 'groupChat',
                            path: '/app/channel/groupChat',
                            component: () => import('@/views/channel/cpns/GroupChat.vue')
                        }
                    ]
                },
                // 热门频道
                {
                    name: 'hotChannel',
                    path: '/app/hotChannel',
                    component: () => import('@/views/channel/HotChannel.vue')
                }
            ]
        },
        // 登录
        {
            name: 'authCheck',
            path: '/login',
            component: () => import('@/views/auth/AuthCheck.vue'),
            children: [
                {
                    name: 'loginAuth',
                    path: '/login/loginAuth',
                    component: () => import('@/views/auth/components/LoginAuth.vue')
                },
                {
                    name: 'forgetAuth',
                    path: '/login/forgetAuth',
                    component: () => import('@/views/auth/components/ForgetAuth.vue')
                },
                {
                    name: 'loginPassword',
                    path: '/login/loginPassword',
                    component: () => import('@/views/auth/components/LoginPassword.vue')
                },
                {
                    name: 'registerAuth',
                    path: '/login/registerAuth',
                    component: () => import('@/views/auth/components/registerAuth.vue')
                }
            ]
        }
    ]
})

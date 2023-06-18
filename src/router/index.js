import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/app'
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
                            component: () => import('@/components/friends/chat/PrivateChat.vue')
                        }
                    ]
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
                }
            ]
        }
    ]
})

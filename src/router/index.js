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
                {
                    name: 'userSetting',
                    path: '/app/userSetting',
                    component: () => import('@/views/normal/setting/UserSetting.vue')
                }
            ]
        },
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

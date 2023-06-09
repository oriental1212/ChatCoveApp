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
                    name: 'user-setting',
                    path: '/app/user-setting',
                    component: () => import('@/views/normal/setting/UserSetting.vue')
                }
            ]
        }
    ]
})

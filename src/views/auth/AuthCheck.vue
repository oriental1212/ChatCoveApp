<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
// import QC from '@/services/qc-sdk/qcsdk.js'
// import { useMessage } from 'naive-ui'

// const message = useMessage()
const imgList = reactive([
    {
        imgName: 'LoginPassword',
        imgUrl: '/src/assets/img/auth/computer.png'
    },
    {
        imgName: 'LoginAuth',
        imgUrl: '/src/assets/img/auth/mail.png'
    }
    // {
    //     imgName: 'TencentAuth',
    //     imgUrl: '/src/assets/img/auth/qq.png'
    // }
])
const router = useRouter()
const clickItemBox = (item) => {
    // if (item.imgName === 'TencentAuth') {
    //     qqLogin()
    // } else {
    //     router.push({ path: '/login/' + item.imgName })
    // }
    router.push({ path: '/login/' + item.imgName })
}

// const qqLogin = () => {
//     QC.Login.showPopup({
//         appid: '102062176',
//         redirectURI: 'http://chatcove.oriental.cool/qqcallback'
//     })
// }

// onBeforeMount((openId, accessToken) => {
//     QC.Login.getMe((openId, accessToken) => {
//         if (openId !== undefined) {
//             console.log(openId)
//             console.log('---------------')
//             console.log(accessToken)
//             QC.api('get_user_info', '1304206691')
//                 .success((s) => {
//                     message.success('回调成功')
//                 })
//                 .error((err) => {
//                     message.error(err)
//                 })
//         }
//     })
// })
</script>

<template>
    <div class="auth-check">
        <div class="all-box">
            <div class="nav-box">
                <img src="@/assets/img/Layout/ChatCoveLogoDark.png" alt="">
                <div class="item-box" v-for="item in imgList" :key="item" @click="clickItemBox(item)">
                    <img :src=item.imgUrl alt="">
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="less" scoped>
.auth-check{
    height: 100vh;
    width: 100%;
    background: url(@/assets/img/auth/mountain.jpg);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .all-box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .nav-box{
            height: 450px;
            width: 50px;
            border-radius: 20px;
            padding: 16px 16px 16px 16px;
            margin-right: 64px;
            background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            img{
                width: var(--image64Size);
                height: var(--image32Size);
            }
            .item-box{
                height: 50px;
                width: 100%;
                border-radius: 16px;
                background-color: #A3A19D;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                img{
                    width: var(--image32Size);
                    height: var(--image32Size);
                }
            }
            .item-box:hover{
                transform: scale(1.15);
                cursor: pointer;
            }
        }
    }
}
</style>

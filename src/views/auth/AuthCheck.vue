<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const imgList = reactive([
    {
        imgName: 'LoginPassword',
        imgUrl: '/src/assets/img/auth/computer.png'
    },
    {
        imgName: 'LoginAuth',
        imgUrl: '/src/assets/img/auth/phone.png'
    },
    {
        imgName: '',
        imgUrl: '/src/assets/img/auth/qq.png'
    },
    {
        imgName: '',
        imgUrl: '/src/assets/img/auth/wechat.png'
    }
])
const router = useRouter()
const clickItemBox = (item) => {
    if (item.imgName === 'LoginPassword') {
        router.push({ path: '/login/loginPassword' })
    } else if (item.imgName === 'LoginAuth') {
        router.push({ path: '/login/loginAuth' })
    }
}
</script>

<template>
    <div class="auth-check">
        <div class="box-title">
            欢迎来到ChatCove
        </div>
        <div class="all-box">
            <div class="nav-box">
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
            height: 500px;
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
    .box-title{
        font-size: 32px;
        height: 32px;
        width: auto;
        margin-bottom: 32px;
        color: rgb(198, 255, 233);
    }
}
</style>

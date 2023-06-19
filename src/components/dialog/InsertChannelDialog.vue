<script setup>
import { reactive } from 'vue'
import CreateChannel from './cpns/CreateChannel.vue'
import JoinChannel from './cpns/JoinChannel.vue'

const insertFlag = reactive({
    createFlag: false,
    joinFlag: false
})
const createChannelClick = () => {
    insertFlag.createFlag = true
}
const createChannelChange = () => {
    insertFlag.createFlag = false
}
const joinChannelClick = () => {
    insertFlag.joinFlag = true
}
const joinChannelChange = () => {
    insertFlag.joinFlag = false
}
</script>

<template>
    <div class="insert-channel-dialog">
        <div class="insert-channel-card">
            <div class="channel-card-ttile" v-show="!insertFlag.createFlag && !insertFlag.joinFlag">创建还是加入一个服务器呢 ?</div>
            <div class="join-channel-layout" v-show="!insertFlag.createFlag && !insertFlag.joinFlag">
                <div class="join-channel-card" @click="createChannelClick()">
                    <div class="channel-card-img" style="background-image: url('/src/assets/img/Layout/creater.png');"></div>
                    <div class="channel-card-title">创建</div>
                </div>
                <div class="join-channel-card" @click="joinChannelClick()">
                    <div class="channel-card-img" style="background-image: url('/src/assets/img/Layout/join.png');"></div>
                    <div class="channel-card-title">加入</div>
                </div>
            </div>
            <CreateChannel v-show="insertFlag.createFlag" :method="createChannelChange"></CreateChannel>
            <JoinChannel v-show="insertFlag.joinFlag" :method="joinChannelChange"></JoinChannel>
        </div>
    </div>
</template>

<style lang="less" scoped>
.insert-channel-dialog{
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 99;
    overflow: hidden;
    .insert-channel-card{
        height: auto;
        width: 400px;
        padding: 24px;
        background-color: white;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        .channel-card-ttile{
            margin-bottom: 16px;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
        }
        .join-channel-layout{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .join-channel-card{
                width: 45%;
                height: 100px;
                border: 1px solid rgba(0, 0, 0, 0.08);
                border-radius: 16px;
                padding-left: 16px;
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: center;
                .channel-card-img{
                    height: 64px;
                    width: 64px;
                    background-color: var(--ButtonBackgroundColor);
                    border-radius: 16px;
                    background-size: 24px;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .channel-card-title{
                    padding-left: 24px;
                    font-size: 24px;
                    font-weight: 600;
                }
            }
            .join-channel-card:hover{
                cursor: pointer;
                background-color: var(--card-hover);
            }
        }

    }
}
</style>

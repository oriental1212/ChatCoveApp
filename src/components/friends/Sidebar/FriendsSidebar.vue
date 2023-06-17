<script setup>
import { ref } from 'vue'

const buttonFlag = ref(true)
const buttonActive = ref(false)
const buttonActiveOver = () => {
    buttonActive.value = !buttonActive.value
}
const buttonChangeOver = () => {
    buttonFlag.value = !buttonFlag.value
}
</script>

<template>
    <div class="friends-sidebar">
        <div class="nav-title">username</div>
        <div class="nav-list">
            <!-- 头 -->
            <div class="nav-list-title">消息</div>
            <!-- 内容 -->
            <div class="nav-list-content">
                <div class="nav-list-item" @mouseover="buttonActiveOver()" @mouseout="buttonActiveOver()">
                    <!-- 头像 -->
                    <div class="item-avatar">
                        <div class="avatar-img"></div>
                        <div class="online-tag"></div>
                    </div>
                    <!-- 名称 -->
                    <div class="item-info">12345频道</div>
                    <!-- 按钮 -->
                    <div class="item-buttom" v-show="buttonActive" @mouseover="buttonChangeOver()" @mouseout="buttonChangeOver()">
                        <img v-show="buttonFlag" src="@/assets/img/friends/noWhite.svg" alt="">
                        <img v-show="!buttonFlag" src="@/assets/img/friends/noRed.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-bottom">
            <div class="audio-box">语音设置</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@width: 230px;
.friends-sidebar{
    height: calc(100vh - 30px);
    width: @width;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid var(--color-line);
    color: var(--text-color);
    .nav-title{
        height: 22px;
        margin: 24px 24px 16px;
    }
    .nav-list{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
        .nav-list-title{
            height: 18px;
            padding: 6px 24px;
            font-size: 12px;
            color: var(--text-color);
        }
        .nav-list-content{
            overflow-y: scroll;
            padding: 2px 24px 16px;
            height: calc(100vh - 210px);
            .nav-list-item{
                padding: 4px 8px;
                height: 40px;
                display: flex;
                align-items: center;
                position: relative;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                .item-avatar{
                    height: 32px;
                    width: 32px;
                    margin-right: 8px;
                    position: relative;
                    .avatar-img{
                        width: 32px;
                        height: 32px;
                        border-radius: 10px;
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-image: url(@/assets/img/Layout/my_avatar.jpg);
                    }
                    .online-tag{
                        position: absolute;
                        height: 8px;
                        width: 8px;
                        background-color: var(--ThemeColor);
                        bottom: -4px;
                        right: -4px;
                        border: 2px solid var(--online-color);
                        border-radius: 50%;
                    }
                }
                .item-info{
                    height: 20px;
                    font-size: 14px;
                    line-height: 20px;
                }
                .item-buttom{
                    position: absolute;
                    background-color: var(--ButtonBackgroundColor);
                    border-radius: 50%;
                    height: 16px;
                    width: 16px;
                    right: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        height: 8px;
                        width: 8px;
                    }
                }
            }
            .nav-list-item:hover{
                transform: scale(1.15);
                cursor: pointer;
            }
        }
        .nav-list-content::-webkit-scrollbar {
            display: none;
        }
    }
    .nav-bottom{
        position: relative;
        margin-bottom: 0;
        height: 66px;
        .audio-box{
            height: 54px;
            margin: 0 8px 12px;
            border: 1px solid var(--color-line);
            border-radius: 20px;
        }
    }
}
</style>

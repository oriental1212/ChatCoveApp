<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { emojiList } from '../../friends/cpns/emoji-list.js'

const messageText = ref('')
const emojiItemList = reactive(emojiList)
const emojiListShow = ref(false)

const handleClickOutside = (event) => {
    if (event.target.closest('.send-left')) { return true }
    if (!event.target.closest('.emoji-item')) {
        emojiListShow.value = false
    }
}
onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
})

const insertEmojiClick = (item) => {
    messageText.value += item
}

const showEmojiListClick = () => {
    emojiListShow.value = true
}
</script>

<template>
    <div class="group-chat">
        <div class="group-container-left">
            <div class="children-channel-top">
                <div class="main-title">Oriental</div>
                <div class="children-description">很不错的频道</div>
            </div>
            <div class="children-channel-content"></div>
            <div class="input-message">
                <div class="send-container">
                    <div class="send-left" @click="showEmojiListClick">
                        <div class="emoji-list" v-show="emojiListShow">
                            <div class="emoji-item" v-for="emojiItem in emojiItemList" :key="emojiItem" @click="insertEmojiClick(emojiItem)">{{ emojiItem }}</div>
                        </div>
                    </div>
                    <div class="send-center">
                        <input v-model="messageText" class="message-input" type="text" placeholder="基本的 Input" />
                    </div>
                    <div class="send-right"></div>
                </div>
            </div>
        </div>
        <div class="group-container-right">
            <div class="group-container-right-topbar">
                <div class="topbar-icon" style="background-image: url('/src/assets/img/channel/messageTop.png');"></div>
                <div class="topbar-icon" style="background-image: url('/src/assets/img/channel/personnel.png');"></div>
                <div class="topbar-icon" style="background-image: url('/src/assets/img/channel/textSearch.png');"></div>
            </div>
            <div class="group-container-right-context"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.group-chat{
    height: calc(100vh - 30px);
    width: calc(100wh - 375px);
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    overflow-x: hidden;
    .group-container-left{
        flex: 1;
        min-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .children-channel-top{
            box-sizing: border-box;
            height: 70px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            padding: 0 24px;
            .main-title{
                color: var(--text-color);
                font-size: 16px;
                line-height: 22px;
                font-weight: 700;
                margin-right: 16px;
            }
            .children-description{
                font-size: 14px;
                line-height: 22px;
                color: var(--text-tip-color);
            }
        }
        .children-channel-content{
            flex: 1;
        }
        .input-message{
            box-sizing: border-box;
            height: 80px;
            width: 100%;
            padding: 12px 24px;
            .send-container{
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                padding: 12px 20px;
                border-radius: 16px;
                background-color: var(--ButtonBackgroundColor);
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
                .send-left{
                    width: 28px;
                    height: 28px;
                    padding-right: 8px;
                    background-image: url('/src/assets/img/friends/emoji.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 24px;
                    position: relative;
                    .emoji-list{
                        position: absolute;
                        width: 400px;
                        height: 300px;
                        background-color: var(--CardBackgroundColor);
                        border-radius: 16px;
                        bottom: 56px;
                        left: -20px;
                        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.32);
                        padding: 10px 18px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        align-content: flex-start;
                        overflow-y: scroll;
                        .emoji-item{
                            padding: 5px 6px;
                            width: 28px;
                            height: 28px;
                            font-size: 24px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            transition: transform 0.3s ease;
                        }
                        .emoji-item:hover{
                            transform: scale(1.2);
                            cursor: pointer;
                        }
                    }
                    .emoji-list::-webkit-scrollbar {
                        display: none;
                    }
                }
                .send-left:hover{
                    cursor: pointer;
                }
                .send-center{
                    flex: 1;
                    height: 100%;
                    .message-input{
                        background-color: var(--ButtonBackgroundColor);
                        width: 100%;
                        border: 0;
                        padding: 0;
                        color: var(--text-color);
                        outline: none;
                        height: 100%;
                        font-size: 16px;
                        padding-left: 10px;
                    }
                }
                .send-right{
                    width: 28px;
                    height: 28px;
                    padding-left: 8px;
                    background-image: url('/src/assets/img/friends/mics.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 28px;
                }
            }
        }
    }
    .group-container-right{
        width: 240px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-left: 1px solid var(--color-line);
        .group-container-right-topbar{
            height: 50px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .topbar-icon{
                width: 28px;
                height: 28px;
                margin: 0 18px;
                background-size: cover;
                background-repeat: no-repeat;
            }
        }
        .group-container-right-context{
            flex: 1;
        }
    }
}
</style>

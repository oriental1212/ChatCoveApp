<script setup>
import { onBeforeUpdate, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const title = ref('所有好友')
const requestFriendsFlag = ref(false)
// 四个页面跳转
onBeforeUpdate(() => {
    switch (route.query.itemTitle) {
    case 'allFriends': title.value = '所有好友'; break
    case 'onlineFriends': title.value = '在线好友'; break
    case 'blacklistFriends': title.value = '黑名单'; break
    }
    if (route.query.itemTitle === 'requestFriends') {
        router.push({ path: '/app/friends/friendsContext', query: { itemTitle: 'allFriends' } })
        requestFriendsFlag.value = true
    }
})
onMounted(() => {
    if (route.query.itemTitle === 'requestFriends') {
        requestFriendsFlag.value = true
    }
})
const maskClick = () => {
    requestFriendsFlag.value = false
    title.value = '所有好友'
}

</script>

<template>
    <div class="friends-context">
        <div class="friends-context-header">
            <div class="header-left">
                <img src="@/assets/img/Layout/allFriend.png" alt="">
                <div class="title">{{ title }} - 12</div>
            </div>
        </div>
        <div class="friends-content-middle">
            <div class="friends-card">
                <div class="friends-user-avatar"></div>
                <div class="friends-user-info">Oriental</div>
                <div class="friends-user-options">
                    <div class="icon-boutton">
                        <div class="hover">
                            <img src="@/assets/img/friends/phone.png" alt="">
                        </div>
                        <div class="hover">
                            <img src="@/assets/img/friends/message.png" alt="">
                        </div>
                        <div class="hover">
                            <img src="@/assets/img/friends/deleteFriends.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 添加好友 -->
        <n-modal v-model:show="requestFriendsFlag">
            <n-card
            class="requestFriends"
            style="width: 600px; background-color: var(--CardBackgroundColor);"
            :bordered="false"
            :on-mask-click="maskClick()"
            >
                <div class="friends-request-none" style="color: var(--text-tip-color); font-size: 16px; text-align: center;">
                    空
                </div>
                <div class="friends-request-list" style="display: flex; flex-wrap: wrap; flex-direction: row;">
                    <div class="request-card" style="background-color: var(--ButtonBackgroundColor); width: 100%; padding: 8px 16px 8px 8px; height: min-content; border-radius: 8px; display: flex; flex-direction: row; align-items: center; margin-bottom: 16px;">
                        <img src="src/assets/img/Layout/my_avatar.jpg" style="width: 48px; height: 48px; border-radius: 8px" alt="">
                        <div class="request-name" style="flex: 1; margin-left: 16px; color: var(--text-color); font-size: 14px; font-weight: 400;">dongfang</div>
                        <div class="button-list" style="width: 150px; display: flex; align-items: center; justify-content: space-around;">
                            <n-button round type="success">接受</n-button>
                            <n-button round type="error">拒绝</n-button>
                        </div>
                    </div>
                </div>
            </n-card>
        </n-modal>
    </div>
</template>

<style lang="less" scoped>
.friends-context{
    height: calc(100vh - 30px);
    width: 100%;
    .friends-context-header{
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        flex-direction: row;
        .header-left{
            height: 24px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            img{
                width: 16px;
                height: 16px;
            }
            .title{
                padding-left: 16px;
                font-weight: 700;
                color: var(--text-color);
                flex-shrink: 0;

            }
        }
    }
    .friends-content-middle{
        padding: 20px 0 20px 20px;
        height: calc(100% - 110px);
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        overflow-y: scroll;
        overflow-x: hidden;
        .friends-card{
            background-color: var(--ButtonBackgroundColor);
            height: 48px;
            min-width: 200px;
            max-width: 300px;
            flex-basis: calc(50% - 52px);
            padding: 16px 16px 60px;
            margin-right: 20px;
            margin-bottom: 20px;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            cursor: pointer;
            .friends-user-avatar{
                width: 48px;
                height: 48px;
                border-radius: 10px;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url(@/assets/img/Layout/my_avatar.jpg);
                margin-right: 16px;
            }
            .friends-user-info{
                flex-grow: 1;
                flex-shrink: 1;
                color: var(--text-color);
                font-size: 20px;
                line-height: 20px;
            }
            .friends-user-options{
                position: absolute;
                bottom: 16px;
                right: 8px;
                display: flex;
                align-items: center;
                .icon-boutton{
                    background-repeat: no-repeat;
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .hover{
                        height: 36px;
                        width: 36px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 8px;
                        img{
                            width: 24px;
                            height: 24px;
                    }
                    }
                    .hover:hover{
                        background-color: var(--ButtonHover);
                        border-radius: 8px;
                    }
                }
            }
        }
    }
    .requestFriends{
        .friends-request-none{
            color: var(--text-color);
            font-size: 16px;
        }
        .friends-request-list{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            .request-card{
                background-color: var(--ButtonBackgroundColor);
                padding: 8px 16px;
                height: min-content;
                border-radius: 16px;
                display: flex;
                flex-direction: row;
                img{
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
            }
        }

    }
    .friends-content-middle::-webkit-scrollbar{
        display: none;
    }
}
</style>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useSystemStore } from '@/stores/modules/system/index.js'
import { storeToRefs } from 'pinia'
import InsertChannelDialog from '@/components/dialog/InsertChannelDialog.vue'

const systemStore = useSystemStore()
const { insertChannelFlag } = storeToRefs(systemStore)
const insertChannelClick = () => {
    systemStore.insertChannelFlagChange()
}
const router = useRouter()
const props = defineProps({
    changeFlag: {
        type: Boolean,
        dafault: () => ({})
    }
})

// 好友页面列表
const friendsPageUrl = '/app/friends/friendsContext'
const friendsList = reactive([
    {
        title: '全部好友',
        fontImg: '/src/assets/img/Layout/allFriend.png',
        itemTtile: 'allFriends'
    },
    {
        title: '在线好友',
        fontImg: '/src/assets/img/Layout/onlineFriend.png',
        itemTtile: 'onlineFriends'
    },
    {
        title: '好友请求',
        fontImg: '/src/assets/img/Layout/addFriend.png',
        itemTtile: 'requestFriends'
    },
    {
        title: '黑名单',
        fontImg: '/src/assets/img/Layout/blackFriend.png',
        itemTtile: 'blacklistFriends'
    }
])
// 跳转好友界面
const joinFriendsPageClick = (friend) => {
    router.push({ path: friendsPageUrl, query: { itemTitle: friend.itemTtile } })
}
// 频道加入和创建
const insertChannelClose = () => {
    const tp = document.querySelector('.insert-channel-card')
    if (tp) {
        if (!tp.contains(event.target)) {
            systemStore.insertChannelFlagChange()
        }
    }
}
// 进入频道
const joinChannelPageClick = () => {
    router.push({ path: '/app/channel/groupChat' })
}

// 热门服务器
const hotChannelClick = () => {
    router.push({ path: '/app/hotChannel' })
}
</script>

<template>
    <div class="list-content">
    <!-- 好友操作展示  -->
        <div class="parent-button" v-for="friend in friendsList" :key="friend" v-show="props.changeFlag">
            <div class="insert-button" @click="joinFriendsPageClick(friend)">
                <img :src=friend.fontImg alt="">
            </div>
        </div>
    <!-- 服务器列表 -->
        <!-- 热门服务器 -->
        <div class="parent-button" v-show="!props.changeFlag">
            <div class="insert-button" @click="hotChannelClick()">
                <img src="@/assets/img/Layout/hot.png" alt="">
            </div>
        </div>
        <!-- 添加服务器 -->
        <div class="parent-button" v-show="!props.changeFlag">
            <div class="insert-button" @click="insertChannelClick()">
                <img src="@/assets/img/Layout/insert.png" alt="">
            </div>
        </div>
        <div v-show="insertChannelFlag" @click="insertChannelClose()">
            <InsertChannelDialog></InsertChannelDialog>
        </div>

        <!-- 动态列表展示 -->
        <div class="dynamic-list" v-show="!props.changeFlag">
            <div class="card-button" @click="joinChannelPageClick()">
                <img src="@/assets/img/Layout/my_avatar.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@sidrWidth: 100px;
.list-content{
    height: calc(100vh - 393px);
    width: @sidrWidth;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    .parent-button{
        width: @sidrWidth;
        height: var(--image64Size);
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .insert-button{
            background-color: var(--ButtonBackgroundColor);
            width: var(--image64Size);
            height: var(--image64Size);
            border: 0 solid;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            img{
                width: var(--image32Size);
                height: var(--image32Size);
            }
        }
        .insert-button:hover{
            transform: scale(1.15);
            cursor: pointer;
        }
    }
    .dynamic-list{
        width: @sidrWidth;
        height: var(--image64Size);
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .card-button{
            background-color: var(--ButtonBackgroundColor);
            width: var(--image64Size);
            height: var(--image64Size);
            border: 0 solid;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            img{
                border: 0 solid;
                border-radius: 20px;
                width: var(--image64Size);
                height: var(--image64Size);
            }
        }
        .card-button:hover{
            transform: scale(1.15);
            cursor: pointer;
        }
    }
}
.list-content::-webkit-scrollbar {
    display: none;
}
</style>

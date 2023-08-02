<script setup>
import { useUserInfoStore } from '@/stores/modules/user/user-info.js'
import { useChannelInfoStore } from '@/stores/modules/channel/channel-info.js'
import Request from '@/services/request/initialize.js'
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const userInfoStore = useUserInfoStore()
const channelId = ref()
const message = useMessage()
const channelInfoStore = useChannelInfoStore()
const router = useRouter()

const props = defineProps({
    method: {
        type: Function,
        required: true
    }
})
const backToParentClick = () => {
    props.method()
}

const joinChannelClick = () => {
    Request.post({
        url: '/channel/createUser?channelId=' + parseInt(channelId.value) + '&nickName=' + userInfoStore.userInfo.nickName
    }).then(res => {
        if (res.code === '200') {
            message.success('加入成功')
            channelInfoStore.createChannel({
                channelId: channelId.value,
                channelName: res.channelName,
                channelAvatar: res.avatarUrl
            })
            router.push({ path: '/app/channel/groupChat', params: { channelId: channelId.value } })
        } else {
            message.error(res.message)
        }
    })
}
</script>

<template>
    <div class="join-channel">
        <div class="join-channel-title">加入服务器</div>
        <div class="join-channel-tip">在下面输入服务器id加入服务器</div>
        <n-input v-model:value="channelId" round placeholder="输入服务器ID" class="join-channel-input"></n-input>
        <div class="join-channel-button-layout">
            <n-button round secondary style="margin-right: 16px;" @click="backToParentClick">返回</n-button>
            <n-button round secondary type="success" @click="joinChannelClick">加入</n-button>
        </div>
    </div>
</template>

<style lang="less" scoped>
.join-channel{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .join-channel-title{
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }
    .join-channel-tip{
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 16px;
    }
    .join-channel-input{
        margin-bottom: 16px;
    }
    .join-channel-button-layout{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }
}
</style>

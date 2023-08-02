<script setup>
import { ref } from 'vue'
import Request from '@/services/request/initialize.js'
import { useChannelInfoStore } from '@/stores/modules/channel/channel-info.js'
import { useMessage } from 'naive-ui'
import { useRouter } from 'vue-router'

const channelInfo = ref({
    channelName: null,
    avatar: null,
    description: null
})
const showFlag = ref(false)
const message = useMessage()
const channelInfoStore = useChannelInfoStore()
const router = useRouter()

const props = defineProps({
    method: {
        type: Function,
        required: true
    }
})

const beforeUpload = (file) => {
    channelInfo.value.avatar = file
}

// 创建服务器
const createChannelClick = () => {
    showFlag.value = true
    Request.post({
        url: '/channel/createMasterChannel',
        data: channelInfo
    }).then(res => {
        showFlag.value = false
        if (res.code === '200') {
            message.success('创建成功')
            channelInfoStore.createChannel({
                channelId: res.channelId,
                channelName: channelInfo.value.channelName,
                channelAvatar: res.avatarUrl
            })
            router.push({ path: '/app/channel/groupChat', params: { channelId: res.channelId } })
        } else {
            message.error(res.message)
        }
    })
}
// 返回函数
const backToParentClick = () => {
    props.method()
}
</script>

<template>
    <n-spin :show="showFlag">
        <div class="create-channel">
            <div class="create-channel-title">创建服务器</div>
            <div class="create-channel-tip">在下面上传你的服务器头像和填写你的服务器名称吧</div>
            <div class="create-channel-upload">
                <div class="upload-avatar-box">
                    <n-upload
                        action="#"
                        :default-upload="false"
                        list-type="image"
                        :max="1"
                        @before-upload="beforeUpload"
                    >
                        <n-button>选择文件</n-button>
                    </n-upload>
                </div>
                <div class="upload-tips">
                    <div class="upload-tips-items">服务器图片大小为 128×128</div>
                    <div class="upload-tips-items">上传建议：图片大小尽量不要超过5MB</div>
                </div>
            </div>
            <div class="create-channel-bottom">
                <div class="create-channel-name">服务器名称</div>
                <n-input v-model:value="channelInfo.channelName" round placeholder="给服务器起一个响亮的名字吧！" class="create-channel-input"></n-input>
                <div class="create-channel-button-layout">
                    <n-button round secondary style="margin-right: 16px;" @click="backToParentClick">返回</n-button>
                    <n-button round secondary type="success" @click="createChannelClick">创建</n-button>
                </div>
            </div>
        </div>
    </n-spin>
</template>

<style lang="less" scoped>
.create-channel{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .create-channel-title{
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    }
    .create-channel-tip{
        margin-bottom: 24px;
        font-size: 14px;
        line-height: 16px;
    }
    .create-channel-upload{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 80px;
        margin-bottom: 16px;
        .upload-avatar-box{
            flex: 1;
            margin-right: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .upload-tips{
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            color: var(--card-hover);
            font-size: 12px;
        }
    }
    .create-channel-bottom{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .create-channel-name{
            margin-bottom: 16px;
        }
        .create-channel-input{
            margin-bottom: 16px;
        }
        .create-channel-button-layout{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
        }
    }
}
</style>

<script setup>

const props = defineProps({
    method: {
        type: Function,
        required: true
    }
})

const backToParentClick = () => {
    props.method()
}
</script>

<template>
    <div class="create-channel">
        <div class="create-channel-title">创建服务器</div>
        <div class="create-channel-tip">在下面上传你的服务器头像和填写你的服务器名称吧</div>
        <div class="create-channel-upload">
            <div class="upload-avatar-box">
                <img src="/src/assets/img/Layout/avatarInsert.png" alt="">
            </div>
            <div class="upload-tips">
                <div class="upload-tips-items">服务器图片大小为 128×128</div>
                <div class="upload-tips-items">上传建议：图片大小尽量不要超过5MB</div>
            </div>
        </div>
        <div class="create-channel-bottom">
            <div class="create-channel-name">服务器名称</div>
            <n-input round placeholder="给服务器起一个响亮的名字吧！" class="create-channel-input"></n-input>
            <div class="create-channel-button-layout">
                <n-button round secondary style="margin-right: 16px;" @click="backToParentClick">返回</n-button>
                <n-button round secondary type="success">加入</n-button>
            </div>
        </div>
    </div>
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
            margin-right: 16px;
            height: 80px;
            width: 80px;
            border: 1px dashed var(--card-hover);
            border-width: 3px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 16px;
                height: 16px;
            }
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
            color: var(--card-hover);
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

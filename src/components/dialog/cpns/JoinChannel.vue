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
    <div class="join-channel">
        <div class="join-channel-title">加入服务器</div>
        <div class="join-channel-tip">在下面输入服务器的邀请码或者是服务器id加入服务器</div>
        <n-input round placeholder="输入服务器邀请链接或者ID" class="join-channel-input"></n-input>
        <div class="join-channel-button-layout">
            <n-button round secondary style="margin-right: 16px;" @click="backToParentClick">返回</n-button>
            <n-button round secondary type="success">加入</n-button>
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

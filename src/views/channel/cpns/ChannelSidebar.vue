<script setup>

</script>

<template>
    <div class="channel-sidebar">
        <div class="channel-page-left-top">
            <div class="left-top-title">
                <div class="title-context">服务器Name111111111111111111</div>
                <div class="icon-context"></div>
            </div>
            <div class="left-top-img"></div>
        </div>
        <div class="channel-left-container"></div>
        <div class="nav-bottom">
            <div class="audio-box">语音设置</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.channel-sidebar{
    height: calc(100vh - 30px);
    width: 230px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid var(--color-line);
    color: var(--text-color);
    position: relative;
    .channel-page-left-top{
        margin: 24px 24px 8px;
        .left-top-title{
            height: 24px;
            font-size: 16px;
            font-weight: 700;
            color: var(--text-color);
            border-radius: 8px;
            padding: 8px 8px 4px;
            margin-bottom: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .title-context{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-right: 16px;
            }
            .icon-context{
                background-image: url('/src/assets/img/channel/settingList.png');
                flex-shrink: 0;
                width: 16px;
                height: 16px;
                background-size: 16px;
                background-repeat: no-repeat;
            }
        }
        .left-top-title:hover{
            cursor: pointer;
            background-color: var(--ButtonBackgroundColor);
        }
        .left-top-img{
            width: 100%;
            height: 102px;
            background-image: url('/src/assets/img/channel/channelBackground.jpg');
            background-size: cover;
            border-radius: 8px;
        }
    }
    .channel-left-container{
        flex: 1;
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

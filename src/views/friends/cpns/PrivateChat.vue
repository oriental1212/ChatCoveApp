<script setup>

</script>

<template>
    <div class="private-chat">
        <div class="message-title">
            <div class="img"></div>
            <div class="username">Oriental</div>
        </div>
        <div class="main-container"></div>
        <div class="input-message">
            <div class="send-container">
                <div class="send-left"></div>
                <div class="send-center"></div>
                <div class="send-right"></div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.private-chat{
    width: 100%;
    height: calc(100vh - 30px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .message-title{
        box-sizing: border-box;
        height: 70px;
        width: 100%;
        padding: 0 24px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        .img{
            background-image: url('/src/assets/img/Layout/allFriend.png');
            background-repeat: no-repeat;
            background-size: 16px;
            width: 16px;
            height: 16px;
            margin-right: 16px;
        }
        .username{
            font-size: 16px;
            line-height: 22px;
            color: var(--text-color);
        }
    }
    .main-container{
        flex: 1
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
                padding-right: 4px;
                background-color: white;
            }
            .send-center{
                flex: 1;
                height: 100%;
            }
            .send-right{
                width: 28px;
                height: 28px;
                padding-left: 4px;
                background-color: white;
            }
        }
    }
}
</style>

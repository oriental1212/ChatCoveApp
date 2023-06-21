<script setup>
</script>

<template>
    <div class="group-chat">
        <div class="group-container-left"></div>
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
            border-bottom: 1px solid var(--color-line);
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

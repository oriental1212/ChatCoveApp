<script setup>

</script>

<template>
    <div class="setting-page-main">
        <div class="setting-page-main-content">
            <div class="title"></div>
            <div class="description"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@width: 660px;
.setting-page-main{
    height: calc(100vh - 30px);
    min-height: 40px;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .setting-page-main-content{
        min-width: @width;
        overflow-x: hidden;
        padding: 40px var(--image16Size) 60px 56px;
        overflow-y: scroll;
        .title{}
        .description{}
    }
    .setting-page-main-content::-webkit-scrollbar {
        display: none;
    }
}
</style>

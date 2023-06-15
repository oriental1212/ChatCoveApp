<script setup>

</script>

<template>
    <div class="friends-sidebar">
        <div class="nav-title">username</div>
        <div class="nav-list">
            <div class="nav-list-title">title</div>
            <div class="nav-list-content">list</div>
        </div>
        <div class="nav-bottom">bottom</div>
    </div>
</template>

<style lang="less" scoped>
@width: 230px;
.friends-sidebar{
    height: calc(100vh - 30px);
    width: @width;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid var(--color-line);
    color: var(--text-color);
    .nav-title{
        height: 22px;
        margin: 24px 24px 16px;
    }
    .nav-list{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .nav-list-title{
            height: 18px;
            padding: 6px 24px;
        }
        .nav-list-content{
            padding: 2px 24px 16px;
        }
    }
    .nav-bottom{}
}
</style>

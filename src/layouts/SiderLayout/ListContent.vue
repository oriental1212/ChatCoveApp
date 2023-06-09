<script setup>

</script>

<template>
    <div class="list-content">
        <!-- 添加服务器 -->
        <div class="parent-button">
            <div class="insert-button">
                <img src="@/assets/img/Layout/insert.png" alt="">
            </div>
        </div>
        <!-- 动态列表展示 -->
        <div class="dynamic-list">
            <div class="card-button">
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

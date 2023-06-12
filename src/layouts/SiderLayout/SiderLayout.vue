<script setup>
import { useRouter } from 'vue-router'
import ListContent from './ListContent.vue'

const router = useRouter()
const clickSettingButton = () => {
    router.push({ path: '/app/userSetting' })
}
</script>

<template>
    <div class="sider-layout">
        <!-- logo -->
        <div class="logo">
            <img src="@/assets/img/Layout/ChatCoveLogoDark.png" alt="">
        </div>
        <!-- 分割线 -->
        <div class="line"></div>

        <!-- 内容 -->
        <div class="context">
            <!-- 切换频道和私聊 -->
            <div class="parent-button">
                <div class="image-button">
                    <img src="@/assets/img/Layout/exchange.png" alt="">
                </div>
            </div>
            <!-- 搜索 -->
            <div class="parent-button" style="margin-bottom: 0;">
                <div class="image-button">
                    <img src="@/assets/img/Layout/find.png" alt="">
                </div>
            </div>
            <div class="line"></div>
            <ListContent></ListContent>
        </div>
        <!-- 分割线 -->
        <div class="line"></div>
        <!-- 个人设置 -->
        <div class="setting">
            <div class="image-card" @click="clickSettingButton">
                <img src="@/assets/img/Layout/my_avatar.jpg" alt="">
                <img src="@/assets/img/Layout/settings.png" class="setting-button" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
// 底部个人设置高
@personalSetting: 70px;
// 分割线高度
@lineHight: 1px;
// 侧边栏宽度
@sidrWidth: 100px;
.sider-layout{
    // 上右下左
    margin: 15px 5px 15px 15px;
    background-color: var(--CardBackgroundColor);
    height: calc(100vh - 30px);
    width: @sidrWidth;
    border: 0 solid;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    .logo{
        position: relative;
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: var(--image32Size);
            width: var(--image64Size);
        }
    }
    .context{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        .parent-button{
            width: 100%;
            height: var(--image64Size);
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .image-button{
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
            .image-button:hover{
                transform: scale(1.15);
                cursor: pointer;
            }
        }
    }
    .setting{
        height: @personalSetting;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        .image-card{
            width: var(--image64Size);
            height: var(--image64Size);
            img{
                border: 0 solid;
                border-radius: 20px;
                width: var(--image64Size);
                height: var(--image64Size);
            }
            .setting-button{
                width: var(--image16Size);
                height: var(--image16Size);
                position: absolute;
                bottom: 0;
                right: 10px;
            }
        }
    }
    .setting:hover{
        transform: scale(1.15);
        cursor: pointer;
    }

}
.line{
    height: @lineHight;
    width: 70px;
    background: var(--color-line);
    margin: 15px 15px 15px 15px;
}
.sider-layout::-webkit-scrollbar {
    display: none;
}

</style>

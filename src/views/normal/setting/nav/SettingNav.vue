<script setup>
import { reactive } from 'vue'
import { navRouter } from './navRouter.js'
import { useSettingStore } from '@/stores/modules/setting/index.js'

const settingStore = useSettingStore()
const navList = reactive(navRouter)

const clickItemActive = (item) => {
    navRouter.forEach(group => {
        group.children.forEach(items => {
            items.isActive = false
        })
    })
    item.isActive = true
    settingStore.settingTitleChange(item.title)
}
</script>

<template>
    <div class="setting-page-nav">
        <div class="setting-page-nav-content">
            <!-- 分组 -->
            <div class="setting-nav-group" v-for="group in navList" :key="group">
                <!-- 标题 -->
                <div class="nav-group-title">{{ group.title }}</div>
                <!-- item子元素 -->
                <div class="nav-group-item" :class="{active: item.isActive}" v-for="item in group.children" :key="item" @click="clickItemActive(item)">
                    <div class="nav-text">
                        {{ item.title }}
                    </div>
                </div>
            </div>
            <!-- 分割线 -->
            <div class="setting-nav-group-line"></div>
            <div class="setting-nav-group">
                <div class="nav-group-item">
                    <div class="nav-text" style="color: #D24D42;">
                        退出登录
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@min-width: 240px;
.setting-page-nav{
    height: calc(100vh - 30px);
    width: 35%;
    min-width: @min-width;
    min-height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .setting-page-nav-content{
        width: calc(@min-width - 32px);
        padding: 40px var(--image16Size);
        border-right: 1px solid;
        border-color: var(--color-line);
        overflow-y: scroll;
        .setting-nav-group{
            margin-bottom: var(--image16Size);
            padding-left: var(--image8Size);
            color: var(--text-color);
            .nav-group-title{
                padding: 0 var(--image16Size);
                font-size: 12px;
                color: var(--text-tip-color);
                line-height: var(--image32Size);
            }
            .nav-group-item{
                height: 24px;
                padding: var(--image8Size) var(--image16Size);
                display: flex;
                align-items: center;
                border-radius: 12px;
                margin-bottom: 2px;
                .nav-text{
                    user-select: none;
                    font-size: 16px;
                }
            }
            .nav-group-item:hover{
                background-color: var(--ButtonBackgroundColor);
                cursor: pointer;
            }
        }
    }
    .setting-page-nav-content::-webkit-scrollbar {
        display: none;
    }
    .setting-nav-group-line{
        height: 1px;
        width: 176px;
        background: var(--color-line);
        margin: 0 var(--image16Size) var(--image16Size) var(--image16Size);

    }
}
.active{
    background-color: var(--ButtonBackgroundColor);
    color: var(--ThemeColor);
}
</style>

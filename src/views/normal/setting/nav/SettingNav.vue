<script setup>
import { reactive } from 'vue'
import { navRouter, updateRecords } from './navRouter.js'

const navList = reactive(navRouter)
const updateList = reactive(updateRecords)
const clickItemActive = (item) => {
    navRouter.forEach(group => {
        group.children.forEach(items => {
            items.isActive = false
        })
    })
    updateList.isActive = false
    if (item.title === '更新记录') {
        updateList.isActive = true
    } else {
        item.isActive = true
    }
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
                <div class="nav-group-item" :class="{ active: updateList.isActive }" @click="clickItemActive(updateList)">
                    <div class="nav-text">
                        {{ updateList.title }}
                    </div>
                </div>
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
            .nav-group-title{
                padding: 0 var(--image16Size);
                font-size: 12px;
                color: rgba(230, 234, 240, 0.4);
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
                background-color: var(--CardBackgroundColor);
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
    background-color: var(--CardBackgroundColor);
    color: var(--ThemeColor);
}
</style>

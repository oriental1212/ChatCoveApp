<script setup>
import { reactive } from 'vue'

const headList = reactive([
    {
        title: '综合',
        isActive: true
    },
    {
        title: '用户',
        isActive: false
    },
    {
        title: '频道',
        isActive: false
    },
    {
        title: '服务器',
        isActive: false
    },
    {
        title: '服务器消息',
        isActive: false
    },
    {
        title: '好友消息',
        isActive: false
    }
])

const titleChangeClick = (item) => {
    headList.forEach(element => {
        element.isActive = false
    })
    item.isActive = true
}
</script>

<template>
    <div class="search-dialog">
        <div class="search-head">
            <div class="head-input">
                <img src="@/assets/img/Layout/find.png" alt="">
                <input class="input" placeholder="输入搜索内容"/>
            </div>
            <div class="head-nav">
                <div class="head-list">
                    <div class="head-item" :class="{active:item.isActive}" v-for="item in headList" :key="item" @click="titleChangeClick(item)">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <div class="search-body">
            <div class="search-deafault">
                <img src="@/assets/img/Layout/find.png" alt="">
                <div class="description">输入关键词开始搜索</div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.search-dialog{
    max-width: 800px;
    max-height: 550px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: var(--CardBackgroundColor);
    border-radius: 16px;
    .search-head{
        box-sizing: border-box;
        width: 100%;
        height: 110px;
        padding: 24px 24px 0;
        margin-bottom: 8px;
        .head-input{
            width: 100%;
            height: 48px;
            padding-left: 16px;
            padding-right: 32px;
            box-sizing: border-box;
            background-color: var(--ButtonBackgroundColor);
            border-radius: 16px;
            display: flex;
            justify-content: start;
            align-items: center;
            img{
                width: 18px;
                height: 18px;
            }
            .input{
                flex: 1;
                height: 100%;
                background-color: var(--ButtonBackgroundColor);
                border: 0;
                padding: 0;
                padding-left: 10px;
                font-size: 14px;
                color: var(--text-color);
                outline: none;
            }
        }
        .head-nav{
            width: 100%;
            height: 26px;
            margin-top: 11px;
            margin-bottom: 1px;
            border-bottom: 1px solid var(--ButtonBackgroundColor);
            display: flex;
            justify-content: center;
            align-items: center;
            .head-list{
                height: 100%;
                display: flex;
                justify-content: center;
                color: #94979C;
                .head-item{
                    padding-bottom: 6px;
                    font-size: 14px;
                    margin-right: 24px;
                    line-height: 20px;
                    cursor: pointer;
                }
            }
        }
    }
    .search-body{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 8px 16px;
        overflow-y: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .search-deafault{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 18px;
                height: 18px;
                margin-bottom: 8px;
            }
            .description{
                color: #94979C;
            }
        }

    }
}
.active{
    border-bottom: 2px solid var(--ThemeColor);
    font-weight: 600;
    color: white;
}
</style>

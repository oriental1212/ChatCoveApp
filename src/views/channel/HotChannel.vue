<script setup>
import { useHotChannelStore } from '@/stores/modules/channel/hot-channel'
import { onMounted, reactive } from 'vue'

const hotChannelStore = useHotChannelStore()
// const hotChannelList = toRefs(hotChannelStore.hotChannelList)

onMounted(() => {
    hotChannelStore.getHotChannelList()
})

const hotChannelList = reactive([
    {
        channelName: 'ok',
        channeldescription: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述vv',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述vv',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }, {
        channelName: 'ok',
        channeldescription: '这是描述',
        online: 123
    }
])
</script>

<template>
    <div class="hot-channel">
       <div class="hot-layout">
            <div class="search-box">
                <input class="input-box" placeholder="输入你感兴趣的社区" />
            </div>
            <div class="title">
                <h1>热门服务器</h1>
            </div>
            <div class="hot-list">
                <div class="hot-item"  v-for="hotChannelItem in hotChannelList" :key="hotChannelItem">
                    <div class="item-text">
                        <div class="item-name">{{ hotChannelItem.channelName }}</div>
                        <div class="item-description">{{ hotChannelItem.channeldescription }}</div>
                        <div class="item-online">
                            <n-badge dot type="success" style="margin-right: 5px;"></n-badge>
                            {{ hotChannelItem.online }}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
</template>

<style lang="less" scoped>
.hot-channel{
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    .hot-layout{
        margin: 100px 57px 30px 50px;
        padding: 0 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .search-box{
            width: 60%;
            height: 48px;
            padding-left: 16px;
            padding-right: 32px;
            margin-bottom: 48px;
            box-sizing: border-box;
            background-color: var(--ButtonBackgroundColor);
            border-radius: 16px;
            display: flex;
            justify-content: start;
            align-items: center;
            .input-box{
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
        .title{
            width: 100%;
            height: 48px;
            margin-bottom: 16px;
            font-size: 16px;
            color: var(--text-color);
        }
        .hot-list{
            display: flex;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
            .hot-item{
                position: relative;
                width: 384px;
                height: 216px;
                background-color: white;
                margin: 32px;
                border-radius: 24px;
                .item-text{
                    width: calc(235px);
                    height: calc(100% - 40px);
                    border-radius: 22px;
                    position: absolute;
                    left: 0;
                    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.32);
                    background-color: var(--ButtonBackgroundColor);
                    padding: 20px 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    color: var(--text-color);
                    .item-name{
                        font-size: 18px;
                        line-height: 26px;
                        font-weight: 600;
                        margin-bottom: 8px;
                    }
                    .item-description{
                        height: 119px;
                        font-size: 14px;
                        line-height: 20px;
                        font-weight: 400;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        color: var(--text-tip-color);
                    }
                    .item-online{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        font-size: 12px;
                        color: var(--text-tip-color);
                    }
                }
            }
        }
    }
}

.hot-channel::-webkit-scrollbar{
    display: none;
}
</style>

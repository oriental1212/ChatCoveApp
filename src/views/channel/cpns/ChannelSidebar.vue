<script setup>
import { reactive } from 'vue'

const ChannelInfoList = reactive([
    {
        groupId: 0,
        groupName: '默认分组',
        childrenChannelList: [
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 0,
                childrenChannelSecret: 0
            },
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 0,
                childrenChannelSecret: 0
            },
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 1,
                childrenChannelSecret: 123456
            }
        ]
    },
    {
        groupId: 1,
        groupName: '第一个分组',
        childrenChannelList: [
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 0,
                childrenChannelSecret: 0
            },
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 0,
                childrenChannelSecret: 0
            },
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 1,
                childrenChannelSecret: 123456
            }
        ]
    },
    {
        groupId: 2,
        groupName: '第二个分组',
        childrenChannelList: [
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 0,
                childrenChannelSecret: 123456
            },
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 0,
                childrenChannelSecret: 123456
            },
            {
                childrenChannelId: 123,
                childrenChannelName: '好频道',
                childrenChannelDescription: '这是一个好频道',
                childrenChannelType: 1,
                childrenChannelSecret: 123456
            }
        ]
    }
])
</script>

<template>
    <div class="channel-sidebar">
        <div class="channel-page-left-top">
            <div class="left-top-title">
                <div class="title-context">服务器Name</div>
                <div class="icon-context"></div>
            </div>
            <div class="left-top-img"></div>
        </div>
        <div class="channel-left-container">
            <template v-for="groupItem in ChannelInfoList" :key="groupItem">
                <div class="default-group" v-if="groupItem.groupId === 0">
                    <template v-for="channelItem in groupItem.childrenChannelList" :key="channelItem">
                        <div class="default-children-channel" v-if="channelItem.childrenChannelType === 0">
                            <div class="children-channel-title">
                                <img src="/src/assets/img/channel/textChannel.png" alt="">
                                {{ channelItem.childrenChannelName }}
                            </div>
                            <div class="children-channel-button">
                                <img src="/src/assets/img/channel/insertChannelPerson.png" alt="">
                                <img src="/src/assets/img/channel/channelSetting.png" alt="">
                            </div>
                        </div>
                        <div class="voice-children-channel" v-if="channelItem.childrenChannelType === 1">
                            <div class="children-channel-title">
                                <img src="/src/assets/img/channel/voiceChannel.png" alt="">
                                {{ channelItem.childrenChannelName }}
                            </div>
                            <div class="children-channel-button">
                                <img src="/src/assets/img/channel/insertChannelPerson.png" alt="">
                                <img src="/src/assets/img/channel/channelSetting.png" alt="">
                            </div>
                        </div>
                    </template>
                </div>
                <div class="custom-group" v-else>
                    <div class="group-top">
                        <div class="group-title">
                            <span style="flex: 1">{{ groupItem.groupName }}</span>
                            <img src="/src/assets/img/channel/inserChannel.png" alt="">
                        </div>
                    </div>
                    <template v-for="channelItem in groupItem.childrenChannelList" :key="channelItem">
                        <div class="default-children-channel" v-if="channelItem.childrenChannelType === 0">
                            <div class="children-channel-title">
                                <img src="/src/assets/img/channel/textChannel.png" alt="">
                                {{ channelItem.childrenChannelName }}
                            </div>
                            <div class="children-channel-button">
                                <img src="/src/assets/img/channel/insertChannelPerson.png" alt="">
                                <img src="/src/assets/img/channel/channelSetting.png" alt="">
                            </div>
                        </div>
                        <div class="voice-children-channel" v-if="channelItem.childrenChannelType === 1">
                            <div class="children-channel-title">
                                <img src="/src/assets/img/channel/voiceChannel.png" alt="">
                                {{ channelItem.childrenChannelName }}
                            </div>
                            <div class="children-channel-button">
                                <img src="/src/assets/img/channel/insertChannelPerson.png" alt="">
                                <img src="/src/assets/img/channel/channelSetting.png" alt="">
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </div>
        <div class="nav-bottom">
            <div class="audio-box">语音设置</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.channel-sidebar{
    height: calc(100vh - 30px);
    width: 230px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid var(--color-line);
    color: var(--text-color);
    position: relative;
    .channel-page-left-top{
        margin: 24px 24px 8px;
        .left-top-title{
            height: 24px;
            font-size: 16px;
            font-weight: 700;
            color: var(--text-color);
            border-radius: 8px;
            padding: 8px 8px 4px;
            margin-bottom: 8px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            .title-context{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                margin-right: 16px;
            }
            .icon-context{
                background-image: url('/src/assets/img/channel/settingList.png');
                flex-shrink: 0;
                width: 16px;
                height: 16px;
                background-size: 16px;
                background-repeat: no-repeat;
            }
        }
        .left-top-title:hover{
            cursor: pointer;
            background-color: var(--ButtonBackgroundColor);
        }
        .left-top-img{
            width: 100%;
            height: 102px;
            background-image: url('/src/assets/img/channel/channelBackground.jpg');
            background-size: cover;
            border-radius: 8px;
        }
    }
    .channel-left-container{
        flex: 1;
        box-sizing: border-box;
        padding: 0 16px 8px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        .default-group{
            width: 100%;
            display: flex;
            flex-direction: column;
            .default-children-channel{
                height: 40px;
                margin-left: 10px;
                margin-bottom: 4px;
                padding: 0 8px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .children-channel-title{
                    flex: 1;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    color: var(--text-color);
                    position: relative;
                    img{
                        width: 16px;
                        height: 16px;
                    }
                }
                .children-channel-button{
                    position: relative;
                    line-height: 16px;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-left: 8px;
                    }
                }
            }
            .default-children-channel:hover{
                background-color: var(--ButtonBackgroundColor);
            }
            .voice-children-channel{
                height: 40px;
                margin-left: 10px;
                margin-bottom: 4px;
                padding: 0 8px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .children-channel-title{
                    flex: 1;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    color: var(--text-color);
                    position: relative;
                    img{
                        width: 16px;
                        height: 16px;
                    }
                }
                .children-channel-button{
                    position: relative;
                    line-height: 16px;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-left: 8px;
                    }
                }
            }
            .voice-children-channel:hover{
                background-color: var(--ButtonBackgroundColor);
            }
        }
        .custom-group{
            width: 100%;
            display: flex;
            flex-direction: column;
            .group-title{
                padding: 6px 0;
                font-size: 12px;
                font-weight: 700;
                color: var(--text-color);
                line-height: 18px;
                display: flex;
                flex-direction: row;
                img{
                    width: 14px;
                    height: 14px;
                    margin-right: 14px;
                }
            }
            .default-children-channel{
                height: 40px;
                margin-left: 10px;
                margin-bottom: 4px;
                padding: 0 8px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .children-channel-title{
                    flex: 1;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    color: var(--text-color);
                    position: relative;
                    img{
                        width: 16px;
                        height: 16px;
                    }
                }
                .children-channel-button{
                    position: relative;
                    line-height: 16px;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-left: 8px;
                    }
                }
            }
            .default-children-channel:hover{
                background-color: var(--ButtonBackgroundColor);
            }
            .voice-children-channel{
                height: 40px;
                margin-left: 10px;
                margin-bottom: 4px;
                padding: 0 8px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                .children-channel-title{
                    flex: 1;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 700;
                    color: var(--text-color);
                    position: relative;
                    img{
                        width: 16px;
                        height: 16px;
                    }
                }
                .children-channel-button{
                    position: relative;
                    line-height: 16px;
                    img{
                        width: 16px;
                        height: 16px;
                        margin-left: 8px;
                    }
                }
            }
            .voice-children-channel:hover{
                background-color: var(--ButtonBackgroundColor);
            }
        }
    }
    .channel-left-container::-webkit-scrollbar {
        display: none;
    }
    .nav-bottom{
        position: relative;
        margin-bottom: 0;
        height: 66px;
        .audio-box{
            height: 54px;
            margin: 0 8px 12px;
            border: 1px solid var(--color-line);
            border-radius: 20px;
        }
    }
}
</style>

import { defineStore } from 'pinia'
import Request from '@/services/request/initialize.js'

export const useChannelInfoStore = defineStore('channelInfo', {
    state: () => ({
        // 服务器列表
        ChannelList: []
    }),
    actions: {
        // 获取服务器
        getHotChannelList () {
            return true
        },
        // 创建服务器
        createChannel (createChannlInfo) {
            this.ChannelList.push(createChannlInfo)
        },
        // 更新服务器, updateAvatarFlag为布尔函数
        updateChannel (updateChannelInfo, channelId, updateAvatarFlag) {
            Request.post({
                url: '/updateMasterChannel/' + channelId + '/' + updateAvatarFlag,
                data: updateChannelInfo
            })
        },
        deleteChannel (channelId) {
            Request.post({
                url: '/deleteChannel/' + channelId
            })
        },
        // 子频道
        createChildrenChannel (ChannelChildrenInfo) {
            Request.post({
                url: '/createChildrenChannel',
                data: ChannelChildrenInfo
            })
        },
        updateChildrenChannel (ChannelChildrenInfo, childrenChannelId) {
            Request.post({
                url: '/createChildrenChannel/' + childrenChannelId,
                data: ChannelChildrenInfo
            })
        },
        deleteChildrenChannel (channelId, childrenChannelId) {
            Request.post({
                url: '/deleteChannel/' + channelId + '/' + childrenChannelId
            })
        },
        // 角色
        createRole (roleInfo) {
            Request.post({
                url: 'createRole',
                data: roleInfo
            })
        },
        updateRole (roleInfo, roleId) {
            Request.post({
                url: '/updateRole/' + roleId,
                data: roleInfo
            })
        },
        deleteRole (channelId, roleId) {
            Request.post({
                url: '/deleteChannel/' + channelId + '/' + roleId
            })
        },
        // 表情
        uploadEmoji (emojiInfo) {
            Request.post({
                url: '/uploadEmoji',
                data: emojiInfo
            })
        },
        deleteEmoji (channelId, emojiId) {
            Request.post({
                url: '/deleteChannel/' + channelId + '/' + emojiId
            })
        },
        // 频道人员管理
        createUser (id, name) {
            Request.post({
                url: '/createUser',
                data: {
                    params: {
                        channelId: id,
                        nickName: name
                    }
                }
            })
        },
        changeUserName (id, name) {
            Request.post({
                url: '/changeUserName',
                data: {
                    params: {
                        channelId: id,
                        remarkNickName: name
                    }
                }
            })
        },
        deleteUser (cid, uid) {
            Request.post({
                url: '/deleteUser',
                data: {
                    params: {
                        channelId: cid,
                        userId: uid
                    }
                }
            })
        },
        exitChannel (cid) {
            Request.post({
                url: '/exitChannel',
                data: {
                    params: {
                        channelId: cid
                    }
                }
            })
        },
        // 日志
        getChannelLog (cid) {
            Request.post({
                url: '/getChannelLog',
                data: {
                    params: {
                        channelId: cid
                    }
                }
            })
        },
        // 分组
        createGroup (cid, gName) {
            Request.post({
                url: '/createGroup',
                data: {
                    params: {
                        channelId: cid,
                        groupName: gName
                    }
                }
            })
        },
        updateGroup (cid, gid, remarkGName) {
            Request.post({
                url: '/updateGroup',
                data: {
                    params: {
                        channelId: cid,
                        groupId: gid,
                        remarkGroupName: remarkGName
                    }
                }
            })
        },
        deleteGroup (cid, gid) {
            Request.post({
                url: '/deleteGroup',
                data: {
                    params: {
                        channelId: cid,
                        groupId: gid
                    }
                }
            })
        },
        // 更改频道设置
        changeChannelSetting (cid, t) {
            Request.post({
                url: '/changeChannelSetting',
                data: {
                    params: {
                        channelId: cid,
                        type: t
                    }
                }
            })
        },
        // 获取用户频道列表
        getChannelList () {
            Request.get({
                url: '/getChannelList'
            })
        },
        // 获取子频道列表
        getChildrenChannelList (cid) {
            Request.get({
                url: '/getChildrenChannelList',
                data: {
                    params: {
                        channelId: cid
                    }
                }
            })
        },
        // 获取子频道信息列表
        getChildrenChannelInfo (cid, ccid) {
            Request.get({
                url: '/getChildrenChannelInfo',
                data: {
                    params: {
                        channelId: cid,
                        childrenChannelId: ccid
                    }
                }
            })
        }
    }
})

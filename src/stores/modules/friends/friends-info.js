import { defineStore } from 'pinia'
import Request from '@/services/request/initialize.js'

export const useChannelInfoStore = defineStore('friendsInfo', {
    state: () => ({
        // 服务器列表
        FriendsList: []
    }),
    actions: {
        addFriends (fName) {
            Request.post({
                url: '/addFriends',
                data: {
                    params: {
                        friendsName: fName
                    }
                }
            })
        },
        confirmFriendsRequest (frId, sName) {
            Request.post({
                url: '/confirmFriendsRequest',
                data: {
                    params: {
                        friendRequestId: frId,
                        senderName: sName
                    }
                }()
            })
        },
        deleteFriends (fid) {
            Request.post({
                url: '/deleteFriends',
                data: {
                    params: {
                        friendsId: fid
                    }
                }
            })
        },
        blacklistFriends (fid) {
            Request.post({
                url: '/blacklistFriends',
                data: {
                    params: {
                        friendsId: fid
                    }
                }
            })
        },
        remarkFriends (fid, rName) {
            Request.post({
                url: '/remarkFriends',
                data: {
                    params: {
                        friendsId: fid,
                        remarkName: rName
                    }
                }
            })
        },
        showAllFriends () {
            Request.post({
                url: '/showAllFriends'
            })
        },
        getFriendsRequest () {
            Request.post({
                url: '/getFriendsRequest'
            })
        }
    }
})

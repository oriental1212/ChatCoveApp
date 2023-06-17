<script setup>

</script>

<template>
    <div class="all-friends">
        <div class="all-friends-header">
            <div class="header-left">
                <img src="@/assets/img/Layout/allFriend.png" alt="">
                <div class="title">所有好友 - 11</div>
            </div>
        </div>
        <div class="all-friends-content">
            <div class="friends-card">
                <div class="friends-user-avatar"></div>
                <div class="friends-user-info">Oriental</div>
                <div class="friends-user-options">
                    <div class="icon-boutton">
                        <div class="hover">
                            <img src="@/assets/img/friends/phone.png" alt="">
                        </div>
                        <div class="hover">
                            <img src="@/assets/img/friends/message.png" alt="">
                        </div>
                        <div class="hover">
                            <img src="@/assets/img/friends/deleteFriends.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.all-friends{
    height: calc(100vh - 30px);
    width: 100%;
    .all-friends-header{
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        padding: 0 24px;
        display: flex;
        align-items: center;
        flex-direction: row;
        .header-left{
            height: 24px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            img{
                width: 16px;
                height: 16px;
            }
            .title{
                padding-left: 16px;
                font-weight: 700;
                color: var(--text-color);
                flex-shrink: 0;

            }
        }
    }
    .all-friends-content{
        padding: 20px 0 20px 20px;
        height: calc(100% - 110px);
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        overflow-y: scroll;
        overflow-x: hidden;
        .friends-card{
            background-color: var(--ButtonBackgroundColor);
            height: 48px;
            min-width: 200px;
            max-width: 300px;
            flex-basis: calc(50% - 52px);
            padding: 16px 16px 60px;
            margin-right: 20px;
            margin-bottom: 20px;
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            position: relative;
            cursor: pointer;
            .friends-user-avatar{
                width: 48px;
                height: 48px;
                border-radius: 10px;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url(@/assets/img/Layout/my_avatar.jpg);
                margin-right: 16px;
            }
            .friends-user-info{
                flex-grow: 1;
                flex-shrink: 1;
                color: var(--text-color);
                font-size: 20px;
                line-height: 20px;
            }
            .friends-user-options{
                position: absolute;
                bottom: 16px;
                right: 8px;
                display: flex;
                align-items: center;
                .icon-boutton{
                    background-repeat: no-repeat;
                    background-size: cover;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .hover{
                        height: 36px;
                        width: 36px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 8px;
                        img{
                            width: 24px;
                            height: 24px;
                    }
                    }
                    .hover:hover{
                        background-color: var(--ButtonHover);
                        border-radius: 8px;
                    }
                }
            }
        }
    }
    .all-friends-content::-webkit-scrollbar{
        display: none;
    }
}
</style>

<script setup>
import { ref } from 'vue'

// import { useSettingStore } from '@/stores/modules/setting/index.js'

// const settingStore = useSettingStore()

const userInfo = ref({
    nickName: 'dongfang',
    summery: '我真帅',
    gender: '男',
    birthday: '123131',
    location: '123131'
})

</script>

<template>
    <div class="account-setting">
        <div class="setting-page-card">
            <div class="setting-page-card-header" @click="ok">个人信息</div>
            <div class="setting-page-card-info">
                <div class="change-info">
                    <div class="editor-item">
                        <div class="title">昵称</div>
                        <div class="content">
                            <span style="margin-bottom: 5px;">{{ userInfo.nickName }}</span>
                            <n-button type="primary">更改昵称</n-button>
                        </div>
                    </div>
                    <div class="editor-item">
                        <div class="title">头像</div>
                        <div class="content">
                            <n-button type="primary">更改头像</n-button>
                        </div>
                    </div>
                    <div class="editor-item">
                        <div class="title">个人简介</div>
                        <div class="content">
                            <span style="font-size: 12px; font-weight: 400; line-height: 18px; color: var(--text-tip-color); margin-bottom: 5px;">
                                向大伙介绍介绍你自己
                            </span>
                            <n-button type="primary">编辑简介</n-button>
                        </div>
                    </div>
                    <div class="editor-item">
                        <div class="title">性别</div>
                        <div class="content">
                            <span style="margin-bottom: 5px;">{{ userInfo.gender }}</span>
                            <n-radio-group v-model:value=userInfo.gender>
                                <n-space>
                                    <n-radio value="男"><span style="color: var(--text-color);">男</span></n-radio>
                                    <n-radio value="女"><span style="color: var(--text-color);">女</span></n-radio>
                                </n-space>
                            </n-radio-group>
                        </div>
                    </div>
                    <div class="editor-item">
                        <div class="title">生日</div>
                        <div class="content">
                            <span style="margin-bottom: 5px;">{{ userInfo.birthday }}</span>
                            <n-button type="primary">生日修改</n-button>
                        </div>
                    </div>
                    <div class="editor-item">
                        <div class="title">地址</div>
                        <div class="content">
                            <span style="margin-bottom: 5px;">{{ userInfo.location }}</span>
                            <n-button type="primary">地址修改</n-button>
                        </div>
                    </div>
                </div>
                <div class="show-info">
                    <div class="user-banner"></div>
                    <div class="user-card-content">
                        <div class="content-user">
                            <div class="avatar-card"></div>
                        </div>
                        <div class="content-nickname">{{ userInfo.nickName }}</div>
                        <div class="content-summery">
                            <div class="summery-title">个人简介</div>
                            <span style="font-size: 14px; line-height: 20px;">{{ userInfo.summery }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="setting-page-card-header" @click="ok">账号绑定</div>
            <div class="setting-page-card-info">
                <div class="account-bingdinig">
                    <img src="@/assets/img/auth/mail.png" alt="">
                    <span class="bingding-description">邮箱账号</span>
                </div>
                <div class="account-bingdinig">
                    <img src="@/assets/img/auth/qq.png" alt="">
                    <span class="bingding-description">QQ账号</span>
                </div>
            </div>
            <div class="setting-page-card-header" @click="ok">注销</div>
            <div class="setting-page-card-info">
                <div class="account-bingdinig">
                    <span class="bingding-description">注销账号</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.account-setting{
    width: 100%;
    height: 100%;
    .setting-page-card{
        margin-bottom: 40px;
        box-sizing: border-box;
        .setting-page-card-header{
            font-size: 16px;
            line-height: 22px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--text-color);
        }
        .setting-page-card-info{
            width: 612px;
            padding: 24px;
            background-color: var(--ButtonBackgroundColor);
            border-radius: 20px;
            display: flex;
            flex-direction: row;
            margin-bottom: 32px;
            flex-wrap: wrap;
            .change-info{
                flex: 1;
                .editor-item{
                    margin-bottom: 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    .title{
                        font-size: 12px;
                        font-weight: 600;
                        line-height: 18px;
                        color: var(--text-color);
                    }
                    .content{
                        margin-top: 8px;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        color: var(--text-color);
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            }
            .show-info{
                flex: 1;
                height: 400px;
                width: 100%;
                position: relative;
                .user-banner{
                    height: 68px;
                    background-size: cover;
                    background-image: url('../../../../../assets/img/setting/123456.jpg');
                    box-shadow: rgba(0,0,0,0.32);
                    border-radius: 16px 16px 0 0;
                }
                .user-card-content{
                    background-color: var(--CardBackgroundColor);
                    position: absolute;
                    top: 52px;
                    height: 300px;
                    width: 100%;
                    border-radius: 16px;
                    box-shadow: rgba(0,0,0,0.32);
                    .content-user{
                        height: 64px;
                        position: relative;
                        .avatar-card{
                            width: 64px;
                            height: 64px;
                            background-image: url('../../../../../assets/img/Layout/my_avatar.jpg');
                            background-size: cover;
                            border-radius: 50%;
                            position: absolute;
                            left: 30px;
                            bottom: 20px;
                        }
                    }
                    .content-nickname{
                        width: 100%;
                        font-size: 20px;
                        font-weight: 600;
                        line-height: 26px;
                        color: var(--text-color);
                        box-sizing: border-box;
                        padding: 0 30px;
                        margin-bottom: 16px;
                    }
                    .content-summery{
                        width: 100%;
                        color: var(--text-color);
                        box-sizing: border-box;
                        padding: 0 30px;
                        .summery-title{
                            font-size: 12px;
                            font-weight: 600;
                            line-height: 26px;
                            margin-bottom: 8px;
                        }
                    }
                }
            }
            .account-bingdinig{
                box-sizing: border-box;
                flex-basis: 100%;
                height: 40px;
                border-radius: 8px;
                display: flex;
                flex-direction: row;
                align-items: center;
                img{
                    margin-left: 8px;
                    width: 24px;
                    height: 24px;
                }
                .bingding-description{
                    margin-left: 8px;
                    color: var(--text-color);
                }
            }
            .account-bingdinig:hover{
                background-color: hsla(0,0%,100%,0.06);
                cursor: pointer;
            }
        }
    }
}
</style>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref(null)
// 校验验证码后的判断
const checkFlag = ref(true)
// 邮箱或者手机号找回
const accountFlag = ref(false)
const userRef = reactive({
    account: {
        email: null,
        phone: null
    },
    captcha: null,
    password: null,
    reenteredPassword: null
})

const rules = {
    account: [
        {
            trigger: ['input']
        }
    ],
    password: [
        {
            require: true,
            message: '请输入密码',
            trigger: ['input']
        }
    ],
    reenteredPassword: [
        {
            require: true,
            message: '请重复输入密码',
            trigger: ['input']
        }
    ]
}
// 提交校验码
const resetPsswordClick = () => {
    checkFlag.value = false
}
// 返回click
const backToRestClick = () => {
    checkFlag.value = true
}

</script>

<template>
    <div class="forget-authen">
        <n-h1 class="title">找回密码</n-h1>
        <n-form
            class="form"
            :model="userRef"
            :rules="rules"
            ref="formRef"
        >
            <n-form-item label="邮箱" path="email" v-if="checkFlag && !accountFlag">
                <n-input v-model:value="userRef.account.email" round placeholder="请输入邮箱"/>
            </n-form-item>
            <n-form-item label="验证码" path="captcha" v-if="checkFlag">
                <n-input-group>
                    <n-input v-model:value="userRef.captcha" round maxlength=6 placeholder="请输入验证码">
                    </n-input>
                    <n-button type="primary" round>发送验证码</n-button>
                </n-input-group>
            </n-form-item>
            <n-form-item label="密码" path="password" v-if="!checkFlag">
                <n-input v-model:value="userRef.password" round placeholder="请输入密码"/>
            </n-form-item>
            <n-form-item label="重复密码" path="reenteredPassword" v-if="!checkFlag">
                <n-input v-model:value="userRef.reenteredPassword" round placeholder="请重复输入密码"/>
            </n-form-item>
            <div style="display: flex; justify-content: center" v-if="checkFlag">
                <n-button
                    :disabled="userRef.captcha === null || userRef.captcha === ''" round type="primary" @click="resetPsswordClick" size="large" style="margin-top: 16px; width: 100%;">
                    重置密码
                </n-button>
            </div>
            <div style="display: flex; justify-content: center" v-if="!checkFlag">
                <n-button
                    :disabled="userRef.account.phone === null || userRef.account.phone === ''" round type="primary" @click="confirmClick" size="large" style="margin-top: 16px; width: 100%;">
                    提交重置密码
                </n-button>
            </div>
            <div style="display: flex; justify-content: center" v-if="!checkFlag">
                <n-button class="back-to-rest" text @click="backToRestClick">返回登录</n-button>
            </div>
        </n-form>
    </div>
</template>

<style lang="less" scoped>
.forget-authen{
    height: 500px;
    width: 400px;
    border-radius: 20px;
    line-height: 1;
    padding: 32px 32px 16px 32px;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .form{
        width: 100%;
        .back-to-rest{
            margin-top: 16px;
            color: #AAABAF;
        }
    }
    .title{
        color: #222222;
        font-weight: bold;
        margin-bottom: 32px;
    }
}
</style>

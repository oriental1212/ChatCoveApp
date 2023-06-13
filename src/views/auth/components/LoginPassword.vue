<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const roter = useRouter()
const formRef = ref(null)
const userRef = ref({
    account: null,
    password: null,
    reenteredPassword: null,
    check: false
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

const formClick = () => { }

const forgetPasswordClick = () => {
    roter.push({ path: '/login/forgetAuth' })
}
</script>

<template>
    <div class="login-password-box">
        <n-h1 class="title">密码登录</n-h1>
        <n-form
            class="form"
            :model="userRef"
            :rules="rules"
            ref="formRef"
        >
            <n-form-item label="账户" path="account">
                <n-input v-model:value="userRef.account" round placeholder="请输入手机号/账号"/>
            </n-form-item>
            <n-form-item label="密码" path="password">
                <n-input v-model:value="userRef.password" round placeholder="请输入密码"/>
            </n-form-item>
            <n-form-item label="重复密码" path="reenteredPassword">
                <n-input v-model:value="userRef.reenteredPassword" round placeholder="请重复输入密码"/>
            </n-form-item>
            <div style="display: flex; justify-content: space-between;">
                <n-checkbox v-model:checked="userRef.check" style="margin-left: 8px;">下次自动登录</n-checkbox>
                <n-button style="margin-right: 8px;" @click="forgetPasswordClick" text type="primary">忘记密码</n-button>
            </div>
            <div style="display: flex; justify-content: center">
                <n-button
                    :disabled="userRef.account === null || userRef.account === '' || userRef.password === null || userRef.password === ''" round type="primary" @click="formClick" size="large" style="margin-top: 16px; width: 100%;">
                    注册/登录
                </n-button>
            </div>
        </n-form>
    </div>
</template>

<style lang="less" scoped>
.login-password-box{
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
    }
    .title{
        color: #222222;
        font-weight: bold;
        margin-bottom: 16px;
    }
}
</style>

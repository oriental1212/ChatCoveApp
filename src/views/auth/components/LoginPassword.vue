<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { rulePassword } from '@/utils/auth/rule.js'
import Request from '@/services/request/initialize.js'
import { useMessage } from 'naive-ui'

const router = useRouter()
const formRef = ref(null)
const userRef = ref({
    account: null,
    password: null,
    autoLoginFlag: false
})
const message = useMessage()
const loadingFlag = ref(false)
// 校验规则
const rules = {
    account: [
        {
            required: true,
            validator (rule, value) {
                if (!value) {
                    return new Error('账户填写异常')
                }
                return true
            },
            trigger: ['input', 'blur']
        }
    ],
    password: [
        {
            required: true,
            validator (rule, value) {
                if (value.length < 6 || value.length > 16) {
                    return new Error('密码长度大于6位小于16位')
                } else if (!rulePassword.test(value)) {
                    return new Error('密码由数字和字母组成')
                }
                return true
            },
            trigger: ['input', 'blur']
        }
    ]
}

const formClick = () => {
    loadingFlag.value = true
    Request.post({ url: '/authority/loginByAccount?' + 'account=' + userRef.value.account + '&password=' + userRef.value.password }).then((res) => {
        loadingFlag.value = false
        if (res.code === '200') {
            localStorage.setItem('token', res.result)
            message.success('登录成功')
            if (userRef.value.autoLoginFlag) {
                localStorage.setItem('autoLoginFlag', 1)
            }
            router.push({ path: '/app/hotChannel' })
        } else {
            message.error(res.message)
        }
    })
}

const forgetPasswordClick = () => {
    router.push({ path: '/login/forgetAuth' })
}

const registerAccountClick = () => {
    router.push({ path: '/login/registerAuth' })
}
</script>

<template>
    <n-spin :show="loadingFlag">
        <div class="login-password-box">
            <n-h1 class="title">密码登录</n-h1>
            <n-form
                class="form"
                :model="userRef"
                :rules="rules"
                ref="formRef"
            >
                <n-form-item label="账户" path="account">
                    <n-input v-model:value="userRef.account" round placeholder="请输入用户名/邮箱"/>
                </n-form-item>
                <n-form-item label="密码" path="password">
                    <n-input v-model:value="userRef.password" round placeholder="请输入密码"/>
                </n-form-item>
                <div style="display: flex; justify-content: space-between;">
                    <n-checkbox v-model:checked="userRef.autoLoginFlag" style="margin-left: 8px;">下次自动登录</n-checkbox>
                </div>
                <div style="display: flex; justify-content: center">
                    <n-button
                        :disabled="userRef.account === null || userRef.account === '' || userRef.password === null || userRef.password === ''" round type="primary" @click="formClick" size="large" style="margin-top: 16px; width: 100%;">登录
                    </n-button>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 16px;">
                    <n-button style="margin-right: 8px;" @click="registerAccountClick" text type="primary">注册账号</n-button>
                    <n-button style="margin-right: 8px;" @click="forgetPasswordClick" text type="primary">忘记密码</n-button>
                </div>
            </n-form>
        </div>
    </n-spin>
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
        margin-bottom: 32px;
    }
}
</style>

<script setup>
import { ref } from 'vue'
import { ruleEmail, rulePassword } from '@/utils/auth/rule.js'
import Request from '@/services/request/initialize.js'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'

const formRef = ref(null)
const router = useRouter()
const registerRef = ref({
    username: null,
    email: null,
    password: null
})
const loadingFlag = ref(false)
const message = useMessage()

const rules = {
    username: [{
        required: true
    }],
    email: [{
        required: true,
        validator (rule, value) {
            if (!ruleEmail.test(value)) {
                return new Error('邮箱格式错误')
            }
            return true
        },
        trigger: ['input', 'blur']
    }],
    password: [{
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
    }]
}

const formClick = () => {
    loadingFlag.value = true
    console.log(registerRef.value)
    Request.post({
        url: '/authority/register',
        data: registerRef
    }).then(res => {
        loadingFlag.value = false
        console.log(res)
        if (res.code === '200') {
            router.push({ path: '/login/loginPassword' })
            message.success('注册成功')
        } else {
            message.error(res.message)
        }
    })
}
</script>

<template>
    <n-spin :show="loadingFlag">
        <div class="register-auth">
        <n-h1 class="title">注册账号</n-h1>
        <n-form
                class="form"
                :model="registerRef"
                :rules="rules"
                ref="formRef"
            >
                <n-form-item label="用户名" path="username">
                    <n-input v-model:value="registerRef.username" round placeholder="请输入用户名"/>
                </n-form-item>
                <n-form-item label="邮箱" path="email">
                    <n-input v-model:value="registerRef.email" round placeholder="请输入邮箱"/>
                </n-form-item>
                <n-form-item label="密码" path="password">
                    <n-input v-model:value="registerRef.password" round placeholder="请输入密码"/>
                </n-form-item>
                <div style="display: flex; justify-content: center">
                    <n-button
                        :disabled="registerRef.username === null || registerRef.email === null || registerRef.password === null" round type="primary" @click="formClick" size="large" style="margin-top: 16px; width: 100%;">注册
                    </n-button>
                </div>
            </n-form>
        </div>
    </n-spin>
</template>

<style lang="less" scoped>
.register-auth{
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

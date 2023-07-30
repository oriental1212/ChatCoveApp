<script setup>
import { ref } from 'vue'
import { ruleEmail, ruleCaptcha } from '@/utils/auth/rule.js'

const formRef = ref(null)
const userRef = ref({
    email: null,
    captcha: null,
    check: false
})
const rules = {
    email: [
        {
            required: true,
            validator (rule, value) {
                if (!ruleEmail.test(value)) {
                    return new Error('邮箱格式错误')
                }
                return true
            },
            trigger: ['input', 'blur']
        }
    ]
}
const formClick = () => {
    console.log(userRef.value)
}

const sendCaptchaClick = () => {

}
</script>

<template>
    <div class="login-auth-box">
        <div class="form-box">
            <n-h1 class="title">验证码登录</n-h1>
            <n-form
                ref="formRef"
                :model="userRef"
                :rules="rules"
                class="form"
            >
                <n-form-item label="邮箱" path="email">
                    <n-input v-model:value="userRef.email" round placeholder="请输入邮箱"/>
                </n-form-item>
                <n-form-item label="验证码" path="captcha">
                    <n-input-group>
                        <n-input v-model:value="userRef.captcha" round maxlength=6 placeholder="请输入验证码">
                        </n-input>
                        <n-button type="primary" round @click="sendCaptchaClick">发送验证码</n-button>
                    </n-input-group>
                </n-form-item>
                <n-checkbox v-model:checked="userRef.check" style="margin-left: 8px;">下次自动登录</n-checkbox>
                <div style="display: flex; justify-content: center">
                    <n-button
                        :disabled="userRef.captcha === null || userRef.captcha === '' || userRef.phone === null || userRef.email === '' || !ruleEmail.test(userRef.email) || !ruleCaptcha.test(userRef.captcha)"
                        round
                        type="primary" @click="formClick" size="large" style="margin-top: 16px; width: 100%;">注册/登录
                    </n-button>
                </div>
            </n-form>
        </div>
    </div>
</template>

<style lang="less" scoped>
.login-auth-box{
    .form-box{
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

}
</style>

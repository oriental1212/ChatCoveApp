<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ruleEmail, rulePassword, ruleCaptcha } from '@/utils/auth/rule.js'
import { useMessage } from 'naive-ui'

const formRef = ref(null)
// 校验验证码后的判断
const checkFlag = ref(true)
const userRef = reactive({
    email: null,
    captcha: null,
    password: null,
    repeatPassword: null
})
const router = useRouter()
const message = useMessage()
const sendCaptchaFalg = ref(false)
const sendCaptchaText = ref('发送验证码')

const rules = {
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
    captcha: [{
        required: true,
        message: '请输入验证码',
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
    }],
    repeatPassword: [{
        required: true,
        validator (rule, value) {
            if (value !== userRef.password) {
                return new Error('两次输入密码不同')
            }
            return true
        },
        trigger: ['input', 'blur']
    }]
}
// 发送验证码
const sendCaptchaClick = () => {
    if (sendCaptchaFalg.value) {
        return true
    } else {
        sendCaptchaFalg.value = true
        Request.post({ url: '/authority/sendCaptcha?' + 'account=' + userRef.value.email + '&sendFlag=resetPasswordCaptcha' }).then(res => {
            if (res.code === '200') {
                message.success('验证码发送成功')
            } else {
                message.error(res.message)
                sendCaptchaFalg.value = false
                return true
            }
        })
        let count = 60
        sendCaptchaText.value = count
        while (count === 0) {
            setTimeout(() => { count-- }, 1000)
        }
        sendCaptchaFalg.value = false
    }
}
// 提交校验码
const resetPsswordClick = () => {
    Request.post({
        url: '/authority/findPassword',
        data: {
            account: userRef.value.email,
            captcha: userRef.value.captcha,
            sendFlag: 'resetPasswordCaptcha'
        }
    }).then(res => {
        if (res.code === '200') {
            checkFlag.value = false
            message.success('验证码校验成功')
        } else {
            message.error(res.message)
        }
    })
}
// 返回登录界面
const backToRestClick = () => {
    router.push({ path: '/login/loginPassword' })
    checkFlag.value = true
}
// 重置密码
const confirmClick = () => {
    Request.post({
        url: '/authority/changePassword',
        data: {
            account: userRef.value.email,
            password: userRef.value.password,
            repeatPassword: userRef.value.repeatPassword
        }
    }).then(res => {
        if (res.code === '200') {
            message.success('验证码校验成功')
            router.push({ path: '/login/loginPassword' })
        } else {
            message.error(res.message)
        }
    })
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
            <n-form-item label="邮箱" path="email" v-if="checkFlag">
                <n-input v-model:value="userRef.email" round placeholder="请输入邮箱"/>
            </n-form-item>
            <n-form-item label="验证码" path="captcha" v-if="checkFlag">
                <n-input-group>
                    <n-input v-model:value="userRef.captcha" round maxlength=6 placeholder="请输入验证码">
                    </n-input>
                    <n-button type="primary" style="width: 100px;" :disabled="sendCaptchaFalg || !ruleEmail.test(userRef.email)" @click="sendCaptchaClick" round>{{ sendCaptchaText }}</n-button>
                </n-input-group>
            </n-form-item>
            <n-form-item label="密码" path="password" v-if="!checkFlag">
                <n-input v-model:value="userRef.password" round placeholder="请输入密码"/>
            </n-form-item>
            <n-form-item label="重复密码" path="repeatPassword" v-if="!checkFlag">
                <n-input v-model:value="userRef.repeatPassword" round placeholder="请重复输入密码"/>
            </n-form-item>
            <div style="display: flex; justify-content: center" v-if="checkFlag">
                <n-button
                    :disabled="!ruleCaptcha.test(userRef.captcha) || !ruleEmail.test(userRef.email)" round type="primary" @click="resetPsswordClick" size="large" style="margin-top: 16px; width: 100%;">
                    校验验证码
                </n-button>
            </div>
            <div style="display: flex; justify-content: center" v-if="!checkFlag">
                <n-button
                    :disabled="!ruleEmail.test(userRef.email) || !rulePassword.test(userRef.password) || !rulePassword.test(userRef.repeatPassword)" round type="primary" @click="confirmClick" size="large" style="margin-top: 16px; width: 100%;">
                    重置密码
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

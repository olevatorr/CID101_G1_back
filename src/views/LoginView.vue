<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios';

const admin = ref({
    acc: '',
    psw: '',  // 確保這裡使用 'psw' 而不是 'adPsw'
})
const authStore = useAuthStore()
const router = useRouter()


const backLogin = async () => {
    try {
        // console.log('Sending data:', admin.value);  // 調試日誌
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/adminLogin.php`, admin.value, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log('Response:', response.data);  // 調試日誌
        if (!response.data.error) {
            if(response.data.admin.AD_STATUS===2){
                alert('帳號已停權')
                return
            }
            authStore.login(response.data.admin)
            admin.value.acc = ''
            admin.value.psw = ''
            router.push('/home')
        } else {
            alert(response.data.msg || '登錄失敗')
        }
    } catch (error) {
        // console.error('Login error:', error);
        alert('登錄過程中出現錯誤：' + error.message)
    }
}

onMounted(() => {
    authStore.checkLoginStatus()
})
</script>
<template>
    <div class="container">
        <div class="p-5 col-9 m-auto mt-5 bg-light rounded">
            <div class="text-center p-3">
                <img src="/img/LOGO-color.png" alt="Bootstrap" height="120">
            </div>
            <p class="text-center fs-1 fw-bold">後台管理系統</p>
            <form @submit.prevent="backLogin">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">管理員帳號</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" v-model="admin.acc" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">管理員密碼</label>
                    <input type="password" class="form-control" v-model="admin.psw" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary m-auto d-block">登入</button>
            </form>
        </div>
    </div>
</template>
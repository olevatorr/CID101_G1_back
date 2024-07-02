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
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">管理員密碼</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" class="btn btn-primary m-auto d-block">登入</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'


const adminList = ref(null)
const authStore = useAuthStore()

const router = useRouter()

onMounted(() => {
    fetch(`${import.meta.env.BASE_URL}json/admin.json`)
        .then(res => res.json())
        .then(jsonData => {
            adminList.value = jsonData
            console.log(adminList.value);
        })
})

const backLogin = () => {
    const account = document.getElementById('exampleInputEmail1').value
    const password = document.getElementById('exampleInputPassword1').value

    const admin = adminList.value.find(
        admin => admin.AD_ACCOUNT === account && admin.AD_PSW === password
    )
    if (admin) {
        authStore.login(admin)
        router.push('/home')
    } else {
        alert('管理員帳號或密碼錯誤')
    }
}
</script>
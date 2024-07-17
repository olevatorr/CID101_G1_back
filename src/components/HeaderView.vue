<template>
    <nav class="sidebar bg-dark d-flex flex-column" v-if="loggedIn">
      <div class="sidebar-top">
        <router-link to="/" class="navbar-brand d-flex justify-content-center py-3">
          <img src="../../public/img/LOGO-white.png" alt="Logo" width="40" height="40">
        </router-link>
      </div>
      <div class="sidebar-scroll">
        <ul class="nav flex-column">
          <li class="nav-item">
            <RouterLink to="/ProductOrder" class="nav-link text-white">管理訂單</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Product" class="nav-link text-white">商品管理</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle" href="#" id="donateDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              捐款
            </a>
            <ul class="dropdown-menu" aria-labelledby="donateDropdown">
              <li><router-link to="/DonateList" class="dropdown-item">查看捐款明細</router-link></li>
              <li v-if="adminLevel===1"><router-link to="/DonateExpense" class="dropdown-item">捐款支出</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink to="/Event" class="nav-link text-white">活動管理</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link text-white dropdown-toggle" href="#" id="feedbackDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              留言管理
            </a>
            <ul class="dropdown-menu" aria-labelledby="feedbackDropdown">
              <li><router-link to="/Feedback" class="dropdown-item">留言列表</router-link></li>
              <li><router-link to="/FeedbackReport" class="dropdown-item">留言檢舉審核</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/NewsList" class="nav-link text-white">最新消息管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Knowledge" class="nav-link text-white">知識管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Member" class="nav-link text-white">會員管理</router-link>
          </li>
          <li class="nav-item" v-if="adminLevel===1">
            <router-link to="/Admin" class="nav-link text-white">管理員帳號管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Debris" class="nav-link text-white">海廢知識管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/About" class="nav-link text-white">關於我們管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Robot" class="nav-link text-white">客服機器人</router-link>
          </li>
        </ul>
      </div>
      <div class="sidebar-bottom mt-auto">
        <div class="d-flex justify-content-between align-items-center px-3 py-2">
          <span class="text-white">{{ adminName }}</span>
          <a class="btn btn-outline-light btn-sm" href="#" @click="navLogout">登出</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { useAuthStore } from '@/stores/auth'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'

  
  const authStore = useAuthStore()
  const { loggedIn, adminName, adminLevel } = storeToRefs(authStore)
  
  onMounted(() => {
    authStore.checkLoginStatus()
  })
  
  const navLogout = () => {
    authStore.logout()
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 200px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .sidebar-top {
    min-height: 60px;
  }
  
  .sidebar-scroll {
    flex-grow: 1;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #495057 #343a40;
  }
  
  .sidebar-scroll::-webkit-scrollbar {
    width: 6px;
  }
  
  .sidebar-scroll::-webkit-scrollbar-track {
    background: #343a40;
  }
  
  .sidebar-scroll::-webkit-scrollbar-thumb {
    background-color: #495057;
    border-radius: 3px;
  }
  
  .nav-link {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  .dropdown-menu {
    background-color: #343a40;
  }
  
  .dropdown-item {
    color: white;
    font-size: 0.85rem;
  }
  
  .dropdown-item:hover {
    background-color: #495057;
  }
  
  /* 為主內容區域添加左邊距 */
  :global(#app) {
    padding-left: 200px;
  }
  
  /* 調整導航項的間距 */
  .nav-item {
    margin-bottom: 2px;
  }
  
  /* 使用更緊湊的字體大小 */
  .sidebar {
    font-size: 0.9rem;
  }
  </style>
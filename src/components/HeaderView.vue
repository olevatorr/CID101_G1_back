<script setup>
    
import { RouterLink } from 'vue-router'
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <router-link to="/">
                <a class="navbar-brand" href="#">
                    <img src="../../public/img/LOGO-white.png" alt="Bootstrap" width="40" height="40">
                </a>
            </router-link>
            <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                        <RouterLink to="/ProductOrder"><a class="nav-link text-white" aria-current="page" href="#">
                            管理訂單</a></RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/Product"><a class="nav-link text-white" aria-current="page" href="#">
                            商品管理</a></RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            捐款
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><router-link to="/DonateList"><a class="dropdown-item" href="#">查看捐款明細</a></router-link></li>
                            <li><router-link to="/DonateExpense"><a class="dropdown-item" href="#">捐款支出</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            留言管理
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><router-link to="/Feedback"><a class="dropdown-item" href="#">留言列表</a></router-link></li>
                            <li><router-link to="/FeedbackReport"><a class="dropdown-item" href="#">留言檢舉審核</a></router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="/NewsList"><a class="nav-link text-white" href="#">最新消息管理</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Knowledge"><a class="nav-link text-white" href="#">知識管理</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Member"><a class="nav-link text-white" href="#">會員管理</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Admin"><a class="nav-link text-white" href="#">管理員帳號管理</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Debris"><a class="nav-link text-white" href="#">海廢知識管理</a></router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/About"><a class="nav-link text-white" href="#">關於我們管理</a></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
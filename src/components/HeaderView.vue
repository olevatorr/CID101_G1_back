<script setup>
    
import { RouterLink } from 'vue-router'
</script>


<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../../public/img/LOGO-white.png" alt="Bootstrap" width="60" height="60">
            </a>
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
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">活動管理</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">審核檢舉</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">最新消息管理</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">知識管理</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">會員管理</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">管理員帳號管理</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">海費知識管理</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
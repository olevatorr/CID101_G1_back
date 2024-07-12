<template>
    <div class="container">
        <p class="text-center fs-2">會員列表</p>
        <div class="row">
            <div class="modal-body col-4 px-3">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" :checked="filterStatus === 'all'"
                    @change="filterStatus = 'all'">
                    <label class="btn btn-outline-dark" for="btnradio1">
                        全部
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" 
                    :checked="filterStatus === 'suspended'" 
                    @change="filterStatus = 'suspended'">
                    <label class="btn btn-outline-dark" for="btnradio2">
                        已停權
                        <span class="badge text-bg-danger rounded-pill">{{ suspendedCount }}</span>
                    </label>
                </div>
            </div>
            <form class="d-flex col-8 w-25" role="search" @submit.prevent="searchMembers">
                <input class="form-control me-2" type="search" v-model="searchQuery" placeholder="Search" aria-label="Search">
            </form>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">會員編號#</th>
                    <th scope="col">會員頭像</th>
                    <th scope="col">會員帳號</th>
                    <th scope="col">會員姓名</th>
                    <th scope="col">會員電話</th>
                    <th scope="col">會員註冊日期</th>
                    <th scope="col">顯示會員資訊</th>
                    <th scope="col">會員停權</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(item, index) in paginatedMembers" :key="item.U_ID" class="align-middle">
                    <th scope="row">{{ (currentPage - 1) * membersPerPage + index + 1 }}</th>
                    <td>
                        <img :src="pathURL(item.U_AVATAR)" class="rounded-circle" alt="..." style="width: 50px">
                    </td>
                    <td>{{item.U_ACCOUNT}}</td>
                    <td>{{item.U_NAME}}</td>
                    <td>{{item.U_PHONE}}</td>
                    <td>{{item.U_DATE}}</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            :data-bs-target="`#eventModify${item.U_ID}`">
                            會員詳細資訊
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="`eventModify${item.U_ID}`" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">會員編號 #{{ item.U_ID }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <img :src="pathURL(item.U_AVATAR)" class="rounded-circle mb-3 mx-auto d-block" alt="..." style="width: 100px">
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">帳號</span>
                                                <input type="text" class="form-control" v-model="item.U_ACCOUNT"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">密碼</span>
                                                <input type="text" class="form-control" v-model="item.U_PSW"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">姓名</span>
                                                <input type="text" class="form-control" v-model="item.U_NAME"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">電話</span>
                                                <input type="tel" class="form-control" v-model="item.U_PHONE"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">電子信箱</span>
                                                <input type="text" class="form-control" v-model="item.U_EMAIL"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">地址</span>
                                                <input type="text" class="form-control" v-model="item.U_ADDRESS"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">關閉</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" 
                            :id="'flexSwitchCheck' + item.U_ID"
                            v-model="item.U_STATUS" @change="updateSuspensionStatus(item)">
                            <label class="form-check-label" 
                            :for="'flexSwitchCheck' + item.U_ID">
                                {{ item.U_STATUS  ? '正常' : '已停權' }}
                            </label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link text-dark" href="#" aria-label="Previous"
                    @click.prevent="changePage(currentPage - 1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li v-for="page in totalPages" 
                :key="page" class="page-item" >
                    <a class="page-link text-dark" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }"> 
                    <a class="page-link text-dark" href="#" aria-label="Next"
                    @click.prevent="changePage(currentPage + 1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            members: [],                    // 存儲會員數據的數組
            error: false,                   // 錯誤狀態
            errorMsg: '',                   // 錯誤信息
            defaultAvatar: 'member15.jpg',  // 默認頭像
            searchQuery: '',                // 搜索查詢字串
            filterStatus: 'all',            // 過濾狀態
            currentPage: 1,                 // 當前頁碼
            membersPerPage: 10              // 每頁顯示的會員數量
        };
    },
    computed: {
        filteredMembers() {
            // 檢查會員是否符合過濾條件
            return this.members.filter(member => {
                const matchesFilter = this.filterStatus === 'all' || (this.filterStatus === 'suspended' && !member.U_STATUS);
                const searchQueryLower = this.searchQuery.toLowerCase();
                
                // 將各個字段轉換為字串並檢查是否包含搜尋查詢
                // toLowerCase() ， 值轉換為小寫字串
                // this.searchQuery.toLowerCase() ， 將搜尋查詢（使用者輸入）轉換為小寫
                // includes() ， 檢查的小寫版本是否U_PHONE包含小寫搜尋查詢作為子字串
                // toString() ， 數值轉換為字串
                const matchesSearch = 
                member.U_ACCOUNT.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                member.U_NAME.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                member.U_PHONE.includes(this.searchQuery.toLowerCase()) ||
                member.U_DATE.toString().toLowerCase().includes(searchQueryLower);
                // 返回同時符合過濾條件和搜索查詢的會員
                return matchesFilter && matchesSearch;
            });
        },
         // 分頁會員數據
        paginatedMembers() {
            const start = (this.currentPage - 1) * this.membersPerPage;
            const end = start + this.membersPerPage;
            return this.filteredMembers.slice(start, end);
        },
         // 總頁數
        totalPages() {
            return Math.ceil(this.filteredMembers.length / this.membersPerPage);
        },
        // 停權會員數量
        suspendedCount() {
            return this.members.filter(member => !member.U_STATUS).length;
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
         // 獲取會員數據
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/memberBack.php`);
                if (!response.data.error) {
                    this.members = response.data.members.map(member => {
                        if (!member.U_AVATAR) {
                        member.U_AVATAR = this.defaultAvatar;
                        }
                         // 將 U_STATUS 轉換為布爾值
                        member.U_STATUS = member.U_STATUS === '1';
                        return member;
                    });
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        // 更新會員的停權狀態
        async updateSuspensionStatus(item) {
            try {
                const data = {
                    U_ID: item.U_ID,
                    U_STATUS: item.U_STATUS ? '1' : '0' // 確保與 v-model 使用的變數名稱一致
                };
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/updateSuspension.php`, data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.data.error) {
                    throw new Error(response.data.message);
                    }
                } catch (error) {
                    item.U_STATUS = !item.U_STATUS; // 如果發生錯誤，恢復更改前狀態
                }
        },
        // 搜索會員
        searchMembers() {
            this.currentPage = 1; // 當搜索時，重置為第一頁
        },
        // 更改頁碼
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        pathURL(url){
            return `${import.meta.env.VITE_IMG_URL}/member/${url}`
        }
        
    }
}
</script>
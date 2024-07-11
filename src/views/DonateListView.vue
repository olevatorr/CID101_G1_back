<template>
    <div class="container">
        <p class="text-center fs-2">捐款明細</p>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="text-center bg-dark rounded">
                    <p class="fs-4 text-white m-2">總金額<span class="fs-2 ms-2 me-2">{{ totalAmount }}</span>元</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="text-center bg-dark rounded">
                    <p class="fs-4 text-white m-2">支出金額<span class="fs-2 ms-2 me-2">{{ totalOUTLAY }}</span>元</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="text-center bg-dark rounded">
                    <p class="fs-4 text-white m-2">剩餘金額<span class="fs-2 ms-2 me-2">{{ remainingAmount }}</span>元</p>
                </div>
            </div>
            <div class="col-12">
                <p class="text-center fs-3">收入明細</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">捐款編號#</th>
                            <th scope="col">會員名稱</th>
                            <th scope="col">捐款金額</th>
                            <th scope="col">捐款日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- 使用 paginatedDONATE 來顯示當前頁的資料 -->
                        <tr v-for="(item, index) in paginatedDONATE" :key="index">
                            <th scope="row">{{ currentPage * itemsPerPage + index + 1 }}</th>
                            <td>{{ item.U_NAME }}</td>
                            <td>NT${{ item.DO_AMOUNT }}</td>
                            <td>{{ item.DO_DATE }}</td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example m-auto">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: currentPage === 0 }">
                            <a class="page-link text-dark" href="#" aria-label="Previous" @click.prevent="prevPage('donate')">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="page in totalDonatePages" :key="page" :class="{ active: currentPage === page - 1 }">
                            <a class="page-link text-dark" href="#" @click.prevent="setPage(page - 1, 'donate')">{{ page }}</a>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === totalDonatePages - 1 }">
                            <a class="page-link text-dark" href="#" aria-label="Next" @click.prevent="nextPage('donate')">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-12">
                <p class="text-center fs-3">支出明細</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">支出編號#</th>
                            <th scope="col">支出分類</th>
                            <th scope="col">支出名目</th>
                            <th scope="col">支出金額</th>
                            <th scope="col">支出日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- 使用 paginatedEXPENDITURE 來顯示當前頁的資料 -->
                        <tr v-for="(item, index) in paginatedEXPENDITURE" :key="item.id">
                            <td>{{ currentPageEx * itemsPerPage + index + 1 }}</td>
                            <td>{{ item.EL_NAME }}</td>
                            <td>{{ item.EL_TITLE }}</td>
                            <td>{{ item.EL_OUTLAY }}</td>
                            <td>{{ item.EL_DATE }}</td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: currentPageEx === 0 }">
                            <a class="page-link text-dark" href="#" aria-label="Previous" @click.prevent="prevPage('expenditure')">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item" v-for="page in totalExpenditurePages" :key="page" :class="{ active: currentPageEx === page - 1 }">
                            <a class="page-link text-dark" href="#" @click.prevent="setPage(page - 1, 'expenditure')">{{ page }}</a>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPageEx === totalExpenditurePages - 1 }">
                            <a class="page-link text-dark" href="#" aria-label="Next" @click.prevent="nextPage('expenditure')">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            DONATE: [], // 捐款資料
            EXPENDITURE: [], // 支出資料
            error: false, // 是否有錯誤
            errorMsg: '', // 錯誤訊息
            currentPage: 0, // 當前頁碼
            currentPageEx: 0, // 當前支出頁碼
            itemsPerPage: 10 // 每頁顯示的項目數量
        }
    },
    computed: {
        totalAmount() {
            return this.DONATE.reduce((sum, item) => sum + parseFloat(item.DO_AMOUNT), 0);
        },
        totalOUTLAY() {
            return this.EXPENDITURE.reduce((sum, item) => sum + parseFloat(item.EL_OUTLAY), 0);
        },
        remainingAmount() {
            return this.totalAmount - this.totalOUTLAY;
        },
        paginatedDONATE() {
            // 根據當前頁碼分割捐款資料
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.DONATE.slice(start, end);
        },
        paginatedEXPENDITURE() {
            // 根據當前頁碼分割支出資料
            const start = this.currentPageEx * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.EXPENDITURE.slice(start, end);
        },
        totalDonatePages() {
            // 計算捐款資料的總頁數
            return Math.ceil(this.DONATE.length / this.itemsPerPage);
        },
        totalExpenditurePages() {
            // 計算支出資料的總頁數
            return Math.ceil(this.EXPENDITURE.length / this.itemsPerPage);
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/Donate.php`);
                if (!response.data.error) {
                    this.DONATE = response.data.data;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                console.error(error); // 打印錯誤信息
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        async fetchData1() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/Expenditure.php`);
                if (!response.data.error) {
                    this.EXPENDITURE = response.data;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                console.error(error);
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        setPage(page, type) {
            // 設置當前頁碼
            if (type === 'donate') {
                this.currentPage = page;
            } else if (type === 'expenditure') {
                this.currentPageEx = page;
            }
        },
        prevPage(type) {
            // 切換到上一頁
            if (type === 'donate' && this.currentPage > 0) {
                this.currentPage--;
            } else if (type === 'expenditure' && this.currentPageEx > 0) {
                this.currentPageEx--;
            }
        },
        nextPage(type) {
            // 切換到下一頁
            if (type === 'donate' && this.currentPage < this.totalDonatePages - 1) {
                this.currentPage++;
            } else if (type === 'expenditure' && this.currentPageEx < this.totalExpenditurePages - 1) {
                this.currentPageEx++;
            }
        }
    },
    mounted() {
        this.fetchData();
        this.fetchData1();
    }
};
</script>

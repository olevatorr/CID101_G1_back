<template>
    <div class="container">
        <p class="text-center fs-2">捐款支出</p>
        <form>
            <div class="row mt-3">
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">產品類別</label>
                        <select class="form-select" aria-label="Default select example" v-model="newItem.EL_NAME">
                            <option selected>請選擇支出類別</option>
                            <option value="海洋生態保育專案">海洋生態保育專案</option>
                            <option value="相關研究計畫">相關研究計畫</option>
                            <option value="淨灘活動">淨灘活動</option>
                            <option value="教育宣導活動">教育宣導活動</option>
                            <option value="行政及人事開支">行政及人事開支</option>
                            <option value="網站維運及更新">網站維運及更新</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">名目</label>
                        <div class="input-group">
                            <input type="text" v-model="newItem.EL_TITLE" class="form-control" id="basic-url"
                                aria-describedby="basic-addon3 basic-addon4">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">捐款金額</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text">NT$</span>
                            <input type="text" class="form-control" aria-label="Dollar amount" v-model="newItem.EL_OUTLAY">
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary justify-self-center" @click.prevent="addItem">送出</button>
        </form>
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
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedEXPENDITURE" :key="item.id">
                        <td>{{ currentPage * itemsPerPage + index + 1 }}</td>
                        <td>{{ item.EL_NAME }}</td>
                        <td>{{ item.EL_TITLE }}</td>
                        <td>{{ item.EL_OUTLAY }}</td>
                        <td>{{ item.EL_DATE }}</td>
                        <td>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop" @click="selectItemToDelete(item.EL_ID)">
                                刪除
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                                data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除支出紀錄</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <span class="badge text-bg-danger">請注意</span>
                                            <p class="m-3 fw-bold fs-4 text-center">您即將永久刪除這筆支出記錄。
                                                <br>
                                                一旦刪除,該記錄將無法恢復。
                                            </p>
                                            <ul class="list-group list-group-numbered">在點擊確認刪除之前,請仔細檢查以下事項:
                                                <li class="list-group-item border-0">確認選擇的是正確的支出記錄。</li>
                                                <li class="list-group-item border-0">檢查刪除此記錄是否會對財務報表和預算追蹤產生影響。</li>
                                                <li class="list-group-item border-0">確保已經備份或存檔了相關的單據和憑證。</li>
                                            </ul>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">返回</button>
                                            <button type="button" class="btn btn-primary" @click="confirmDelete" data-bs-dismiss="modal">確認刪除</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{ disabled: currentPage === 0 }">
                        <a class="page-link text-dark" href="#" aria-label="Previous" @click.prevent="prevPage">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" v-for="page in totalExpenditurePages" :key="page" :class="{ active: currentPage === page - 1 }">
                        <a class="page-link text-dark" href="#" @click.prevent="setPage(page - 1)">{{ page }}</a>
                    </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalExpenditurePages - 1 }">
                        <a class="page-link text-dark" href="#" aria-label="Next" @click.prevent="nextPage">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Expenditure: [], // 支出資料
            error: false, // 是否有錯誤
            errorMsg: '', // 錯誤訊息
            newItem: {
                EL_NAME: '',
                EL_TITLE: '',
                EL_OUTLAY: '',
            },
            selectedIdToDelete: null, // 被選擇刪除的支出ID
            currentPage: 0, // 當前頁碼
            itemsPerPage: 10 // 每頁顯示的項目數量
        }
    },
    computed: {
        paginatedEXPENDITURE() {
            // 根據當前頁碼分割支出資料
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.Expenditure.slice(start, end);
        },
        totalExpenditurePages() {
            // 計算支出資料的總頁數
            return Math.ceil(this.Expenditure.length / this.itemsPerPage);
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/Expenditure.php`);
                if (!response.data.error) {
                    this.Expenditure = response.data;
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
        async deleteItem(id) {
            console.log(id);
            try {
                const response = await axios.delete(`${import.meta.env.VITE_API_URL}/ExpenditureDelete.php?EL_ID=${id}`);
                if (!response.data.error) {
                    this.fetchData();
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        async addItem() {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/ExpenditureAdd.php`, JSON.stringify(this.newItem), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.data.error) {
                    this.newItem = {
                        EL_NAME: '',
                        EL_TITLE: '',
                        EL_OUTLAY: '',
                    };
                    this.fetchData();
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        selectItemToDelete(id) {
            this.selectedIdToDelete = id;
        },
        confirmDelete() {
            if (this.selectedIdToDelete !== null) {
                this.deleteItem(this.selectedIdToDelete);
                this.selectedIdToDelete = null;
            }
        },
        setPage(page) {
            this.currentPage = page;
        },
        prevPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        },
        nextPage() {
            if (this.currentPage < this.totalExpenditurePages - 1) {
                this.currentPage++;
            }
        }
    },
    mounted() {
        this.fetchData();
    }
};
</script>

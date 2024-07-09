<template>
    <div class="container">
        <p class="text-center fs-2">捐款支出</p>
        <form>
            <div class="row mt-3">
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">產品類別</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>請選擇支出類別</option>
                            <option value="1">海洋生態保育專案</option>
                            <option value="2">相關研究計畫</option>
                            <option value="3">淨灘活動</option>
                            <option value="4">教育宣導活動</option>
                            <option value="5">行政及人事開支</option>
                            <option value="6">網站維運及更新</option>
                        </select>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">名目</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="basic-url"
                                aria-describedby="basic-addon3 basic-addon4">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="mb-3">
                        <label for="basic-url" class="form-label">捐款金額</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text">NT$</span>
                            <input type="text" class="form-control" aria-label="Dollar amount">
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary justify-self-center">送出</button>
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
                    <tr v-for="(item, index) in EXPENDITURE" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.EL_NAME }}</td>
                        <td>{{ item.EL_TITLE }}</td>
                        <td>{{ item.EL_OUTLAY }}</td>
                        <td>{{ item.EL_DATE }}</td>
                        <td>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
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
                                            <button type="button" class="btn btn-primary">確認刪除</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                        <a class="page-link text-dark" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="#">2</a></li>
                    <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link text-dark" href="#" aria-label="Next">
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
            EXPENDITURE: [],
            error: false,
            errorMsg: ''
        }
    },
    methods: {
        async fetchData1() {
            try {
                const response = await axios.get('http://localhost/cid101/g1/api/EXPENDITURE.php');
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
        }
    },
    mounted() {
        this.fetchData1();
    }
};
</script>
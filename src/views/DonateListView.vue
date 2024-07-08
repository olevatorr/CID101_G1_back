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
                        <tr v-for="(item, index) in DONATE" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.U_NAME }}</td>
                            <td>NT${{ item.DO_AMOUNT }}</td>
                            <td>{{ item.DO_DATE }}</td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example m-auto">
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
                        <tr v-for="(item, index) in EXPENDITURE" :key="item.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.EL_NAME }}</td>
                            <td>{{ item.EL_NAME }}</td>
                            <td>{{ item.EL_OUTLAY }}</td>
                            <td>{{ item.EL_DATE }}</td>
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
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            DONATE: [],
            EXPENDITURE: [],
            error: false,
            errorMsg: ''
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
        }
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get('http://localhost/cid101/g1/api/Donate.php');
                console.log(response.data);
                if (!response.data.error) {
                    this.DONATE = response.data.data;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                console.error(error); // 打印错误信息
                this.error = true;
                this.errorMsg = error.message;
            }
        },
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
        this.fetchData();
        this.fetchData1();
    }
};
</script>

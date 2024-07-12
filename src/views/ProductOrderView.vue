<template>
    <div class="container">
        <p class="text-center fs-2">訂單列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">全部</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio2">待處裡
                    <span class="badge text-bg-danger rounded-pill">14</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio3">運送中
                    <span class="badge text-bg-primary rounded-pill">14</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio4">已完成</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio5">已取消</label>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">訂單號碼#</th>
                    <th scope="col">訂單日期</th>
                    <th scope="col">會員名稱</th>
                    <th scope="col">訂單金額</th>
                    <th scope="col">訂單狀態</th>
                    <th scope="col">訂單明細與操作</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="(item, index) in productOrder" :key="item.PO_ID" class="align-middle">
                    <th scope="row">{{ item.PO_ID }}</th>
                    <td>{{ item.PO_DATE }}</td>
                    <td>{{ item.PO_NAME }}</td>
                    <td>{{ item.PO_AMOUNT }}</td>
                    <td>
                        <div v-if="item.S_STATUS === 0" class="badge text-bg-danger text-wrap">未處裡</div>
                        <div v-else-if="item.S_STATUS === 1" class="badge text-bg-primary text-wrap">運送中</div>
                        <div v-else-if="item.S_STATUS === 2" class="badge text-bg-success text-wrap">已完成</div>
                        <div v-else class="badge text-bg-secondary text-wrap">已取消</div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                            :data-bs-target="'#staticBackdrop-revised2-' + index">
                            訂單明細與操作
                        </button>
                        <div class="modal fade" :id="'staticBackdrop-revised2-' + index" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content p-2">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">訂單編號 #{{ item.PO_ID }}
                                        </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">訂單資訊</th>
                                                <th scope="col">內容</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-group-divider">
                                            <tr class="align-middle">
                                                <th scope="row">訂單號碼#</th>
                                                <td>{{ item.PO_ID }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂單日期</th>
                                                <td>{{ item.PO_DATE }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂購人姓名</th>
                                                <td>{{ item.PO_NAME }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人姓名</th>
                                                <td>{{ item.PO_NAME }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人電話</th>
                                                <td>{{ item.PO_PHONE }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人收件地址</th>
                                                <td>{{ item.PO_ADDR }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">運送方式</th>
                                                <td>{{ item.PO_TRANS }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">付款方式</th>
                                                <td>{{ item.PM_ID }}</td>
                                            </tr>
                                            <!-- 要串另一個表格 -->
                                            <tr class="align-middle">
                                                <th scope="row">訂單明細</th>
                                                <td>
                                                    <table class="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">商品名稱</th>
                                                                <th scope="col">商品單價</th>
                                                                <th scope="col">商品數量</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="table-group-divider">
                                                            <tr v-for="(detail, detailIndex) in item.details"
                                                                :key="detailIndex">
                                                                <th scope="row">{{ detailIndex + 1 }}</th>
                                                                <td>{{ detail.P_NAME }}</td>
                                                                <td>{{ detail.P_PRICE }}</td>
                                                                <td>{{ detail.PO_QTY }}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂單運費</th>
                                                <td>60</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂單總金額(含運費)</th>
                                                <td>{{ item.PO_AMOUNT + 60 }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <form>
                                        <div class="modal-body">
                                            <div class="btn-group" role="group"
                                                aria-label="Basic radio toggle button group">
                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio-1"
                                                    autocomplete="off" checked>
                                                <label class="btn btn-outline-primary" for="btnradio-1">未處裡</label>
                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio-2"
                                                    autocomplete="off">
                                                <label class="btn btn-outline-primary" for="btnradio-2">運送中</label>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">關閉</button>
                                            <button type="submit" class="btn btn-primary">儲存狀態</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </td>
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
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            productOrder: [],
            newItem: {
                PO_ID: '',              // 訂單ID
                PO_NAME: '',            // 訂單人
                PO_ADDR: '',            // 訂單地址
                PO_PHONE: '',           // 訂單電話
                PO_DATE: '',            // 訂單日期
                PO_AMOUNT: 0,           // 訂單金額
                PM_ID: '',              // 付款方式
                PO_TRANS: '',           // 訂單方式
                S_STATUS: 0,            // 訂單狀態
            },
            error: false,
            errorMsg: '',
            edit: true,
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/productOrder.php`);
                if (!response.data.error) {
                    // 以PO_ID為基礎合併訂單和訂單明細
                    const orders = response.data.productOrder.reduce((acc, curr) => {
                        const { PO_ID, P_NAME, P_PRICE, PO_QTY, ...orderInfo } = curr;
                        if (!acc[PO_ID]) {
                            acc[PO_ID] = { ...orderInfo, PO_ID, details: [] };
                        }
                        acc[PO_ID].details.push({ P_NAME, P_PRICE, PO_QTY });
                        return acc;
                    }, {});
                    // 將合併後的訂單對象轉換為陣列
                    this.productOrder = Object.values(orders);
                } else {
                    throw new Error(response.data.msg);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                this.error = true;
                this.errorMsg = error.message || '獲取數據時發生錯誤';
            }
        },
    },
};
</script>

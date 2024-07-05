<template>
    <div class="container">
        <p class="text-center fs-2">訂單列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio2">
                    待處裡
                    <span class="badge text-bg-danger rounded-pill">14</span>
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio3">
                    運送中
                    <span class="badge text-bg-primary rounded-pill">14</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio4">
                    已完成
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio5">
                    已取消
                </label>
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
                <tr v-for="(item, index) in productOrder" :key="item.id" class="align-middle">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.PO_DATE }}</td>
                    <td>{{ item.PO_NAME }}</td>
                    <td>{{ item.PO_AMOUNT }}</td>
                    <td>
                        <div class="badge text-bg-danger text-wrap">
                            未處裡
                        </div>
                        <div class="badge text-bg-primary text-wrap">
                            運送中
                        </div>
                        <div class="badge text-bg-success text-wrap">
                            已完成
                        </div>
                        <div class="badge text-bg-secondary text-wrap">
                            已取消
                        </div>
                    </td>
                    <!-- 訂單明細與操作 -->
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                            :data-bs-target="'#staticBackdrop-revised2-' + index">
                            訂單明細與操作
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="'staticBackdrop-revised2-' + index" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content p-2">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">訂單編號 #1</h1>
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
                                                <td>{{ index + 1 }}</td>
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
                                                <!-- 為啥手機號碼都沒有0? -->
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人收件地址</th>
                                                <td>{{ item.PO_ADDR }}</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">運送方式</th>
                                                <td>表格沒有這個</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">付款方式</th>
                                                <td>{{ item.PM_ID }}</td>
                                            </tr>
                                            <!-- 要串另一個表格? -->
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
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td>【飲料杯套經典款-海龜】</td>
                                                                <td>$120</td>
                                                                <td>2</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>【側背包套經典款-鯨魚】</td>
                                                                <td>$520</td>
                                                                <td>4</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td>【馬克杯套經典款-海龜】</td>
                                                                <td>$660</td>
                                                                <td>1</td>
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
                                                <td>2980</td>
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
                PO_ID: '',              //訂單ID
                U_ID: '',               //會員ID
                PO_NAME: '',            //收貨人姓名
                PO_PHONE: '',           //電話
                PO_AMOUNT: '',          //總價
                PO_ADDR: '',            //送貨地址
                PM_ID: '',              //付款方式
                PO_DATE: '',            //訂單成立時間
                S_STATUS: '',           //訂單狀態
            },
            productOrderCount: 0,
            error: false,
            errorMsg: '',
            edit: true,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        
        async fetchData() {
            try {
                const response = await axios.get('http://localhost/cid101/g1/api/productOrder.php');
                if (!response.data.error) {
                    this.productOrder = response.data.productOrder;
                    this.productOrderCount = response.data.productOrderCount;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        // 新增訂單 
        // async addItem() {
        //     try {
        //         const response = await axios.post('http://localhost/cid101/g1/api/knowledgeAdd.php', JSON.stringify(this.newItem), {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        //         if (!response.data.error) {
        //             this.fetchData();
        //             this.newItem = {
        //                 K_TITLE: '',
        //                 K_CONTENT: '',
        //                 K_FROM: '',
        //                 K_URL: '',
        //                 K_DATE: ''
        //             };
        //         } else {
        //             this.error = true;
        //             this.errorMsg = response.data.msg;
        //         }
        //     } catch (error) {
        //         this.error = true;
        //         this.errorMsg = error.message;
        //     }
        // },
        // 刪除訂單 
        // async deleteItem(id) {
        //     try {
        //         const response = await axios.get('http://localhost/cid101/g1/api/productOrderDelete.php', {
        //             params: { PO_ID: id }
        //         });
        //         console.log(id);
        //         if (!response.data.error) {
        //             this.fetchData();
        //         } else {
        //             this.error = true;
        //             this.errorMsg = response.data.msg;
        //         }
        //     } catch (error) {
        //         this.error = true;
        //         this.errorMsg = error.message;
        //     }
        // },
        // 修改訂單 
        // async updateItem(item) {
        //     try {
        //         const response = await axios.post('http://localhost/cid101/g1/api/knowledgeUpdate.php', item);
        //         if (!response.data.error) {
        //             this.fetchData();
        //         } else {
        //             this.error = true;
        //             this.errorMsg = response.data.msg;
        //         }
        //     } catch (error) {
        //         this.error = true;
        //         this.errorMsg = error.message;
        //     }
        // },

    },
};
</script>
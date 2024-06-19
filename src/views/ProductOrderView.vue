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
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>2024/4/23 15:33</td>
                    <td>Mark</td>
                    <td>NT$ 3,000</td>
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
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            訂單明細與操作
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂單日期</th>
                                                <td>2024/4/23</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂購人姓名</th>
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人姓名</th>
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人電話</th>
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">收件人收件地址</th>
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">運送方式</th>
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">付款方式</th>
                                                <td>1</td>
                                            </tr>
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
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td>@mdo</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td>@fat</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">3</th>
                                                                <td colspan="2">Larry the Bird</td>
                                                                <td>@twitter</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂單運費</th>
                                                <td>1</td>
                                            </tr>
                                            <tr class="align-middle">
                                                <th scope="row">訂單總金額(含運費)</th>
                                                <td>1</td>
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
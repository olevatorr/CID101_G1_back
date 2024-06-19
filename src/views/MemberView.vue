<template>
    <div class="container">
        <p class="text-center fs-2">會員列表</p>
        <div class="row">
            <div class="modal-body col-4">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                    <label class="btn btn-outline-dark" for="btnradio1">
                        全部
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                    <label class="btn btn-outline-dark" for="btnradio2">
                        已停權
                        <span class="badge text-bg-danger rounded-pill">14</span>
                    </label>
                </div>
            </div>
            <form class="d-flex col-8 w-25" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
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
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>
                        <img src="/img/avatar.jpg" class="rounded-circle" alt="..." style="width: 50px">
                    </td>
                    <td>a123456</td>
                    <td>黃政宏</td>
                    <td>0912345678</td>
                    <td>2024/1/6</td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#eventModify">
                            會員詳細資訊
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="eventModify" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-md">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">會員編號 #1</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <img src="/img/avatar.jpg" class="rounded-circle mb-3 mx-auto d-block" alt="..." style="width: 100px">
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">帳號</span>
                                                <input type="text" class="form-control" value="a123456"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">密碼</span>
                                                <input type="text" class="form-control" value="a123456"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">姓名</span>
                                                <input type="text" class="form-control" value="黃政宏"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">電話</span>
                                                <input type="text" class="form-control" value="0912345678"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">電子信箱</span>
                                                <input type="text" class="form-control" value="abc123@gmail.com"
                                                    aria-label="Username" aria-describedby="basic-addon1" disabled>
                                            </div>
                                            <div class="input-group mb-3">
                                                <span class="input-group-text" id="basic-addon1">地址</span>
                                                <input type="text" class="form-control" value="桃園市中壢區復興路46號9樓"
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
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">
                            <label class="form-check-label" for="flexSwitchCheckChecked">停權</label>
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
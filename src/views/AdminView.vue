<template>
    <div class="container">
        <p class="text-center fs-2">管理員列表</p>
        <div class="row">
            <div class="modal-body col-4">
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                    <label class="btn btn-outline-dark" for="btnradio1">
                        全部
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
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
                    <th scope="col">管理員編號#</th>
                    <th scope="col">管理員名稱</th>
                    <th scope="col">管理員帳號</th>
                    <th scope="col">管理員密碼</th>
                    <th scope="col">管理員等級</th>
                    <th scope="col">管理員註冊日期</th>
                    <th scope="col">管理員停權</th>
                    <th scope="col">管理員刪除</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>admin</td>
                    <td>a123456</td>
                    <td>a123456</td>
                    <td>系統管理員</td>
                    <td>2024/1/6</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">
                            <label class="form-check-label" for="flexSwitchCheckChecked">停權</label>
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            刪除
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除管理員</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <span class="badge text-bg-danger">請注意</span>
                                        <p class="m-3 fw-bold fs-4 text-center">您即將永久刪除這位管理員。
                                            <br>
                                            一旦刪除,該管理員將無法恢復。
                                        </p>
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
<template>
    <div class="container">
        <p class="text-center fs-2">活動列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio2">
                    報名中
                    <span class="badge text-bg-danger rounded-pill">14</span>
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio3">
                    即將開始
                    <span class="badge text-bg-primary rounded-pill">14</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio4">
                    已結束
                </label>
            </div>
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="fa-solid fa-plus me-2"></i>新增活動
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-dark">
                            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增活動</h1>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動名稱</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動地點</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動地區</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>請選擇類別</option>
                                            <option value="1">北部</option>
                                            <option value="2">中部</option>
                                            <option value="3">南部</option>
                                            <option value="4">東部</option>
                                            <option value="4">離島</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動日期</label>
                                        <input class="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">開始報名日期</label>
                                        <input class="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">報名截止日期</label>
                                        <input class="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="basic-url" class="form-label">報名人數</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">人數上限</span>
                                        <input type="text" class="form-control" aria-label="Dollar amount">
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">活動主圖</label>
                                        <input class="form-control" type="file" id="formFile" accept="image/*">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="basic-url" class="form-label mt-3">活動詳細描述</label>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 300px"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary">新增活動</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">活動編號#</th>
                    <th scope="col">活動日期</th>
                    <th scope="col">報名截止日期</th>
                    <th scope="col">活動地區</th>
                    <th scope="col">活動地點</th>
                    <th scope="col">活動名稱</th>
                    <th scope="col">活動狀態</th>
                    <th scope="col">活動報名名單</th>
                    <th scope="col">活動操作</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>2024/6/23</td>
                    <td>2024/6/30</td>
                    <td>離島</td>
                    <td>澎湖縣篤行十村</td>
                    <td>澎湖群島愛海行動</td>
                    <td>
                        <div class="badge text-bg-danger text-wrap">
                            即將開始報名
                        </div>
                        <div class="badge text-bg-primary text-wrap">
                            報名中
                        </div>
                        <div class="badge text-bg-success text-wrap">
                            已額滿
                        </div>
                        <div class="badge text-bg-info text-wrap">
                            已延期
                        </div>
                        <div class="badge text-bg-warning text-wrap">
                            活動即將開始
                        </div>
                        <div class="badge text-bg-dark text-wrap">
                            活動結束
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#eventlist">
                            顯示名單
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="eventlist" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">活動編號 #1</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">會員編號#</th>
                                                        <th scope="col">會員名稱</th>
                                                        <th scope="col">參加人數</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>陳世修</td>
                                                        <td>7人</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#eventModify">
                            活動修改
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="eventModify" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">活動編號 #1</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動名稱</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="basic-url"
                                                                aria-describedby="basic-addon3 basic-addon4">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動地點</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="basic-url"
                                                                aria-describedby="basic-addon3 basic-addon4">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動地區</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>請選擇類別</option>
                                                            <option value="1">北部</option>
                                                            <option value="2">中部</option>
                                                            <option value="3">南部</option>
                                                            <option value="4">東部</option>
                                                            <option value="4">離島</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動日期</label>
                                                        <input class="form-control" type="date" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">開始報名日期</label>
                                                        <input class="form-control" type="date" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">報名截止日期</label>
                                                        <input class="form-control" type="date" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <label for="basic-url" class="form-label">報名人數</label>
                                                    <div class="input-group mb-3">
                                                        <span class="input-group-text">人數上限</span>
                                                        <input type="text" class="form-control"
                                                            aria-label="Dollar amount">
                                                    </div>
                                                </div>
                                                <div class="d-flex gap-4 mt-3">
                                                    <div class="mb-3">
                                                        <label for="formFile" class="form-label">活動主圖</label>
                                                        <input class="form-control" type="file" id="formFile"
                                                            accept="image/*">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="basic-url" class="form-label mt-3">活動詳細描述</label>
                                                    <div class="form-floating">
                                                        <textarea class="form-control"
                                                            placeholder="Leave a comment here" id="floatingTextarea2"
                                                            style="height: 300px"></textarea>
                                                    </div>
                                                </div>
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
<template>
    <div class="container">
        <p class="text-center fs-2">知識列表</p>
        <div class="modal-body mt-3">
            <p class="fs-4 d-inline-block">
                知識數量限制: 1/16
            </p>
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop-revise">
                <i class="fa-solid fa-plus me-2"></i>新增知識
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop-revise" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-dark">
                            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增知識</h1>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">知識標題</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">知識出處名稱</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">知識網址</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">知識主圖</label>
                                        <input class="form-control" type="file" id="formFile" accept="image/*">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="basic-url" class="form-label mt-3">知識內文</label>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 300px"></textarea>
                                        <label for="floatingTextarea2">最多200個中文字</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary">新增知識</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">知識編號#</th>
                    <th scope="col">知識日期</th>
                    <th scope="col">知識標題</th>
                    <th scope="col">知識內容</th>
                    <th scope="col">知識編輯</th>
                    <th scope="col">知識刪除</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>2024/5/21 14:04:22</td>
                    <td>鯨魚：海洋中的聲音大師</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            鯨魚以其複雜的聲音系統而聞名，這不僅用於尋找食物和交配，還在社交互動中扮演重要角色。例如，座頭鯨以其多段式的歌聲聞名，而抹香鯨則使用獨特的代碼進行溝通。最新研究還表明，鯨魚的聲音傳播距離可能比預期更遠，有些聲音甚至可以在數千公里的範圍內傳播。這些發現深化了我們對鯨魚認知和海洋生態系統中聲音交流的理解。
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop-revised2">
                            編輯
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop-revised2" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header bg-dark">
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">修改知識</h1>
                                        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">知識標題</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="basic-url"
                                                            aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">知識出處名稱</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="basic-url"
                                                            aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">知識網址</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="basic-url"
                                                            aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-4 mt-3">
                                                <div class="mb-3">
                                                    <label for="formFile" class="form-label">知識主圖</label>
                                                    <input class="form-control" type="file" id="formFile"
                                                        accept="image/*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="basic-url" class="form-label mt-3">知識內文</label>
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a comment here"
                                                        id="floatingTextarea2" style="height: 300px"></textarea>
                                                    <label for="floatingTextarea2">最多200個中文字</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">取消</button>
                                        <button type="button" class="btn btn-primary">新增知識</button>
                                    </div>
                                </div>
                            </div>
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
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除知識</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <span class="badge text-bg-danger">請注意</span>
                                        <p class="m-3 fw-bold fs-4 text-center">您即將永久刪除這筆知識。
                                            <br>
                                            一旦刪除,該知識將無法恢復。
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
    </div>
</template>
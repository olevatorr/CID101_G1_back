<template>
  <div class="container">
    <p class="text-center fs-2">商品列表</p>
    <div class="modal-body mt-3">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="btnradio1">
          全部
        </label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio2">
          主打商品
          <span class="badge text-bg-warning rounded-pill">2</span>
        </label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio3">
          已上架
          <span class="badge text-bg-primary rounded-pill">32</span>
        </label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio4">
          未上架
          <span class="badge text-bg-danger rounded-pill">3</span>
        </label>
      </div>
      <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="fa-solid fa-plus me-2"></i>新增商品
      </button>
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增產品</h1>
              <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">產品名稱</label>
                    <div class="input-group">
                      <input type="text" class="form-control" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">產品副標題</label>
                    <div class="input-group">
                      <input type="text" class="form-control" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">產品類別</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>請選擇類別</option>
                      <option value="1">杯套類</option>
                      <option value="2">上衣類</option>
                      <option value="3">包包類</option>
                      <option value="4">馬克杯</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">材質</label>
                    <div class="input-group">
                      <input type="text" class="form-control" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">尺寸</label>
                    <div class="input-group">
                      <input type="text" class="form-control" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">顏色</label>
                    <div class="input-group">
                      <input type="text" class="form-control" id="basic-url"
                        aria-describedby="basic-addon3 basic-addon4">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <label for="basic-url" class="form-label">產品價格</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text">NT$</span>
                    <input type="text" class="form-control" aria-label="Dollar amount">
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-flex gap-4 mt-3">
                    <div class="mb-3">
                      <label for="formFile" class="form-label">主圖(白色底)</label>
                      <input class="form-control" type="file" id="formFile" accept="image/*">
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">副圖1</label>
                      <input class="form-control" type="file" id="formFile" accept="image/*">
                    </div>
                    <div class="mb-3">
                      <label for="formFile" class="form-label">副圖2</label>
                      <input class="form-control" type="file" id="formFile" accept="image/*">
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                      style="height: 300px"></textarea>
                    <label for="floatingTextarea2">出現於商品主要描述區域</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary">新增商品</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">商品編號#</th>
          <th scope="col">商品名稱</th>
          <th scope="col">商品金額</th>
          <th scope="col">商品狀態</th>
          <th scope="col">商品編輯</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="align-middle">
          <th scope="row">1</th>
          <td>【飲料杯套經典款-鯨魚】</td>
          <td>NT$ 120</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
              <label class="form-check-label" for="flexSwitchCheckDefault">主打商品</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked">上架</label>
            </div>
          </td>
          <td>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
              data-bs-target="#staticBackdrop-revise">
              編輯
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop-revise" data-bs-backdrop="static" data-bs-keyboard="false"
              tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header bg-dark">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增產品</h1>
                    <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">產品名稱</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">產品副標題</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">產品類別</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>請選擇類別</option>
                            <option value="1">杯套類</option>
                            <option value="2">上衣類</option>
                            <option value="3">包包類</option>
                            <option value="4">馬克杯</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">材質</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">尺寸</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">顏色</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="basic-url" class="form-label">產品價格</label>
                        <div class="input-group mb-3">
                          <span class="input-group-text">NT$</span>
                          <input type="text" class="form-control" aria-label="Dollar amount">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-flex gap-4 mt-3">
                          <div class="mb-3">
                            <label for="formFile" class="form-label">主圖(白色底)</label>
                            <input class="form-control" type="file" id="formFile" accept="image/*">
                          </div>
                          <div class="mb-3">
                            <label for="formFile" class="form-label">副圖1</label>
                            <input class="form-control" type="file" id="formFile" accept="image/*">
                          </div>
                          <div class="mb-3">
                            <label for="formFile" class="form-label">副圖2</label>
                            <input class="form-control" type="file" id="formFile" accept="image/*">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                        <div class="form-floating">
                          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                            style="height: 300px"></textarea>
                          <label for="floatingTextarea2">出現於商品主要描述區域</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary">新增商品</button>
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
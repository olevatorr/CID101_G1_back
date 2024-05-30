<template>
    <div class="container">
        <p class="text-center fs-2">知識列表</p>
        <div class="modal-body mt-3">
            <button type="button" class="btn btn-primary ms-3">
                1/16
            </button>
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
                            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增消息</h1>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">消息標題</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" id="basic-url"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">消息類別</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>請選擇類別</option>
                                            <option value="1">最新商品</option>
                                            <option value="2">新技術</option>
                                            <option value="3">企業捐款</option>
                                            <option value="4">宣導</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">最新消息主圖</label>
                                        <input class="form-control" type="file" id="formFile" accept="image/*">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 300px"></textarea>
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
                    <th scope="col">消息編號#</th>
                    <th scope="col">消息日期</th>
                    <th scope="col">消息標題</th>
                    <th scope="col">消息內容</th>
                    <th scope="col">消息編輯</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>2024/5/21 14:04:22</td>
                    <td>微塑料威脅日益嚴重</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            隨著塑料製品的使用量不斷增加,其對環境造成的危害也日益嚴重。近年來,科學家發現了一種新型污染物——微塑料,它對生態系統和人類健康構成了前所未有的威脅。
                            微塑料是指直徑小於5毫米的塑料碎片,它們可能來自大型塑料垃圾的破碎,也可能直接是製造過程中的原生微塑料,例如化妝品中的塑料微粒。由於體積極小,微塑料容易隨風飄散、被海洋流帶走,無所不在地污染著我們的生存環境。

                            研究發現,微塑料已經遍布於世界各地的土壤、水體和空氣中。在遙遠的北極地區,科學家甚至在冰雪和海洋生物體內都檢測到了微塑料的存在。這種難以降解的微小顆粒不僅會損害野生動植物的生存,而且還會通過食物鏈最終進入人體,對人類健康帶來潛在風險。

                            專家警告,微塑料可能會積累在人體器官中,導致細胞損傷和發炎反應,還可能幹擾內分泌系統的正常運作。此外,微塑料的表面往往吸附有持久性有機污染物,如果進入人體,會進一步加劇其毒性影響。
                            面對日益嚴峻的微塑料污染問題,各國政府和國際組織紛紛採取行動。歐盟已經禁止在某些塑料產品中添加微塑料,聯合國環境規劃署也呼籲各國制定法規限制微塑料的使用和排放。

                            不過,要徹底解決這一問題,還需要全球範圍內的共同努力。科學家呼籲,除了加強立法管控外,我們每個人都應該從生活中的點點滴滴做起,減少一次性塑料製品的使用,選擇環保型替代品,形成綠色消費的生活方式,才能真正遏制微塑料污染對生態環境和人類健康帶來的威脅。
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
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增消息</h1>
                                        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">消息標題</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="basic-url"
                                                            aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">消息類別</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>請選擇類別</option>
                                                        <option value="1">最新商品</option>
                                                        <option value="2">新技術</option>
                                                        <option value="3">企業捐款</option>
                                                        <option value="4">宣導</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-4 mt-3">
                                                <div class="mb-3">
                                                    <label for="formFile" class="form-label">最新消息主圖</label>
                                                    <input class="form-control" type="file" id="formFile"
                                                        accept="image/*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                                                <div class="form-floating">
                                                    <textarea class="form-control" placeholder="Leave a comment here"
                                                        id="floatingTextarea2" style="height: 300px"></textarea>
                                                    <label for="floatingTextarea2">出現於商品主要描述區域</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">取消</button>
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
<template>
    <div class="container">
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio2">
                    待審核
                    <span class="badge text-bg-danger rounded-pill">14</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio3">
                    已下架
                </label>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">留言編號#</th>
                    <th scope="col">活動日期</th>
                    <th scope="col">活動地區</th>
                    <th scope="col">活動名稱</th>
                    <th scope="col">活動地點</th>
                    <th scope="col">會員名稱</th>
                    <th scope="col">留言內容</th>
                    <th scope="col">留言狀態</th>
                    <th scope="col">留言操作</th>
                    <th scope="col">顯示留言</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle">
                    <th scope="row">1</th>
                    <td>2024/6/23</td>
                    <td>2024/6/30</td>
                    <td>澎湖群島愛海行動</td>
                    <td>澎湖縣篤行十村</td>
                    <td>陳世修</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            今天參加了海灘清潔活動,感觸良多。一大早,我們就來到了海邊,看到沙灘上散落著各種垃圾,塑膠袋、瓶罐、魚網、甚至是廢棄的家電,令人觸目驚心。
                            在接下來的幾個小時裡,我們分工合作,撿拾垃圾。儘管天氣炎熱,但大家都很積極,不怕辛苦。看著一袋袋垃圾被清理乾淨,心裡很有成就感。
                            這次活動讓我意識到,海洋污染問題的嚴重性。人類製造的垃圾正在破壞海洋生態,危及海洋生物的生存。作為地球的一分子,我們每個人都有責任愛護環境,從日常做起。
                            以後我要努力減少塑膠製品的使用,使用環保袋和可重複利用的水杯。同時,我也要向身邊的人宣導環保理念,讓更多人意識到保護海洋的重要性。
                            今天的淨灘活動雖然結束了,但保護環境的行動不會停止。讓我們一起為美麗的海洋盡一份力,給未來的generations留下一個乾淨的家園。
                        </div>
                    </td>
                    <td>
                        <div class="badge text-bg-danger text-wrap">
                            待審核
                        </div>
                        <div class="badge text-bg-success text-wrap">
                            已下架
                        </div>
                    </td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked">
                            <label class="form-check-label" for="flexSwitchCheckChecked">下架</label>
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            data-bs-target="#eventModify">
                            詳細留言
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="eventModify" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">留言編號 #1</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <img src="https://live.staticflickr.com/65535/49330720018_2aeac1ffc3_b.jpg"
                                                class="img-thumbnail rounded mx-auto d-block" alt="...">
                                            <div class="mt-3 lh-base">
                                                今天參加了海灘清潔活動,感觸良多。一大早,我們就來到了海邊,看到沙灘上散落著各種垃圾,塑膠袋、瓶罐、魚網、甚至是廢棄的家電,令人觸目驚心。
                                                在接下來的幾個小時裡,我們分工合作,撿拾垃圾。儘管天氣炎熱,但大家都很積極,不怕辛苦。看著一袋袋垃圾被清理乾淨,心裡很有成就感。
                                                這次活動讓我意識到,海洋污染問題的嚴重性。人類製造的垃圾正在破壞海洋生態,危及海洋生物的生存。作為地球的一分子,我們每個人都有責任愛護環境,從日常做起。
                                                以後我要努力減少塑膠製品的使用,使用環保袋和可重複利用的水杯。同時,我也要向身邊的人宣導環保理念,讓更多人意識到保護海洋的重要性。
                                                今天的淨灘活動雖然結束了,但保護環境的行動不會停止。讓我們一起為美麗的海洋盡一份力,給未來的generations留下一個乾淨的家園。
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
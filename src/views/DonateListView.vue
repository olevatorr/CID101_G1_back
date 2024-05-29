<template>
    <div class="container">
        <p class="text-center fs-2">捐款明細</p>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="text-center bg-dark rounded">
                    <p class="fs-4 text-white m-2">總金額<span class="fs-2 ms-2 me-2">23,302,440</span>元</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="text-center bg-dark rounded">
                    <p class="fs-4 text-white m-2">支出金額<span class="fs-2 ms-2 me-2">19,301,929</span>元</p>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="text-center bg-dark rounded">
                    <p class="fs-4 text-white m-2">剩餘金額<span class="fs-2 ms-2 me-2">4,000,511</span>元</p>
                </div>
            </div>
            <div class="col-12">
                <p class="text-center fs-3">收入明細</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">捐款編號#</th>
                            <th scope="col">會員名稱</th>
                            <th scope="col">捐款金額</th>
                            <th scope="col">捐款日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>邱妤婕</td>
                            <td>NT$ 3,000,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>黃政宏</td>
                            <td>NT$ 5,000,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>陳昇志</td>
                            <td>NT$ 1,000,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>羅嘉明</td>
                            <td>NT$ 2,400,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>陳世修</td>
                            <td>NT$ 4,300,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>林芊芃</td>
                            <td>NT$ 3,250,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>彭淳華</td>
                            <td>NT$ 5,250,000</td>
                            <td>2024/4/23 10:20:33</td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example m-auto">
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
            <div class="col-12">
                <p class="text-center fs-3">支出明細</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">支出編號#</th>
                            <th scope="col">支出分類</th>
                            <th scope="col">支出名目</th>
                            <th scope="col">支出金額</th>
                            <th scope="col">支出日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>海洋生態保育專案</td>
                            <td>珊瑚礁復育計畫資助</td>
                            <td>300,000</td>
                            <td>2023/7/1 08:30:00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>相關研究計畫</td>
                            <td>海洋塑膠污染研究項目</td>
                            <td>200,000</td>
                            <td>2023/8/15 14:20:00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>淨灘活動</td>
                            <td>全國淨灘日活動經費</td>
                            <td>180,000</td>
                            <td>2023/9/20 10:00:00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>教育宣導活動</td>
                            <td>校園海洋環保講座系列</td>
                            <td>150,000</td>
                            <td>2023/10/5 15:45:00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>行政及人事開支</td>
                            <td>海洋保護組織運營費用</td>
                            <td>150,000</td>
                            <td>2023/11/10 11:30:00</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>網站維運及更新</td>
                            <td>海洋環保資料庫建設</td>
                            <td>20,000</td>
                            <td>2023/12/1 09:15:00</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>海洋生態保育專案</td>
                            <td>海龜保護計畫</td>
                            <td>250,000</td>
                            <td>2024/1/15 13:00:00</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>教育宣導活動</td>
                            <td>海洋環保線上課程開發</td>
                            <td>120,000</td>
                            <td>2024/2/20 16:30:00</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>相關研究計畫</td>
                            <td>永續漁業研究項目</td>
                            <td>180,000</td>
                            <td>2024/3/10 10:45:00</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>淨灘活動</td>
                            <td>海岸污染監測與清理</td>
                            <td>200,000</td>
                            <td>2024/4/5 14:00:00</td>
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
        </div>
    </div>
</template>
<template>
    <div class="container">
        <p class="text-center fs-2">回饋表單列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio3">
                    未處理
                    <span class="badge text-bg-danger rounded-pill">3</span>
                </label>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">訊息編號#</th>
                    <th scope="col">姓名</th>
                    <th scope="col">手機</th>
                    <th scope="col">信箱</th>
                    <th scope="col">訊息</th>
                    <th scope="col">傳送日期</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>樂樂</td>
                    <td>0912-345-678</td>
                    <td>Joy@email.com</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            我對你們的海洋垃圾問題資訊平台很感興趣。請問你們有哪些互動性的內容可以幫助我更好地理解這個問題的嚴重性？我特別想了解有關微塑料污染的數據和圖像。另外，你們有提供任何可以讓普通民眾參與的環保行動或計劃嗎？我也很想知道平台上是否有針對學校或社區的教育資源。期待能夠得到您的回覆，謝謝！
                        </div>
                    </td>
                    <td>2024/06/25</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>怒怒</td>
                    <td>0923-456-789</td>
                    <td>Anger@email.com</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            你們的平台看起來很全面，但我有一些問題想詢問。關於海洋垃圾的來源，你們有詳細的分類數據嗎？我特別關心工業污染對海洋的影響。另外，我想了解你們是如何確保平台上的信息都是準確且最新的？你們和哪些研究機構或環保組織有合作？如果我想報告自己所在地區的海洋污染問題，平台上有相應的功能嗎？希望能得到詳細的答覆，謝謝。
                        </div>
                    </td>
                    <td>2024/06/26</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>憂憂</td>
                    <td>0934-567-890</td>
                    <td>Sadness@email.com</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            看到海洋遭受如此嚴重的污染，我感到非常憂心。我想知道作為個人，我能為解決這個問題做些什麼？
                            你們的平台有提供任何指導或建議嗎？比如如何減少日常生活中的塑料使用，或者參與哪些淨灘活動？
                            另外，你們有追蹤報導一些成功的海洋清理項目嗎？我也很想了解政府在這方面的政策和行動。如果可以的話，我希望能定期收到你們的最新資訊。
                            非常感謝你們為保護海洋所做的努力。
                        </div>
                    </td>
                    <td>2024/06/27</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>焦焦</td>
                    <td>0945-678-901</td>
                    <td>Anxiety@email.com</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            我是一名環境科學的學生，對你們平台上的數據很感興趣。請問你們多久更新一次數據？
                            數據來源是哪裡？我特別想了解近年來海洋垃圾的變化趨勢，你們有這方面的長期追蹤數據嗎？
                            另外，平台上的互動內容是否適合用於課堂教學？如果我想基於你們的數據進行一些研究，需要什麼樣的許可嗎？
                            我也很想知道你們未來有什麼新的功能或內容會加入到平台中。非常期待您的回覆！
                        </div>
                    </td>
                    <td>2024/06/28</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>厭厭</td>
                    <td>0956-789-012</td>
                    <td>Disgust@email.com</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            我是一家環保NGO的項目經理，對你們的平台很感興趣。
                            我們正在策劃一個大型的海洋保護活動，想知道是否有可能與你們合作？你們能提供哪些資源或支持？
                            例如，我們可以使用你們的數據或圖像嗎？另外，你們平台有支持多語言嗎？我們希望能夠觸及更廣泛的受眾。
                            還有，你們是否曾與政府部門合作推動相關政策？如果方便的話，我們也希望能夠安排一次會議，進一步討論合作可能。期待您的回覆，謝謝。
                        </div>
                    </td>
                    <td>2024/06/29</td>
                </tr>
            </tbody>
        </table>


    </div>
</template>
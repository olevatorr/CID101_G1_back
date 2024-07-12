<template>
    <div class="container">
        <p class="text-center fs-2">檢舉留言審核</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input @click="switchFilter" value="all" type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input @click="switchFilter" value="nopass" type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-dark" for="btnradio3">
                    審核未通過
                    <span class="badge text-bg-danger rounded-pill">{{ filternoPass }}</span>
                </label>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">檢舉編號#</th>
                    <th scope="col">檢舉會員名稱</th>
                    <th scope="col">被檢舉會員名稱</th>
                    <th scope="col">檢舉原因</th>
                    <th scope="col">留言內容</th>
                    <th scope="col">檢舉時間</th>
                    <th scope="col">留言操作</th>
                    <th scope="col">顯示留言</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle" v-for="item in filterReport" :key="item.ER_ID">
                    <th scope="row">{{ item.ER_ID }}</th>
                    <td>{{ getUserName(item.UR_ID) }}</td>
                    <td>{{ getUserName(item.U_ID) }}</td>
                    <td>{{ getReasonName(item.ER_ORIGIN) }}</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                        {{ item.F_CONTENT }}
                        </div>
                    </td>
                    <td>{{ item.ER_TIME }}</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" :id="'flexSwitchCheckChecked'+item.ER_ID" @change="pass(item)" :checked="item.ES_STATUS === 1">
                            <label class="form-check-label" :for="'flexSwitchCheckChecked'+item.ER_ID">審核通過</label>
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            :data-bs-target="'#eventModify'+item.ER_ID" @click="showReports(item)">
                            詳細留言
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="'eventModify'+item.ER_ID" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">留言編號 #{{ selectReport.ER_ID }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <img :src="convertURL(item.F_IMG)"
                                                class="img-thumbnail rounded mx-auto d-block" alt="檢舉圖片">
                                            <div class="mt-3 lh-base">
                                                {{ item.F_CONTENT }}
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

<script>
import axios from 'axios';
export default {
    data() {
        return {
            REPORTS: [],
            reportStatus:'all',
            selectReport:{}
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/feedReport.php`);
                if (!response.data.error) {
                    this.REPORTS = response.data.events.sort((a,b) => b.ER_ID - a.ER_ID);
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        showReports(item){
            this.selectReport=item;
        },
        convertURL(url) {
            return `${import.meta.env.VITE_IMG_URL}/events/${url}`
        },
        async pass(item) {
            // 切换 F_Status 的值
            item.ES_STATUS = item.ES_STATUS === 0 ? 1 : 0;

            // 构建更新数据对象
            let updateData = {
                ES_STATUS: item.ES_STATUS,
                F_ID: item.F_ID,
                ER_ID: item.ER_ID,
                F_STATUS: item.F_Status === 0 ? 1 : 0
            };
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/feedReportUpdate.php`, updateData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                // console.log('更新成功：', response.data);
                this.fetchData()
                // console.log(updateData);
            } catch (error) {
                // console.error('更新失敗：', error);
            }
        },
        getUserName(name) {
            switch (name) {
                case 1:
                    return 'Alice Smith';
                case 2:
                    return 'Johnson';
                case 3:
                    return 'Charlie';
                case 4:
                    return 'Diana';
                case 5:
                    return 'Eve Adams';
                case 6:
                    return 'Smith';
                case 7:
                    return 'Williams';
                case 8:
                    return 'Brown';
                case 9:
                    return 'Davis';
                case 10:
                    return 'Miller';
                default:
                    return '未知';
            }
        },
        getReasonName(reason) {
            switch (reason) {
                case 0:
                    return '仇恨言論或歧視';
                case 1:
                    return '暴力或威脅';
                case 2:
                    return '騷擾或霸凌';
                case 3:
                    return '虛假信息或誤導信息';
                case 4:
                    return '色情或不當內容';
                case 5:
                    return '非法活動';
                case 6:
                    return '垃圾信息或廣告';
                case 7:
                    return '侵犯隱私';
                default:
                    return '未知';
            }
        },
        switchFilter(e){
            if(e.target.value === 'all'){
                this.reportStatus = 'all';
            } else {
                this.reportStatus = e.target.value;
            }
        }
    },
    computed: {
        filterReport() {
            if (this.reportStatus === 'nopass') {
                return this.REPORTS.filter(e => e.ES_STATUS === 0);
            } else {
                return this.REPORTS;
            }
        },
        filternoPass() {
            return this.REPORTS.filter(e =>e.ES_STATUS===0).length;
        }
    }

}
</script>
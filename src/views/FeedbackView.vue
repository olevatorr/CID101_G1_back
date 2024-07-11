<template>
    <div class="container">
        <p class="text-center fs-2">留言列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input v-model="filterStatus" value="all" type="radio" class="btn-check" name="btnradio" id="btnradio1"
                    autocomplete="off" checked>
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input v-model="filterStatus" value="inactive" type="radio" class="btn-check" name="btnradio"
                    id="btnradio3" autocomplete="off">
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
                    <th scope="col">留言操作</th>
                    <th scope="col">顯示留言</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle" v-for="message in filteredFeedback" :key="message.F_ID">
                    <th scope="row">{{ message.F_ID }}</th>
                    <td>{{ message.E_DATE }}</td>
                    <td>{{ getAreaName(message.E_AREA) }}</td>
                    <td>{{ message.E_TITLE }}</td>
                    <td>{{ message.E_ADDRESS }}</td>
                    <td>{{ message.U_NAME }}</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            {{ message.F_CONTENT }}
                        </div>
                    </td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch"
                                :id="'flexSwitchCheckChecked' + message.F_ID" :checked="message.F_STATUS === 1"
                                @change="Cancel(message)">
                            <label class="form-check-label" :for="'flexSwitchCheckChecked' + message.F_ID">下架</label>
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            :data-bs-target="'#eventModify'+message.F_ID" @click="showDetailModal(message)">
                            詳細留言
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="'eventModify'+message.F_ID" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">留言編號 #{{ message.F_ID }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <img :src="convertURL(this.selectedMessage.F_IMG)" alt="分享圖片">
                                            <div class="mt-3 lh-base">
                                                {{ this.selectedMessage.F_CONTENT }}
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
            FEEDBACK: [],
            filterStatus: 'all',
            selectedMessage: {}

        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/feedback.php`);
                if (!response.data.error) {
                    this.FEEDBACK = response.data.FEEDBACK.sort((a, b) => b.F_ID - a.F_ID);
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        getAreaName(area) {
            switch (area) {
                case 0:
                    return '北部';
                case 1:
                    return '中部';
                case 2:
                    return '南部';
                case 3:
                    return '東部';
                case 4:
                    return '離島';
                default:
                    return '未知';
            }
        },
        showDetailModal(message) {
            this.selectedMessage = message;
            // console.log(this.selectedMessage.F_IMG);
        },
        async Cancel(message) {
            // 切换 F_Status 的值
            message.F_STATUS = message.F_STATUS === 1 ? 0 : 1;

            // 构建更新数据对象
            let updateData = {
                F_ID: message.F_ID,
                F_STATUS: message.F_STATUS
            };
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/feedbackUpdate.php`, updateData, {
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
        convertURL(url) {
            return `${import.meta.env.VITE_IMG_URL}/events/${url}`
        },

    },
    computed: {
        filteredFeedback() {
            if (this.filterStatus === 'inactive') {
                return this.FEEDBACK.filter(feedback => feedback.F_STATUS === 1);
            } else {
                return this.FEEDBACK;
            }
        },

    }
}
</script>
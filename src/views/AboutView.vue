<template>
    <div class="container">
        <h2 class="text-center fs-2 mb-4">回饋表單列表</h2>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="btn-group" role="group" aria-label="回饋狀態篩選">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" v-model="filter" value="all"
                    autocomplete="off">
                <label class="btn btn-outline-primary" for="btnradio1">全部</label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" v-model="filter"
                    value="unprocessed" autocomplete="off">
                <label class="btn btn-outline-danger" for="btnradio2">
                    未處理
                    <span class="badge bg-danger rounded-pill">{{ unprocessedCount }}</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" v-model="filter" value="processed"
                    autocomplete="off">
                <label class="btn btn-outline-success" for="btnradio3">
                    已處理
                    <span class="badge bg-success rounded-pill">{{ processedCount }}</span>
                </label>
            </div>
            <div>
                <span class="me-2">共 {{ totalCount }} 筆資料</span>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-striped table-hover">
                <thead class="table-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">姓名</th>
                        <th scope="col">手機</th>
                        <th scope="col">信箱</th>
                        <th scope="col">訊息</th>
                        <th scope="col">傳送日期</th>
                        <th scope="col">狀態</th>
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedInquiries" :key="item.I_ID" class="align-middle">
                        <th scope="row">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</th>
                        <td>{{ item.I_NAME }}</td>
                        <td>{{ formatPhoneNumber(item.I_PHONE) }}</td>
                        <td>{{ item.I_EMAIL }}</td>
                        <td>
                            <div class="text-truncate" style="max-width: 200px;" :title="item.I_CONTENT">
                                {{ item.I_CONTENT }}
                            </div>
                        </td>
                        <td>{{ formatDate(item.I_DATE) }}</td>
                        <!--  未處理  已處理 -->
                        <td>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch"
                                    :id="'statusSwitch' + item.I_ID" v-model="item.I_STATUS"
                                    @change="toggleStatus(item)">
                                <label class="form-check-label" :for="'statusSwitch' + item.I_ID">{{ item.I_STATUS ?
                                    '已處理' : '未處理' }}</label>
                            </div>
                        </td>
                        <td>
                            <button type="button" class="btn btn-outline-primary btn-sm me-2" data-bs-toggle="modal"
                                :data-bs-target="'#contactModal-' + item.I_ID">
                                詳情
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 分頁控制 -->
        <nav aria-label="Page navigation" class="mt-4">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">上一頁</a>
                </li>
                <li v-for="page in totalPages" :key="page" class="page-item" :class="{ active: page === currentPage }">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">下一頁</a>
                </li>
            </ul>
        </nav>

        <!-- 詳情模態框 -->
        <div v-for="item in inquiry" :key="'detail-' + item.I_ID" class="modal fade" :id="'contactModal-' + item.I_ID"
            tabindex="-1" :aria-labelledby="'contactModalLabel-' + item.I_ID" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" :id="'contactModalLabel-' + item.I_ID">聯絡人詳細資訊</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p><strong>姓名：</strong> {{ item.I_NAME }}</p>
                        <p><strong>電話：</strong> {{ formatPhoneNumber(item.I_PHONE) }}</p>
                        <p><strong>電子郵件：</strong> {{ item.I_EMAIL }}</p>
                        <p><strong>留言內容：</strong></p>
                        <p>{{ item.I_CONTENT }}</p>
                        <p><strong>日期：</strong> {{ formatDate(item.I_DATE) }}</p>
                        <p><strong>狀態：</strong>
                            <span :class="item.I_STATUS ? 'badge bg-success' : 'badge bg-danger'">
                                {{ item.I_STATUS ? '已處理' : '未處理' }}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inquiry: [],
            filter: 'all',
            error: false,
            errorMsg: '',
            selectedItem: null,
            currentPage: 1,
            itemsPerPage: 10,
            I_STATUS: false
        };
    },
    computed: {
        filteredInquiry() {
            switch (this.filter) {
                case 'unprocessed':
                    return this.inquiry.filter(item => !item.I_STATUS);
                case 'processed':
                    return this.inquiry.filter(item => item.I_STATUS);
                default:
                    return this.inquiry;
            }
        },
        unprocessedCount() {
            return this.inquiry.filter(item => !item.I_STATUS).length;
        },
        processedCount() {
            return this.inquiry.filter(item => item.I_STATUS).length;
        },
        totalCount() {
            return this.inquiry.length;
        },
        totalPages() {
            return Math.ceil(this.filteredInquiry.length / this.itemsPerPage);
        },
        paginatedInquiries() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredInquiry.slice(start, end);
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/inquiry.php`);
                if (!response.data.error) {
                    this.inquiry = response.data.inquiry;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                    this.showToast('錯誤', this.errorMsg, 'error');
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
                this.showToast('錯誤', this.errorMsg, 'error');
            }
        },
        formatPhoneNumber(phoneNumber) {
            const cleaned = ('' + phoneNumber).replace(/\D/g, '');
            const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
            if (match) {
                return `${match[1]}-${match[2]}-${match[3]}`;
            }
            return phoneNumber;
        },
        formatDate(dateString) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
            return new Date(dateString).toLocaleDateString('zh-TW', options);
        },
        openStatusModal(item) {
            this.selectedItem = item;
            const statusModal = new bootstrap.Modal(document.getElementById('statusModal'));
            statusModal.show();
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        showToast(title, message, type) {
            // 這裡可以實現一個吐司通知功能，例如使用 bootstrap 的 toast 或其他通知庫
            console.log(`${title}: ${message}`);
        }
    },
    watch: {
        filter() {
            this.currentPage = 1;
        }
    }
};
</script>

<style scoped>
.table td,
.table th {
    vertical-align: middle;
}

.text-truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
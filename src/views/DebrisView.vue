<template>
    <div class="container">
        <p class="text-center fs-2">海廢資料列表</p>
        <div class="modal-body mt-3">
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop-revise">
                <i class="fa-solid fa-plus me-2"></i>新增海廢資料(月份)
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop-revise" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-dark">
                            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增海廢資料</h1>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">資料時間</label>
                                        <div class="input-group">
                                            <input type="date" class="form-control" id="basic-url" v-model="DDL_DATE"
                                                aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">海廢檔案(.json檔案)</label>
                                        <input class="form-control" type="file" id="formFile" accept=".json"
                                            @change="handleFileUpload">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="uploadFile">新增海廢數據</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">資料編號#</th>
                    <th scope="col">資料月分</th>
                    <th scope="col">上傳日期</th>
                    <th scope="col">資料刪除</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle" v-for="item in dataList" :key="item.DDL_ID">
                    <th scope="row">{{ item.DDL_ID }}</th>
                    <td>{{ item.DDL_DATE }}</td>
                    <td>{{ item.DDL_DATA_DATE }}</td>
                    <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop" @click="selectItemToDelete(item.DDL_ID)">刪除</button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除資料</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <span class="badge text-bg-danger">請注意</span>
                                        <p class="m-3 fw-bold fs-4 text-center">您即將永久刪除這筆資料。
                                            <br>
                                            一旦刪除,該資料將無法恢復。
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">返回</button>
                                        <button type="button" class="btn btn-primary" @click="confirmDelete" data-bs-toggle="modal">確認刪除</button>
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
<script>
import axios from 'axios';

export default {
    data() {
        return {
            DDL_DATE: '',
            selectedFile: null,
            dataList: []
        };
    },
    mounted() {
        this.fetchData(); // 組件掛載時獲取資料列表
    },
    methods: {
        handleFileUpload(event) {
            this.selectedFile = event.target.files[0];
        },
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/Debris.php`);
                this.dataList = response.data;
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        async uploadFile() {
            if (!this.DDL_DATE || !this.selectedFile) {
                alert('請選擇日期和文件');
                return;
            }

            let formData = new FormData();
            formData.append('DDL_DATE', this.DDL_DATE);
            formData.append('file', this.selectedFile);

            try {
                let response = await axios.post(`${import.meta.env.VITE_API_URL}/DebrisAdd.php`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (response.data.success) {
                    alert('文件上傳成功');
                    this.fetchData(); // 刷新資料或執行其他操作
                    this.DDL_DATE = ''; 
                    this.selectedFile = null; 
                    document.getElementById('formFile').value = '';
                }
            } catch (error) {
                console.error('上傳失敗:', error);
                alert('上傳失敗，請稍後再試');
            }
        },
        async deleteItem(id) {
            // console.log(id);
            try {
                const response = await axios.delete(`${import.meta.env.VITE_API_URL}/DebrisDelete.php?DDL_ID=${id}`);
                if (!response.data.error) {
                    this.fetchData();
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        selectItemToDelete(id) {
            this.selectedIdToDelete = id;
        },
        confirmDelete() {
            if (this.selectedIdToDelete !== null) {
                this.deleteItem(this.selectedIdToDelete);
                this.selectedIdToDelete = null;
            }
        },
    },
};
</script>
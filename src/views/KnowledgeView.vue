<template>
    <div class="container">
        <p class="text-center fs-2">知識列表</p>
        <div class="modal-body mt-3">
            <p class="fs-4 d-inline-block">
                知識數量限制: {{ knowledge.length }}/16
            </p>
            <button v-if="addKnowledge" type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop-revise">
                <i class="fa-solid fa-plus me-2"></i>新增知識
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop-revise">
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
                                            <input v-model="newItem.K_TITLE" type="text" class="form-control"
                                                id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">知識出處名稱</label>
                                        <div class="input-group">
                                            <input v-model="newItem.K_FROM" type="text" class="form-control"
                                                id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="imageUpload" class="form-label">知識主圖</label>
                                        <div v-if="imagePreview">
                                            <img :src="imagePreview" class="img-fluid img-thumbnail" alt="上傳的圖片">
                                        </div>
                                        <input class="form-control" type="file" id="imageUpload" accept="image/*"
                                            @change="onFileChange" ref="fileInput">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="basic-url" class="form-label mt-3">知識內文</label>
                                    <div class="form-floating">
                                        <textarea v-model="newItem.K_CONTENT" class="form-control"
                                            placeholder="Leave a comment here" id="floatingTextarea2"
                                            style="height: 300px"></textarea>
                                        <label for="floatingTextarea2">最多200個中文字</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button @click="addItem" type="button" class="btn btn-primary"
                                data-bs-toggle="modal">新增知識</button>
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
                <tr v-for="(item, index) in knowledge" :key="item.id" class="align-middle">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.K_DATE }}</td>
                    <td>{{ item.K_TITLE }}</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow: hidden;">
                            {{ item.K_CONTENT }}
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                            :data-bs-target="'#staticBackdrop-revised2-' + index">
                            編輯
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="'staticBackdrop-revised2-' + index" data-bs-backdrop="static"
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
                                                        <input v-model="item.K_TITLE" type="text" class="form-control"
                                                            id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">知識出處名稱</label>
                                                    <div class="input-group">
                                                        <input v-model="item.K_FROM" type="text" class="form-control"
                                                            id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="imageUpload" class="form-label">知識主圖</label>
                                                    <div v-if="item.imagePreview || item.K_URL">
                                                        <img :src="getImageSrc(item)" class="img-fluid img-thumbnail" alt="知識圖片">
                                                    </div>
                                                    <input class="form-control mt-2" type="file"
                                                        :id="'imageUpload-' + index" accept="image/*"
                                                        @change="(e) => onEditFileChange(e, item)">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="basic-url" class="form-label mt-3">知識內文</label>
                                                <div class="form-floating">
                                                    <textarea v-model="item.K_CONTENT" class="form-control"
                                                        placeholder="Leave a comment here" id="floatingTextarea2"
                                                        style="height: 300px"></textarea>
                                                    <label for="floatingTextarea2">最多200個中文字</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">取消</button>
                                        <button @click="updateItem(item)" type="button" class="btn btn-primary"
                                            data-bs-toggle="modal">確認修改</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop" @click="selectItemToDelete(item.K_ID)">
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
                                            <br>確定要繼續嗎？
                                        </p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">取消</button>
                                        <button @click="confirmDelete" type="button" class="btn btn-primary"
                                            data-bs-toggle="modal">確認</button>
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
            knowledge: [],
            newItem: {
                K_TITLE: '',
                K_CONTENT: '',
                K_FROM: '',
                K_DATE: '',
                K_URL: null
            },
            selectedIdToDelete: null,
            knowledgeCount: 0,
            error: false,
            errorMsg: '',
            edit: true,
            imagePreview: '',
        };
    },
    mounted() {
        this.fetchData();
    },
    computed: {
        addKnowledge() {
            return this.knowledge.length < 16;
        },
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/knowledge.php`);
                if (!response.data.error) {
                    this.knowledge = response.data.knowledge;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        async addItem() {
            try {
                const formData = new FormData(); // 改用formData 以利傳送檔案
                for (const key in this.newItem) {
                    formData.append(key, this.newItem[key]);
                }
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/knowledgeAdd.php`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (!response.data.error) {
                    this.newItem = {
                        K_TITLE: '',
                        K_CONTENT: '',
                        K_FROM: '',
                        K_DATE: '',
                        K_URL: null
                    };
                    this.imagePreview = null;
                    this.$refs.fileInput.value = '';
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
        // async addItem() {  純文字
        //     try {
        //         const response = await axios.post('http://localhost/cid101/g1/api/knowledgeAdd.php', JSON.stringify(this.newItem), {
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });
        //         if (!response.data.error) {
        //             this.newItem = {
        //                 K_TITLE: '',
        //                 K_CONTENT: '',
        //                 K_FROM: '',
        //                 K_URL: '',
        //                 K_DATE: ''
        //             };
        //             this.imageUrl = ''
        //             this.fetchData();
        //         } else {
        //             this.error = true;
        //             this.errorMsg = response.data.msg;
        //         }
        //     } catch (error) {
        //         this.error = true;
        //         this.errorMsg = error.message;
        //     }
        // },
        
        async deleteItem(id) {
            console.log(id);
            try {
                const response = await axios.delete(`${import.meta.env.VITE_API_URL}/knowledgeDelete.php?K_ID=${id}`);
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
        // 修改知識庫
        async updateItem(item) {
            try {
                const formData = new FormData();
                for (const key in item) {
                    if (key === 'newImage') {
                        formData.append('K_URL', item.newImage);
                    } else if (key !== 'imagePreview') {
                        formData.append(key, item[key]);
                    }
                }

                // 如果沒有新圖片，也要傳遞原來的 K_URL
                if (!item.newImage && item.K_URL) {
                    formData.append('K_URL', item.K_URL);
                }

                const response = await axios.post(`${import.meta.env.VITE_API_URL}/knowledgeUpdate.php`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (!response.data.error) {
                    this.fetchData();
                    // 清理臨時數據
                    delete item.newImage;
                    delete item.imagePreview;
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        // async updateItem(item) {
        //     try {
        //         const response = await axios.post('http://localhost/cid101/g1/api/knowledgeUpdate.php', item);
        //         if (!response.data.error) {
        //             this.fetchData();
        //         } else {
        //             this.error = true;
        //             this.errorMsg = response.data.msg;
        //         }
        //     } catch (error) {
        //         this.error = true;
        //         this.errorMsg = error.message;
        //     }
        // },
        onFileChange(e) {
            const file = e.target.files[0];
            this.newItem.K_URL = file;
            if (file) {
                this.imagePreview = URL.createObjectURL(file);
            }
        },
        onEditFileChange(e, item) {
            const file = e.target.files[0];
            if (file) {
                item.newImage = file;
                item.imagePreview = URL.createObjectURL(file);
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
        convertURL(url) {
            return `${import.meta.env.VITE_IMG_URL}/knowledge/${url}`
        },
        getImageSrc(item) {
            return item.imagePreview || this.convertURL(item.K_URL);
        }
    },
};
</script>
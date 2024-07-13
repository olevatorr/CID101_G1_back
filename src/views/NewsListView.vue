<template>
    <div class="container">
        <p class="text-center fs-2">消息列表</p>
        <div class="modal-body mt-3">
            <!-- category.id是陣列中單數個的id -->
            <!-- category.id是陣列中單數個的id -->
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <!-- 用 template 渲染時不會直接在 DOM 中生成額外的元素，它本身就像是一個隱藏的容器，只用來包裝內部的元素。 -->
                <template v-for="category in categories" :key="category.id">
                    <!-- :checked，跟 input 綁定，以 :id="'btnradio' + category.id" -->
                    <!-- :id="'btnradio' + category.id"，動態生成每個單選按鈕的 id 屬性，確保每個按鈕有唯一的識別符。 -->
                    <input type="radio" class="btn-check" name="btnradio" :id="'btnradio' + category.id"
                        autocomplete="off" :checked="selectedCategory === category.id"
                        @change="filterNews(category.id)">
                    <label class="btn btn-outline-dark" :for="'btnradio' + category.id">
                        {{ category.name }}
                    </label>
                    <!-- input 有id值 和 label 的for綁定，點擊 label的環保商品，id="btnradio2" 的 input 就會被選中，增加用戶點擊區域 -->
                </template>
            </div>
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop-revise">
                <i class="fa-solid fa-plus me-2"></i>新增消息
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
                                            <input v-model="newItem.N_TITLE" type="text" class="form-control"
                                                id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">消息類別</label>
                                        <select v-model="newItem.NS_ID" class="form-select"
                                            aria-label="Default select example">
                                            <option selected value="">請選擇類別</option>
                                            <option v-for="(category, index) in categories" :key="index"
                                                :value="category.id">
                                                <!-- 回傳給後端的value值 -->
                                                {{ category.name }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <div class="mb-3">
                                        <!-- 讓圖片有預覽功能 -->
                                        <label for="imageUpload" class="form-label">最新消息主圖</label>
                                        <div v-if="imagePreview">
                                            <img :src="imagePreview" class="img-fluid img-thumbnail" alt="上傳的圖片">
                                        </div>
                                        <input class="form-control" type="file" id="imageUpload" accept="image/*"
                                            @change="onFileChange" ref="fileInput">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="basic-url" class="form-label mt-3">最新消息內文</label>
                                    <div class="form-floating">
                                        <textarea v-model="newItem.N_CONTENT" class="form-control"
                                            placeholder="Leave a comment here" id="floatingTextarea2"
                                            style="height: 300px"></textarea>
                                        <label for="floatingTextarea2">最多500個中文字</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                @click="addItem">新增消息</button>
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
                <tr v-for="(item, index) in filteredNews" :key="item.id" class="align-middle">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ item.N_TIME }}</td>
                    <td>{{ item.N_TITLE }}</td>
                    <td>
                        <div class="text-nowrap" style="width: 10rem; text-overflow: ellipsis; overflow:hidden">
                            {{ item.N_CONTENT }}
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <!-- 視窗和按鈕是匹配的id值，綁定兩個:，點按按鈕打開相應視窗(ID)，按鈕對象# -->
                        <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
                            :data-bs-target="'#staticBackdrop-revised2-' + index"><!-- 每次按抓索引顯示是哪個 -->
                            編輯
                        </button>
                        <!-- Modal -->
                        <!-- 每次按抓索引顯示是哪個，綁定id(唯一值)用index來找項目 -->
                        <div class="modal fade" :id="'staticBackdrop-revised2-' + index" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header bg-dark">
                                        <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">修改消息</h1>
                                        <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">消息標題</label>
                                                    <div class="input-group">
                                                        <input v-model="item.N_TITLE" type="text" class="form-control"
                                                            id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12 col-md-6">
                                                <div class="mb-3">
                                                    <label for="basic-url" class="form-label">消息類別</label>
                                                    <!-- 來綁定選擇的類別 ID 到消息對象 item 的 NS_ID 屬性 -->
                                                    <select v-model="item.NS_ID" class="form-select"
                                                        aria-label="Default select example">
                                                        <option selected>請選擇類別</option>
                                                        <option v-for="(category, index) in categories" :key="index"
                                                            :value="category.id">
                                                            {{ category.name }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-4 mt-3">
                                                <div class="mb-3">
                                                    <!-- 預覽上傳圖片 -->
                                                    <label for="imageUpload" class="form-label">最新消息主圖</label>
                                                    <div v-if="item.imagePreview || item.N_IMG">
                                                        <img :src="item.imagePreview || formatImg(item.N_IMG)"
                                                            class="img-fluid img-thumbnail" alt="消息圖片">
                                                    </div>
                                                    <input class="form-control mt-2" type="file"
                                                        :id="'imageUpload-' + index" accept="image/*"
                                                        @change="(e) => onEditFileChange(e, item)">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="basic-url" class="form-label mt-3">消息詳細描述</label>
                                                <div class="form-floating">
                                                    <textarea v-model="item.N_CONTENT" class="form-control"
                                                        placeholder="Leave a comment here" id="floatingTextarea2"
                                                        style="height: 300px"></textarea>
                                                    <label for="floatingTextarea2">消息主要描述區域</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">取消</button>
                                        <button @click="updateItem(item)" type="button" class="btn btn-primary"
                                            data-bs-toggle="modal">修改消息</button>
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
            news: [],
            // 物件
            newItem: {
                N_TITLE: '',
                N_CONTENT: '',
                NS_ID: '',// 添加類別 ID 屬性
                N_IMG: null//圖片顯示，空值和null都可以
            },
            newsCount: 0,
            error: false,
            erroMsg: '',
            edit: true,
            imagePreview: '', // 上傳圖片預覽
            categories: [
                { id: 1, name: '全部' },
                { id: 2, name: '環保商品' },
                { id: 3, name: '環保議題' },
                { id: 4, name: '淨灘活動' }
            ], // 定義分類列表
            selectedCategory: 1, // 預設選中 "全部"
        };
    },
    computed: {
        filteredNews() {
            if (this.selectedCategory === 1) {
                return this.news; // 當 selectedCategory 為 1 時，返回所有新聞
            }
            return this.news.filter(item => item.NS_ID === this.selectedCategory); // 否則，根據 selectedCategory 過濾新聞
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        //非同步
        async fetchData() {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/news.php`);
                if (!response.data.error) {
                    this.news = response.data.news.sort((a, b) => b.N_ID - a.N_ID);
                    // this.newsCount = response.data.newsCount;
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
                // 新增圖片設定
                const formData = new FormData(); // 改用formData 以利傳送檔案
                for (const key in this.newItem) {
                    formData.append(key, this.newItem[key]);
                }
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/newsAdd.php`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                // 一般資訊設定
                if (!response.data.error) {
                    this.newItem = {
                        N_TITLE: '',
                        N_CONTENT: '',
                        NS_ID: '', // 重置類別 ID
                        N_IMG: null
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
        //篩選使用
        filterNews(categoryId) {
            this.selectedCategory = categoryId;
        },
        // 修改消息
        //點到的那個，所以有 item 當變數，要記得去綁訂唯一值id的button
        async updateItem(item) {
            try {
                // 圖片上傳
                const formData = new FormData();
                for (const key in item) {
                    if (key === 'newImage') {
                        formData.append('N_IMG', item.newImage);
                    } else if (key !== 'imagePreview') {
                        formData.append(key, item[key]);
                    }
                }
                // 如果沒有新圖片，也要傳遞原來的 N_IMG
                if (!item.newImage && item.N_IMG) {
                    formData.append('N_IMG', item.N_IMG);
                }
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/newsUpdate.php`, formData, {
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
        onFileChange(e) {
            const file = e.target.files[0];
            this.newItem.N_IMG = file;
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
        formatImg(url) {
            return `${import.meta.env.VITE_IMG_URL}/news/${url}`
        }
    }
}
</script>
<template>
    <div class="container">
        <p class="text-center fs-2">消息列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <!-- 使用 v-for 來動態生成分類按鈕 -->
                <!-- checked被選中，@change 是事件綁定，表示當單選按鈕的值發生改變時要執行的方法 -->
                <input type="radio" class="btn-check" name="btnradio" :id="'btnradio' + (index + 1)" autocomplete="off"
                    :checked="selectedCategory === category.id" v-for="(category, index) in categories" :key="index"
                    @change="filterNews(category.id)">
                <label class="btn btn-outline-dark" :for="'btnradio' + (index + 1)"
                    v-for="(category, index) in categories" :key="index">
                    {{ category.name }}
                </label>
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
                                            <option selected>請選擇類別</option>
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
                                        <label for="formFile" class="form-label">最新消息主圖</label>
                                        <input class="form-control" type="file" id="formFile" accept="image/*">
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
                                                    <label for="formFile" class="form-label">最新消息主圖</label>
                                                    <input class="form-control" type="file" id="formFile"
                                                        accept="image/*">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                                                <div class="form-floating">
                                                    <textarea v-model="item.N_CONTENT" class="form-control"
                                                        placeholder="Leave a comment here" id="floatingTextarea2"
                                                        style="height: 300px"></textarea>
                                                    <label for="floatingTextarea2">出現於商品主要描述區域</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">取消</button>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                            @click="updateItem(item)">修改消息</button>
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
                NS_ID: ''// 添加類別 ID 屬性
            },
            newsCount: 0,
            error: false,
            erroMsg: '',
            edit: true,
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
                return this.news;
            }
            return this.news.filter(item => item.NS_ID === this.selectedCategory);
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        //非同步
        async fetchData() {
            try {
                const response = await axios.get('http://localhost/cid101/g1/api/news.php');
                if (!response.data.error) {
                    this.news = response.data.news;
                    this.newsCount = response.data.newsCount;
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
                const response = await axios.post('http://localhost/cid101/g1/api/newsAdd.php', JSON.stringify(this.newItem), {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.data.error) {
                    this.fetchData();
                    this.newItem = {
                        N_TITLE: '',
                        N_CONTENT: '',
                        NS_ID: '' // 重置類別 ID
                    };
                } else {
                    this.error = true;
                    this.errorMsg = response.data.msg;
                }
            } catch (error) {
                this.error = true;
                this.errorMsg = error.message;
            }
        },
        filterNews(categoryId) {
            this.selectedCategory = categoryId;
        },
        // 修改消息
        //點到的那個，所以有 item 當變數，要記得去綁訂唯一值id的button
        async updateItem(item) {
            try {
                const response = await axios.post('http://localhost/cid101/g1/api/newsUpdate.php', item, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
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

    }
}
</script>
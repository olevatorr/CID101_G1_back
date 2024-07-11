<template>
  <div class="container">
    <p class="text-center fs-2">商品列表</p>

    <div class="modal-body mt-3">
      <!-- 篩選 -->
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" v-model="filter" value="all"
          autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio1">全部</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" v-model="filter" value="featured"
          autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio2">
          主打商品
          <span class="badge text-bg-warning rounded-pill">{{ featuredCount }}</span>
        </label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" v-model="filter" value="listed"
          autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio3">
          已上架
          <span class="badge text-bg-primary rounded-pill">{{ listedCount }}</span>
        </label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" v-model="filter" value="unlisted"
          autocomplete="off">
        <label class="btn btn-outline-dark" for="btnradio4">
          未上架
          <span class="badge text-bg-danger rounded-pill">{{ unlistedCount }}</span>
        </label>
      </div>

      <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#additem">
        <i class="fa-solid fa-plus me-2"></i>新增商品
      </button>
      <!-- Modal -->
      <!-- 商品新增 -->
      <div class="modal" id="additem" data-bs-backdrop="static">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header bg-dark">
              <h1 class="modal-title fs-5 text-white">新增產品</h1>
              <button type="button" class="btn-close bg-white" data-bs-toggle="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">產品名稱</label>
                    <div class="input-group">
                      <input v-model="newItem.P_NAME" type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">產品副標題</label>
                    <div class="input-group">
                      <input v-model="newItem.P_SUBTITLE" type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">產品類別</label>
                    <select v-model="newItem.PS_ID" class="form-select" aria-label="Default select example">
                      <option value="" disabled selected>請選擇類別</option>
                      <option v-for="s in sort" :key="s.PS_ID" :value="s.PS_ID">{{ s.PS_NAME }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">材質</label>
                    <div class="input-group">
                      <input v-model="newItem.P_MATERIAL" type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">尺寸</label>
                    <div class="input-group">
                      <input v-model="newItem.P_SIZE" type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="mb-3">
                    <label for="basic-url" class="form-label">顏色</label>
                    <div class="input-group">
                      <input v-model="newItem.P_COLOR" type="text" class="form-control">
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <label for="basic-url" class="form-label">產品價格</label>
                  <div class="input-group mb-3">
                    <span class="input-group-text">NT$</span>
                    <input v-model="newItem.P_PRICE" type="text" class="form-control" aria-label="Dollar amount">
                  </div>
                </div>
                <!-- 最上面 新增商品的圖片修改 -->
                <div class="mb-3 col-md-4">
                  <label for="formFile" class="form-label">主圖(白色底)</label>
                  <div v-if="mainImagePreview">
                    <img :src="mainImagePreview" class="img-fluid img-thumbnail" alt="主圖(白色底)">
                  </div>
                  <input class="form-control mt-2" type="file" id="mainImageUpload" accept="image/*"
                    @change="onMainImageChange" ref="mainImageInput">
                </div>
                <div class="mb-3 col-md-4">
                  <label for="formFile" class="form-label">副圖1</label>
                  <div v-if="imagePreview1">
                    <img :src="imagePreview1" class="img-fluid img-thumbnail" alt="副圖1">
                  </div>
                  <input class="form-control mt-2" type="file" id="image1Upload" accept="image/*"
                    @change="onImage1Change" ref="image1Input">
                </div>
                <div class="mb-3 col-md-4">
                  <label for="formFile" class="form-label">副圖2</label>
                  <div v-if="imagePreview2">
                    <img :src="imagePreview2" class="img-fluid img-thumbnail" alt="副圖2">
                  </div>
                  <input class="form-control mt-2" type="file" id="image2Upload" accept="image/*"
                    @change="onImage2Change" ref="image2Input">
                </div>

                <div class="col-12">
                  <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                  <div class="form-floating">
                    <textarea v-model="newItem.P_CONTENT" class="form-control" placeholder="Leave a comment here"
                      id="floatingTextarea2" style="height: 300px"></textarea>
                    <label for="floatingTextarea2">出現於商品主要描述區域</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
              <button @click="addItem" type="button" class="btn btn-primary" data-bs-dismiss="modal">新增商品</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">商品編號#</th>
          <th scope="col">商品名稱</th>
          <th scope="col">商品金額</th>
          <th scope="col">商品狀態</th>
          <th scope="col">商品編輯</th>
          <th scope="col">商品刪除</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="item in filteredProducts" :key="item.P_ID" class="align-middle">
          <th scope="row">{{ item.P_ID }}</th>
          <td>{{ item.P_NAME }}</td>
          <td>{{ item.P_PRICE }}</td>
          <!-- 商品狀態 -->
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" :id="'hotSwitch' + item.P_ID"
                :checked="item.P_HOT === 1" @change="switchHot(item)">
              <label class="form-check-label" for="'hotSwitch' + item.P_ID">主打商品</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" :id="'statusSwitch' + item.P_ID"
              :checked="item.P_STATUS === 1" @change="switchOnShelf(item)">
              <label class="form-check-label" for="'statusSwitch' + item.P_ID">上架</label>
            </div>
          </td>
          <!-- 商品修改 -->
          <td>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal"
              :data-bs-target="'#staticBackdrop-revised2-' + item.P_ID">
              編輯
            </button>
            <!-- Modal -->
            <div class="modal fade" :id="'staticBackdrop-revised2-' + item.P_ID" data-bs-backdrop="static"
              data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header bg-dark">
                    <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">編輯產品</h1>
                    <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">產品名稱</label>
                          <div class="input-group">
                            <input v-model="item.P_NAME" type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">產品副標題</label>
                          <div class="input-group">
                            <input v-model="item.P_SUBTITLE" type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">產品類別</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>請選擇類別</option>
                            <option v-for="s in sort" :key="s.PS_ID" :value="s.PS_ID" :selected="item.PS_ID === s.PS_ID">{{ s.PS_NAME }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">材質</label>
                          <div class="input-group">
                            <input v-model="item.P_MATERIAL" type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">尺寸</label>
                          <div class="input-group">
                            <input v-model="item.P_SIZE" type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="mb-3">
                          <label for="basic-url" class="form-label">顏色</label>
                          <div class="input-group">
                            <input v-model="item.P_COLOR" type="text" class="form-control" id="basic-url"
                              aria-describedby="basic-addon3 basic-addon4">
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="basic-url" class="form-label">產品價格</label>
                        <div class="input-group mb-3">
                          <span class="input-group-text">NT$</span>
                          <input v-model="item.P_PRICE" type="text" class="form-control" aria-label="Dollar amount">
                        </div>
                      </div>
                      <!-- 圖片修改 -->
                      <div class="col-12">
                        <div class="d-flex gap-4 mt-3">
                          <div class="mb-3">
                            <label for="formFile" class="form-label">主圖(白色底)</label>
                            <div v-if="item.mainImagePreview || item.P_MAIN_IMG">
                              <img
                                :src="item.P_MAIN_IMGPreview || formatImg(item.P_MAIN_IMG)"
                                class="img-fluid img-thumbnail" alt="主圖(白色底)">
                            </div>
                            <input class="form-control mt-2" type="file" :id="'mainImageUpload-' + index"
                              accept="image/*" @change="(e) => onImageChange(e, item, 'P_MAIN_IMG')">
                          </div>
                          <div class="mb-3">
                            <label for="formFile" class="form-label">副圖1</label>
                            <div v-if="item.image1Preview || item.P_IMG1">
                              <img
                                :src="item.P_IMG1Preview || formatImg(item.P_IMG1)"
                                class="img-fluid img-thumbnail" alt="副圖1">
                            </div>
                            <input class="form-control mt-2" type="file" :id="'image1Upload-' + index" accept="image/*"
                              @change="(e) => onImageChange(e, item, 'P_IMG1')">
                          </div>
                          <div class="mb-3">
                            <label for="formFile" class="form-label">副圖2</label>
                            <div v-if="item.image2Preview || item.P_IMG2">
                              <img
                                :src="item.P_IMG2Preview || formatImg(item.P_IMG2)"
                                class="img-fluid img-thumbnail" alt="副圖2">
                            </div>
                            <input class="form-control mt-2" type="file" :id="'image2Upload-' + index" accept="image/*"
                              @change="(e) => onImageChange(e, item, 'P_IMG2')">
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="basic-url" class="form-label mt-3">產品詳細描述</label>
                        <div class="form-floating">
                          <textarea v-model="item.P_CONTENT" class="form-control" placeholder="Leave a comment here"
                            id="floatingTextarea2" style="height: 300px"></textarea>
                          <label for="floatingTextarea2">出現於商品主要描述區域</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button @click="updateItem(item)" type="button" class="btn btn-primary"
                      data-bs-dismiss="modal">確認修改</button>
                  </div>
                </div>
              </div>
            </div>
          </td>
          <!-- 商品刪除 -->
          <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
              :data-bs-target="'#deleteModal-' + item.P_ID">
              刪除
            </button>
            <!-- Modal -->
            <div class="modal fade" :id="'deleteModal-' + item.P_ID" data-bs-backdrop="static" data-bs-keyboard="false"
              tabindex="-1" :aria-labelledby="'deleteModalLabel-' + item.P_ID" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除商品</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <span class="badge text-bg-danger">請注意</span>
                    <p class="m-3 fw-bold fs-4 text-center">您即將永久刪除這個商品。
                      <br>確定要繼續嗎？
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button @click="deleteItem(item.P_ID)" type="button" class="btn btn-danger"
                      data-bs-dismiss="modal">確認刪除</button>
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
      product: [],
      // items: [
      //   {
      //     mainImagePreview: '',
      //     image1Preview1: '',
      //     image2Preview2: '',
      //     P_MAIN_IMG: '',
      //     P_IMG1: '',
      //     P_IMG2: ''
      //   }
      // ],
      mainImagePreview: '',
      imagePreview1: '',
      imagePreview2: '',
      newItem: {
        P_ID: '',
        P_NAME: '',
        P_PRICE: '',
        P_SUBTITLE: '',
        P_MAIN_IMG: '',
        P_IMG1: '',
        P_IMG2: '',
        P_CONTENT: '',
        P_MATERIAL: '',
        P_SIZE: '',
        P_COLOR: '',
        P_HOT: false,
        P_STATUS: false,
        PS_ID: '',
        newMainImage: null,
        newImg1: null,
        newImg2: null,
        mainImagePreview: null,
        image1Preview: null,
        image2Preview: null
      },
      productCount: 0,
      error: false,
      errorMsg: '',
      edit: true,
      filter: 'all',
      sort: '',
    };
  },
  mounted() {
    this.fetchData();
    this.fetchSort()
  },
  computed: {
    filteredProducts() {
      if (!this.product) return []; // 添加安全檢查
      switch (this.filter) {
        case 'featured':
          return this.product.filter(item => item.P_HOT);
        case 'listed':
          return this.product.filter(item => item.P_STATUS);
        case 'unlisted':
          return this.product.filter(item => !item.P_STATUS);
        default:
          return this.product;
      }
    },
    featuredCount() {
      return this.product ? this.product.filter(item => item.P_HOT).length : 0;
    },
    listedCount() {
      return this.product ? this.product.filter(item => item.P_STATUS).length : 0;
    },
    unlistedCount() {
      return this.product ? this.product.filter(item => !item.P_STATUS).length : 0;
    }
  },

  methods: {
    // 取得資料
    async fetchData() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/product.php`);
        if (!response.data.error) {
          this.product = response.data.product;
          console.log(this.product);
          this.productCount = response.data.productCount;
        } else {
          this.error = true;
          this.errorMsg = response.data.msg;
        }
      } catch (error) {
        this.error = true;
        this.errorMsg = error.message;
      }
    },
    // 取得分類
    async fetchSort(){
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/prodSort.php`);
        if (!response.data.error) {
          this.sort = response.data.ps;
        } else {
          this.error = true;
          this.errorMsg = response.data.msg;
        }
      } catch (error) {
        this.error = true;
        this.errorMsg = error.message;
      }
    },
    // 新增商品
    async addItem() {
      try {
        if (!this.newItem.P_NAME) {
          alert('請輸入產品名稱');
          return;
        }
        const formData = new FormData();
        console.log(formData);
        for (const key in this.newItem) {
          if (key === 'P_HOT' || key === 'P_STATUS') {
            formData.append(key, this.newItem[key] ? '1' : '0');
          } else if (key === 'P_MAIN_IMG' || key === 'P_IMG1' || key === 'P_IMG2') {
            formData.append(key, this.newItem[key]);
          } else {
            formData.append(key, this.newItem[key]);
          }
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/productAdd.php`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (!response.data.error) {
          this.newItem = {
            P_ID: '',
            P_NAME: '',
            P_PRICE: '',
            P_SUBTITLE: '',
            P_MAIN_IMG: null,
            P_IMG1: null,
            P_IMG2: null,
            P_CONTENT: '',
            P_MATERIAL: '',
            P_SIZE: '',
            P_COLOR: '',
            P_HOT: false,
            P_STATUS: false,
            PS_ID: '',
          };

          // 重置文件輸入
          if (this.$refs.mainImageInput) this.$refs.mainImageInput.value = '';
          if (this.$refs.image1Input) this.$refs.image1Input.value = '';
          if (this.$refs.image2Input) this.$refs.image2Input.value = '';

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
    //刪除商品
    async deleteItem(id) {
      console.log();
      try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/productDelete.php?P_ID=${id}`);
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
    onImageChange(event, item, imageKey) {
      const file = event.target.files[0];
      if (file) {
        item[imageKey] = file;
        item[imageKey + 'Preview'] = URL.createObjectURL(file);
      }
    },
    // 修改商品
    async updateItem(item) {
      try {
        const formData = new FormData();

        for (const key in item) {
          if (['P_MAIN_IMG', 'P_IMG1', 'P_IMG2'].includes(key)) {
            if (item[key] instanceof File) {
              formData.append(key, item[key], item[key].name);
            } else if (typeof item[key] === 'string' && item[key].trim() !== '') {
              formData.append(key, item[key]);
            }
          } else if (!key.includes('Preview')) {
            formData.append(key, item[key]);
          }
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/productUpdate.php`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (!response.data.error) {
          this.fetchData();
          this.successMsg = "更新成功!";
        } else {
          this.error = true;
          this.errorMsg = response.data.msg;
        }
      } catch (error) {
        this.error = true;
        this.errorMsg = error.message;
      }
    },
    async generatePreview(item, key) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          item[`imagePreview${key.replace('P_', '')}`] = e.target.result;
          resolve();
        };
        reader.onerror = reject;
        reader.readAsDataURL(item[key]);
      });
    },

    // 新方法：處理圖片變更
    handleImageChange(event, item, imageKey) {
      const file = event.target.files[0];
      if (file) {
        item[imageKey] = file;
        this.generatePreview(item, imageKey);
      }
    },


    onEditFileChange(e, item) {
      const file = e.target.files[0];
      if (file) {
        item.newImage = file;
        item.imagePreview = URL.createObjectURL(file);
      }
    },
    onMainImageChange(e) {
      const file = e.target.files[0];
      this.newItem.P_MAIN_IMG = file;
      if (file) {
        this.mainImagePreview = URL.createObjectURL(file);
      }
    },
    onImage1Change(e) {
      const file = e.target.files[0];
      this.newItem.P_IMG1 = file;
      if (file) {
        this.imagePreview1 = URL.createObjectURL(file);
      }
    },
    onImage2Change(e) {
      const file = e.target.files[0];
      this.newItem.P_IMG2 = file;
      if (file) {
        this.imagePreview2 = URL.createObjectURL(file);
      }
    },
    formatImg(URL) {
      return `${import.meta.env.VITE_IMG_URL}/product/${URL}`
    },
    async switchHot(item){
      try {
        const prod ={
        P_HOT: item.P_HOT === 1? 0 : 1,
        P_ID: item.P_ID
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/prodHotUpdate.php`,prod)
        if(!response.data.error){
            this.fetchData()
        } else {
            alert(response.data.msg || '修改失敗')
        }
        } catch (error){
            alert('修改失敗', error.message)
        }
    },
    async switchOnShelf(item){
      try {
        const prodOnShelf ={
        P_STATUS: item.P_STATUS === 1? 0 : 1,
        P_ID: item.P_ID
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/prodOnShelfUpdate.php`,prodOnShelf)
        if(!response.data.error){
            this.fetchData()
        } else {
            alert(response.data.msg || '修改失敗')
        }
      } catch (error){
          alert('修改失敗', error.message)
      }
    },
  },

  // 新方法：生成圖片預覽
};
</script>
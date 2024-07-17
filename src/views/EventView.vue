<template>
    <div class="container">
        <p class="text-center fs-2">活動列表</p>
        <div class="modal-body mt-3">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked
                    v-model="currentFilter" value="all">
                <label class="btn btn-outline-dark" for="btnradio1">
                    全部
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked
                    v-model="currentFilter" value="ongoing">
                <label class="btn btn-outline-dark" for="btnradio2">
                    報名中
                    <span class="badge text-bg-danger rounded-pill">{{ ongoingCount }}</span>
                </label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"
                    v-model="currentFilter" value="upcoming">
                <label class="btn btn-outline-dark" for="btnradio3">
                    即將開始
                    <span class="badge text-bg-primary rounded-pill">{{ upcomingCount }}</span>
                </label>
                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"
                    v-model="currentFilter" value="ended">
                <label class="btn btn-outline-dark" for="btnradio4">
                    已結束
                </label>
            </div>
            <button type="button" class="btn btn-primary ms-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i class="fa-solid fa-plus me-2"></i>新增活動
            </button>
            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-dark">
                            <h1 class="modal-title fs-5 text-white" id="staticBackdropLabel">新增活動</h1>
                            <button type="button" class="btn-close bg-white" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動名稱</label>
                                        <div class="input-group">
                                            <input v-model="newItem.E_TITLE" type="text" class="form-control"
                                                id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動地點</label>
                                        <div class="input-group">
                                            <input v-model="newItem.E_ADDRESS" type="text" class="form-control"
                                                id="basic-url" aria-describedby="basic-addon3 basic-addon4">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動地區</label>
                                        <select v-model="newItem.E_AREA" class="form-select"
                                            aria-label="Default select example">
                                            <option selected>請選擇類別</option>
                                            <option :value="0">北部</option>
                                            <option :value="1">中部</option>
                                            <option :value="2">南部</option>
                                            <option :value="3">東部</option>
                                            <option :value="4">離島</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">活動日期</label>
                                        <input v-model="newItem.E_DATE" class="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">開始報名日期</label>
                                        <input v-model="newItem.E_START" class="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label">報名截止日期</label>
                                        <input v-model="newItem.E_DEADLINE" class="form-control" type="date" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label for="basic-url" class="form-label">報名人數</label>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text">人數上限</span>
                                        <input v-model="newItem.E_MAX_ATTEND" type="text" class="form-control"
                                            aria-label="Dollar amount">
                                    </div>
                                </div>
                                <div class="d-flex gap-4 mt-3">
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">活動主圖</label>
                                        <div v-if="imagePreview">
                                            <img :src="imagePreview" class="img-fluid img-thumbnail" alt="上傳的圖片">
                                        </div>
                                        <input class="form-control" type="file" id="formFile" accept="image/*"
                                            @change="onFileChange" ref="fileInput">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label for="basic-url" class="form-label mt-3">活動詳細描述</label>
                                    <div class="form-floating">
                                        <textarea v-model="newItem.E_CONTENT" class="form-control"
                                            placeholder="Leave a comment here" id="floatingTextarea2"
                                            style="height: 300px"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                @click="addItem">新增活動</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">活動編號#</th>
                    <th scope="col">活動日期</th>
                    <th scope="col">報名截止日期</th>
                    <th scope="col">活動地區</th>
                    <th scope="col">活動地點</th>
                    <th scope="col">活動名稱</th>
                    <th scope="col">活動狀態</th>
                    <th scope="col">活動報名名單</th>
                    <th scope="col">活動操作</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr class="align-middle" v-for="item in filteredEvents " :key="item.E_ID">
                    <th scope="row">{{ item.E_ID }}</th>
                    <td>{{ item.E_DATE }}</td>
                    <td>{{ item.E_DEADLINE }}</td>
                    <td>{{ getAreaName(item.E_AREA) }}</td>
                    <td>{{ item.E_ADDRESS }}</td>
                    <td>{{ item.E_TITLE }}</td>
                    <td>
                        <div class="badge text-bg-danger text-wrap" v-if="new Date() < new Date(item.E_START)">
                            即將開始報名
                        </div>
                        <div class="badge text-bg-primary text-wrap"
                            v-else-if="new Date() >= new Date(item.E_START) && new Date() < new Date(item.E_DEADLINE)">
                            報名中
                        </div>
                        <div class="badge text-bg-warning text-wrap" v-else-if="new Date() < new Date(item.E_DATE)">
                            活動即將開始
                        </div>
                        <div class="badge text-bg-dark text-wrap" v-else>
                            活動結束
                        </div>
                        <div class="badge text-bg-success text-wrap" v-if="item.E_SIGN_UP >= item.E_MAX_ATTEND">
                            已額滿
                        </div>
                        <div class="badge text-bg-info text-wrap" v-if="item.E_STATUS === 1">
                            已延期
                        </div>
                    </td>
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            :data-bs-target="'#eventlist' + item.E_ID" @click="filterList(item.E_ID)">
                            顯示名單
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="'eventlist' + item.E_ID" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" :id="'staticBackdropLabel' + index">活動編號 #{{ item.E_ID }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">會員編號#</th>
                                                        <th scope="col">會員名稱</th>
                                                        <th scope="col">參加人數</th>
                                                        <th scope="col">報名日期</th>
                                                        <th scope="col">強制取消</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(apply, index) in selectedOrders" :key="apply.EO_ID">
                                                        <th scope="row">{{ index + 1 }}</th>
                                                        <td>{{ apply.U_NAME }}</td>
                                                        <td>{{ apply.EO_ATTEND }}人</td>
                                                        <td>{{ apply.EO_DATE }}</td>
                                                        <td>
                                                            <div class="form-check form-switch">
                                                                <input class="form-check-input" type="checkbox"
                                                                    role="switch" :id="'flexSwitchCheckChecked' + index"
                                                                    :checked="apply.EO_STATUS"
                                                                    @change="Cancel($event, apply)">
                                                                <label class="form-check-label"
                                                                    :for="'flexSwitchCheckChecked' + index">取消此用戶報名</label>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
                    <!-- <td v-if="new Date() < new Date(item.E_DATE)"> -->
                    <td>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                            :data-bs-target="'#eventModify' + item.E_ID">
                            活動修改
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id="'eventModify' + item.E_ID" data-bs-backdrop="static"
                            data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" :id="'staticBackdropLabel' + item.E_ID">活動編號 #{{ item.E_ID }}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動名稱</label>
                                                        <div class="input-group">
                                                            <input v-model="item.E_TITLE" type="text"
                                                                class="form-control" id="basic-url"
                                                                aria-describedby="basic-addon3 basic-addon4">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動地點</label>
                                                        <div class="input-group">
                                                            <input v-model="item.E_ADDRESS" type="text"
                                                                class="form-control" id="basic-url"
                                                                aria-describedby="basic-addon3 basic-addon4">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動地區</label>
                                                        <select v-model="item.E_AREA" class="form-select"
                                                            aria-label="Default select example">
                                                            <option selected>請選擇類別</option>
                                                            <option :value="0">北部</option>
                                                            <option :value="1">中部</option>
                                                            <option :value="2">南部</option>
                                                            <option :value="3">東部</option>
                                                            <option :value="4">離島</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">活動日期</label>
                                                        <input v-model="item.E_DATE" class="form-control" type="date" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">開始報名日期</label>
                                                        <input v-model="item.E_START" class="form-control"
                                                            type="date" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <div class="mb-3">
                                                        <label for="basic-url" class="form-label">報名截止日期</label>
                                                        <input v-model="item.E_DEADLINE" class="form-control"
                                                            type="date" />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <label for="basic-url" class="form-label">報名人數</label>
                                                    <div class="input-group mb-3">
                                                        <span class="input-group-text">人數上限</span>
                                                        <input v-model="item.E_MAX_ATTEND" type="text"
                                                            class="form-control" aria-label="Dollar amount">
                                                    </div>
                                                </div>
                                                <div class="d-flex gap-4 mt-3">
                                                    <div class="mb-3">
                                                        <label for="formFile" class="form-label">活動主圖</label>
                                                        <div v-if="item.imagePreview || item.E_IMG">
                                                            <img :src="getImageSrc(item)" class="img-fluid img-thumbnail" alt="知識圖片">
                                                        </div>
                                                        <input class="form-control" type="file" :id="'formFile' + index"
                                                            accept="image/*" @change="(e) => onEditFileChange(e, item)">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <label for="basic-url" class="form-label mt-3">活動詳細描述</label>
                                                    <div class="form-floating">
                                                        <textarea class="form-control" v-model="item.E_CONTENT"
                                                            placeholder="Leave a comment here" id="floatingTextarea2"
                                                            style="height: 300px"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">關閉</button>
                                            <button type="submit" class="btn btn-primary"
                                                @click="updateItem(item)">儲存狀態</button>
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
            events: [],
            eventsApplied: [],
            newItem: {
                E_TITLE: '',
                E_ADDRESS: '',
                E_DATE: '',
                E_DEADLINE: '',
                E_STATUS: '',
                E_IMG: null
            },
            error: false,
            errorMsg: '',
            edit: false,
            currentFilter: 'all',
            imagePreview: '',
            selectedOrders: '',
            endApply:false,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const [eventsResponse, eventsAppliedResponse] = await Promise.all([
                    axios.get(`${import.meta.env.VITE_API_URL}/events.php`),
                    axios.get(`${import.meta.env.VITE_API_URL}/eventsApplied.php`)
                ]);

                if (!eventsResponse.data.error) {
                    this.events = eventsResponse.data.events;
                    // console.log(this.events);
                } else {
                    this.error = true;
                    this.errorMsg = eventsResponse.data.msg;
                }
                if (!eventsAppliedResponse.data.error) {
                    this.eventsApplied = eventsAppliedResponse.data.EVENTS;
                    // console.log(this.eventsApplied);
                } else {
                    this.error = true;
                    this.errorMsg = eventsResponse.data.msg;
                }

                // if (!orderResponse.data.error) {
                //     this.order = orderResponse.data.event_order;
                //     // console.log(this.order);
                // } else {
                //     this.error = true;
                //     this.errorMsg = orderResponse.data.msg;
                // }

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

                const response = await axios.post(`${import.meta.env.VITE_API_URL}/evenAdd.php`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (!response.data.error) {
                    this.newItem = {
                        E_TITLE: '',
                        E_ADDRESS: '',
                        E_DATE: '',
                        E_DEADLINE: '',
                        E_STATUS: '',
                        E_IMG: null
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
        async updateItem(item) {
            try {
                const formData = new FormData();
                console.log(item);
                for (const key in item) {
                    if (key === 'newImage') {
                        formData.append('E_IMG', item.newImage);
                    } else if (key !== 'imagePreview') {
                        formData.append(key, item[key]);
                    }
                }

                // 如果沒有新圖片，也要傳遞原來的 E_IMG
                if (!item.newImage && item.E_IMG) {
                    formData.append('E_IMG', item.E_IMG);
                }

                const response = await axios.post(`${import.meta.env.VITE_API_URL}/evenUpdate.php`, formData, {
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
            this.newItem.E_IMG = file;
            if (file) {
                this.imagePreview = URL.createObjectURL(file);
            }
        },
        onEditFileChange(e, item) {
            const file = e.target.files[0];
            if (file) {
                item.newImage = file;
                console.log(item);
                item.imagePreview = URL.createObjectURL(file);
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
        filterList(itemId) {
            this.selectedOrders = this.eventsApplied.filter(order => order.E_ID === itemId);

            // console.log(item);
            // console.log(this.order);
        },
        async Cancel($event, apply) {
            const eventItem = this.events.find(ev => ev.E_ID === apply.E_ID);
            // console.log(eventItem); //該筆活動整理資訊
            // console.log(apply);     //報名人的資訊
            if (apply.EO_STATUS === 0) {
                apply.EO_STATUS = 1;
                eventItem.E_SIGN_UP -= apply.EO_ATTEND;
            } else {
                apply.EO_STATUS = 0;
                if (eventItem) {
                    eventItem.E_SIGN_UP += apply.EO_ATTEND;
                }
            }
            const updateData = {
                EO_STATUS: apply.EO_STATUS,
                E_ID: apply.E_ID,
                E_SIGN_UP: eventItem.E_SIGN_UP
            };
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/evenUpdatePeople.php`, updateData,{
                    headers: {
                'Content-Type': 'application/json'
            }
                });
                console.log('更新成功：', response.data);
            } catch (error) {
                console.error('更新失敗：', error);
            }
            console.log('報名人數：', eventItem.E_SIGN_UP);
        },
        convertURL(url) {
            return `${import.meta.env.VITE_IMG_URL}/events/${url}`
        },
        getImageSrc(item) {
            return item.imagePreview || this.convertURL(item.E_IMG);
        }

    },
    computed: {
        filteredEvents() {
            const now = new Date();
            switch (this.currentFilter) {
                case 'ongoing': //報名中
                    return this.events.filter(event =>
                        now >= new Date(event.E_START) && now < new Date(event.E_DEADLINE) && event.E_SIGN_UP < event.E_MAX_ATTEND
                    );
                case 'upcoming'://即將開始
                    return this.events.filter(event =>
                        now < new Date(event.E_DATE) && now > new Date(event.E_DEADLINE)
                    );
                case 'ended'://活動結束
                    return this.events.filter(event =>
                        now >= new Date(event.E_DATE) && !(
                            now >= new Date(event.E_START) && now < new Date(event.E_DEADLINE) ||
                            now < new Date(event.E_START)
                        )
                    );
                default:
                    return this.events;
            }
        },
        ongoingCount() {
            const now = new Date();
            return this.events.filter(event =>
                now >= new Date(event.E_START) && now < new Date(event.E_DEADLINE) && event.E_SIGN_UP < event.E_MAX_ATTEND
            ).length;
        },
        upcomingCount() {
            const now = new Date();
            return this.events.filter(event =>
                now < new Date(event.E_DATE) && now > new Date(event.E_DEADLINE)
            ).length;
        }
    }
};
</script>
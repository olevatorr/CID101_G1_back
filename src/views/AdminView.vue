<script setup>
import { onMounted, ref, computed, reactive } from 'vue'
import axios from 'axios'

const adminList = ref([])
const filterBtn = ref(1)
const searchBar = ref(null)
const newAdmin = reactive({
    AD_ACCOUNT: '',
    AD_PSW: '',
    AD_NAME: '',
    AD_LEVEL: ''
})

onMounted(() => {
  fetchAdminData()
})

// 抓取所有管理員資料
const fetchAdminData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin.php`)
    if (!response.data.error) {
      adminList.value = response.data.admin
      // console.log(adminList.value);
    } else {
      alert(response.data.msg || '資料獲取失敗')
    }
  } catch (error) {
    alert('資料獲取失敗', error.message)
  }
}
// 新增
const adminAdd = async ()=> {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/adminAdd.php`, newAdmin)
        if(!response.data.error){
            fetchAdminData()
        } else {
            alert(response.data.msg || '新增失敗')
        }
    } catch (error){
        alert('新增失敗', error.message)
    }
}

// 停權
const suspensionSwitch = async (e, admin) => {
    try {
        e.target.checked === true? admin.AD_STATUS = true : admin.AD_STATUS = false
        const data = {
            'AD_ID': admin.AD_ID,
            'AD_STATUS': admin.AD_STATUS
        }
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/adminStatusUpdate.php`, data)
        if(!response.data.error){
            fetchAdminData()
        } else {
            alert(response.data.msg || '修改失敗')
        }
    } catch (error){
        alert('修改失敗', error.message)
    }
}

// 編輯
const adminUpdate = async (admin) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/adminUpdate.php`, admin)
        if(!response.data.error){
            fetchAdminData()
        } else {
            alert(response.data.msg || '修改失敗')
        }
    } catch (error){
        alert('修改失敗', error.message)
    }
}

// 刪除
const adminDelete = async (adminID) => {
    console.log(adminID);
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_URL}/adminDelete.php`, {
            params: { AD_ID: adminID }
        });
        if (!response.data.error) {
            fetchAdminData();
        } else {
            alert(response.data.msg || '刪除失敗');
        }
    } catch (error) {
        alert('刪除失敗: ' + (error.response?.data?.msg || error.message));
    }
};

// 計算停權
const suspensionCount = computed(()=> {
    return adminList.value.reduce((acc,cur) => {
        if (cur.AD_STATUS === 1){
            // console.log(acc++);
            acc++
            return acc
        }
        return acc
    }, 0)
})


// const help = async()=> {
//   try {
//     const response = await axios.post(`${import.meta.env.VITE_API_URL}/help.php`)
//     if (!response.data.error) {
//       alert('資料修改成功')
//       // console.log(adminList.value);
//     } else {
//       alert(response.data.msg || '資料獲取失敗')
//     }
//   } catch (error) {
//     alert('資料獲取失敗', error.message)
//   }
// }

const filterAdmin = (num) => {
    filterBtn.value = num
}

const showAdmin = computed(()=>{
    if(filterBtn.value === 1) {
        const filterList = adminList.value
        if(searchBar.value){
            let text = searchBar.value.toUpperCase()
            const searchFilterList = filterList.filter(admin => {
                return admin.AD_ACCOUNT.toUpperCase().includes(text) || admin.AD_NAME.toUpperCase().includes(text)
            })
            return searchFilterList
        }
        return  filterList
    } else {
        const filterList = adminList.value.filter(admin => admin.AD_STATUS === 1)
        if(searchBar.value){
            let text = searchBar.value.toUpperCase()
            const searchFilterList = filterList.filter(admin => {
                return admin.AD_ACCOUNT.toUpperCase().includes(text) || admin.AD_NAME.toUpperCase().includes(text)
            })
            return searchFilterList
        }
        return filterList
    }
})

</script>
<template>
  <div class="container">
    <p class="text-center fs-2">管理員列表</p>
    <!-- <button
              type="button"
              class="btn btn-primary ms-2"
              @click="help"
            >
              救救G1
            </button> -->
    <div class="row">
      <div class="modal-body col-4 px-3">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
            @click="filterAdmin(1)"
          />
          <label class="btn btn-outline-dark" for="btnradio1"> 全部 </label>
          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" @click="filterAdmin(0)" />
          <label class="btn btn-outline-dark" for="btnradio2">
            已停權
            <span class="badge text-bg-danger rounded-pill">{{suspensionCount}}</span>
          </label>
        </div>
        <button
              type="button"
              class="btn btn-primary ms-2"
              data-bs-toggle="modal"
              data-bs-target="#addAdmin"
            >
              新增管理員
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              id="addAdmin"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-md">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      新增管理員
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form>
                    <div class="modal-body">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">管理員名稱</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="newAdmin.AD_NAME"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">帳號</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="newAdmin.AD_ACCOUNT"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">密碼</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="newAdmin.AD_PSW"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-3" v-if="newAdmin.AD_ID !== 1">
                        <span class="input-group-text" id="basic-addon1">管理員等級</span>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="newAdmin.AD_LEVEL"
                        >
                          <option value="1">超級管理員</option>
                          <option value="2">一般管理員</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="adminAdd">
                        確認新增
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
      </div>
      <form class="d-flex col-8 w-25">
        <input class="form-control me-2" placeholder="Search" v-model="searchBar"/>
      </form>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">管理員編號#</th>
          <th scope="col">管理員名稱</th>
          <th scope="col">管理員帳號</th>
          <th scope="col">管理員等級</th>
          <th scope="col">管理員註冊日期</th>
          <th scope="col">管理員停權</th>
          <th scope="col">管理員編輯</th>
          <th scope="col">管理員刪除</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="align-middle" v-for="admin in showAdmin" :key="admin.AD_ID">
          <th scope="row">{{ admin.AD_ID }}</th>
          <td>{{ admin.AD_NAME }}</td>
          <td>{{ admin.AD_ACCOUNT }}</td>
          <td>{{ admin.AD_LEVEL === 1 ? '超級管理員' : '普通管理員' }}</td>
          <td>{{ admin.AD_DATE }}</td>
          <td>
            <div class="form-check form-switch" v-if="admin.AD_ID !== 1">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                :checked="admin.AD_STATUS"
                :id="'flexSwitchCheckChecked' + admin.AD_ID"
                @change="suspensionSwitch($event, admin)"
              />
              <label class="form-check-label" :for="'flexSwitchCheckChecked' + admin.AD_ID">停權</label>
            </div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="'#modifyAdmin' + admin.AD_ID"
            >
              編輯
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              :id="'modifyAdmin' + admin.AD_ID"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-md">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                      管理員編號 #{{ admin.AD_ID }}
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <form>
                    <div class="modal-body">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">管理員名稱</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="admin.AD_NAME"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">帳號</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="admin.AD_ACCOUNT"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">密碼</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="admin.AD_PSW"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="input-group mb-3" v-if="admin.AD_ID !== 1">
                        <span class="input-group-text" id="basic-addon1">管理員等級</span>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="admin.AD_LEVEL"
                        >
                          <option value="1">超級管理員</option>
                          <option value="2">一般管理員</option>
                        </select>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" @click="adminUpdate(admin)">
                        確認修改
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="'#delete' + admin.AD_ID"
              v-if="admin.AD_ID !== 1"
            >
              刪除
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              :id="'delete' + admin.AD_ID"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除管理員</h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <span class="badge text-bg-danger">請注意</span>
                    <p class="m-3 fw-bold fs-4 text-center">
                      您即將永久刪除這位管理員。
                      <br />
                      一旦刪除,該管理員將無法恢復。
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      返回
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="adminDelete(admin.AD_ID)">確認刪除</button>
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

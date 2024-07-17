<script setup>
import { onMounted, ref, reactive } from 'vue'
import axios from 'axios'

const RobotList = ref([])
const newRobot = reactive({
  R_QUESTION: '',
  R_ANSWER: ''
})

onMounted(() => {
  fetchRobotData()
})

// 抓取所有管理員資料
const fetchRobotData = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/robot.php`)
    if (!response.data.error) {
      RobotList.value = response.data.ROBOT
      // console.log(adminList.value);
    }
  } catch (error) {
    alert('資料獲取失敗', error.message)
  }
}
// 新增
const robotAdd = async () => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/robotAdd.php`, newRobot)
    if (!response.data.error) {
      fetchRobotData()
      newRobot.value.R_QUESTION = ''
      newRobot.value.R_ANSWER = ''
    } else {
      alert(response.data.msg || '新增失敗')
    }
  } catch (error) {
    alert('新增失敗', error.message)
  }
}


// 編輯
const robotUpdate = async (robot) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/robotUpdate.php`, robot)
    if (!response.data.error) {
      fetchRobotData()
    } else {
      alert(response.data.msg || '修改失敗')
    }
  } catch (error) {
    alert('修改失敗', error.message)
  }
}

// 刪除
const robotDelete = async (robotID) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/robotDelete.php`, {
      params: { R_ID: robotID }
    })
    if (!response.data.error) {
      fetchRobotData()
    } else {
      alert(response.data.msg || '刪除失敗')
    }
  } catch (error) {
    alert('刪除失敗: ' + (error.response?.data?.msg || error.message))
  }
}
</script>
<template>
  <div class="container">
    <p class="text-center fs-2">客服機器人</p>
    <div class="row">
      <div class="modal-body col-4">
        <button
          type="button"
          class="btn btn-primary ms-2"
          data-bs-toggle="modal"
          data-bs-target="#robot"
        >
          新增
        </button>
        <!-- Modal -->
        <div
          class="modal fade"
          id="robot"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">新增</h1>
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
                    <span class="input-group-text" id="basic-addon1">關鍵字</span>
                    <input
                      type="text"
                      class="form-control"
                      v-model="newRobot.R_QUESTION"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="col-12">
                    <label for="basic-url" class="form-label mt-3">回答</label>
                    <div class="form-floating">
                      <textarea
                        v-model="newRobot.R_ANSWER"
                        class="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style="height: 300px"
                      ></textarea>
                      <label for="floatingTextarea2">機器人回覆</label>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    取消
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    @click="robotAdd"
                  >
                    確認新增
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">編號#</th>
          <th scope="col">關鍵字</th>
          <th scope="col">回覆</th>
          <th scope="col">編輯</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr class="align-middle" v-for="robot in RobotList" :key="robot.R_ID">
          <th scope="row">{{ robot.R_ID }}</th>
          <td>{{ robot.R_QUESTION }}</td>
          <td>{{ robot.R_ANSWER }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="'#modifyAdmin' + robot.R_ID"
            >
              編輯
            </button>
            <!-- Modal -->
            <div
              class="modal fade"
              :id="'modifyAdmin' + robot.R_ID"
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
                      編號#{{ robot.R_ID }}
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
                        <span class="input-group-text" id="basic-addon1">關鍵字</span>
                        <input
                          type="text"
                          class="form-control"
                          v-model="robot.R_QUESTION"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <label for="basic-url" class="form-label mt-3">回答</label>
                      <div class="form-floating">
                        <textarea
                          v-model="robot.R_ANSWER"
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          style="height: 300px"
                        ></textarea>
                        <label for="floatingTextarea2">機器人回覆</label>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        取消
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        @click="robotUpdate(robot)"
                      >
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
              :data-bs-target="'#delete' + robot.R_ID"
            >
              刪除
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              :id="'delete' + robot.R_ID"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">刪除</h1>
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
                      您即將永久刪除這筆資料。
                      <br />
                      一旦刪除,該資料將無法恢復。
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                      返回
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      @click="robotDelete(robot.R_ID)"
                    >
                      確認刪除
                    </button>
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

<template>
  <div>
    <a-button type="primary" @click="showModal"> Add </a-button>
    <span>
      <a-button type="primary" :disabled="!hasSelected" @click="multipleDelete">
        Delete
      </a-button>
    </span>
    <a-modal v-model="visible" title="Basic Modal" @ok="handleOk">
      <a-input v-model="companyName" placeholder="회사명" />
      <a-input v-model="email" placeholder="이메일" />
      <a-input v-model="userName" placeholder="사용자 이름" />
      <a-input v-model="phoneNumber" placeholder="전화번호" />
      <input type="file" @change="previewImage" accept="image/*" />
      <div>
        <p>
          Progress: {{ uploadValue.toFixed() + "%" }}
          <progress id="progress" :value="uploadValue" max="100"></progress>
        </p>
      </div>
      <div v-if="imageData != null">
        <img class="preview" :src="picture" height="50px" />
        <br />
        <button @click="onUpload">Upload</button>
      </div>
    </a-modal>
    <a-table
      id="userData"
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :columns="columns"
      :data-source="data"
      bordered
    >
      <template
        v-for="col in ['cname', 'email', 'name', 'phone']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="(e) => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <span v-if="record.editable">
            <a @click="(e) => save(record.key)">Save</a>
            <a-popconfirm
              title="Sure to cancel?"
              @confirm="() => cancel(record.key)"
            >
              <a>Cancel</a>
            </a-popconfirm>
          </span>
          <span v-else>
            <a :disabled="editingKey !== ''" @click="() => edit(record.key)"
              >Edit</a
            >
          </span>
        </div>
      </template>

      <template slot="url" slot-scope="url, record">
        <img :src="url" height="50px" />
        <a-button v-if="url != null" @click="() => deleteImage(record.key)"
          >Delete</a-button
        >
        <div>
          <a-button
            v-if="url == null"
            type="primary"
            @click="() => imgUploadModal(record.key)"
          >
            upload Image
          </a-button>
          <a-modal
            v-model="imgModalVisible"
            title="Basic Modal"
            @ok="() => imgUpload(record.key)"
          >
            <input type="file" @change="previewImage" accept="image/*" />
            <div>
              <p>
                Progress: {{ uploadValue.toFixed() + "%" }}
                <progress
                  id="progress"
                  :value="uploadValue"
                  max="100"
                ></progress>
              </p>
            </div>
            <div v-if="imageData != null">
              <img class="preview" :src="picture" height="50px" />
              <br />
              <button @click="onUpload">Upload</button>
            </div>
          </a-modal>
        </div>
      </template></a-table
    >
    <a-button type="primary" @click="excelDownFunc"> Excel download </a-button>
  </div>
</template>

<script>
import { firestore, storage } from "firebase";
import XLSX from "xlsx";
import Button from "../../components/vuesax/button/Button.vue";

const columns = [
  {
    title: "Companyname",
    dataIndex: "cname",
    key: "cname",
    scopedSlots: { customRender: "cname" },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    scopedSlots: { customRender: "email" },
  },
  {
    title: "Username",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
    width: 150,
  },
  {
    title: "Userphone",
    dataIndex: "phone",
    key: "phone",
    scopedSlots: { customRender: "phone" },
  },
  {
    title: "Edit",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
  {
    title: "Image",
    dataIndex: "url",
    key: "url",
    scopedSlots: { customRender: "url" },
    width: 140,
  },
];

const db = firestore();

export default {
  components: { Button },
  data() {
    return {
      data: [],
      userName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      visible: false,
      imgModalVisible: false,
      columns,
      editingKey: "",
      editingData: "",
      selectedRowKeys: [],
      imageData: null,
      picture: null,
      uploadValue: 0,
      url: null,
    };
  },

  computed: {
    rows() {
      return this.items.length;
    },
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },

  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];

      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },

    showModal() {
      this.visible = true;
      this.userName = "";
    },

    handleOk() {
      const newData = [...this.data];
      const self = this;
      var _t = {
        name: this.userName,
        email: this.email,
        phone: this.phoneNumber,
        cname: this.companyName,
      };
      if (this.imageData != null) {
        _t.url = this.data.url;
        this.imageData = null;
        this.picture = null;
        this.uploadValue = 0;
      }

      db.collection("test")
        .add(_t)
        .then(function (doc) {
          self.data = newData.concat(_t);
          self.visible = false;
          _t["key"] = doc.id;
          self.userName = "";
          self.email = "";
          self.phoneNumber = "";
          self.companyName = "";
        });
    },

    imgUploadModal(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      console.log(target.key);
      this.imgModalVisible = true;
    },

    imgUpload(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      const sref = db.collection("test").doc(target.key);

      if (this.imageData != null) {
        console.log(key);
        target["url"] = this.data.url;
        this.imageData = this.data.url;
        sref.set(target);
        console.log(target.key);
        this.imageData = null;
        this.picture = null;
        this.uploadValue = 0;
        this.imgModalVisible = false;
      } else {
        alert("사진을 업로드하세요");
      }
      this.data = newData;
    },

    deleteImage(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      const sref = db.collection("test").doc(target.key);

      if (target) {
        target["url"] = null;
        this.imageData = null;
        sref.set(target);
        this.data = newData;
      }
    },

    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },

    multipleDelete() {
      const keyList = this.selectedRowKeys;
      for (var id in keyList) {
        var sref = db.collection("test").doc(keyList[id]);
        this.data = this.data.filter((item) => item.key !== keyList[id]);
        sref.delete();
      }
      this.selectedRowKeys = [];
      console.log(this.selectedRowKeys);
    },

    edit(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      const sref = db.collection("test").doc(target.key);
      this.editingKey = key;
      this.editingData = this.data;
      console.log(this.editingData);

      if (target) {
        sref.update(target);

        target.editable = true;
        this.editingKey = "";
      }
    },

    save(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      const sref = db.collection("test").doc(target.key);

      if (target) {
        delete target.editable;
        this.data = newData;
        sref.set(target);
      }
      this.editingKey = "";
    },

    cancel(key) {
      console.log(this.editingData);

      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      const sref = db.collection("test").doc(target.key);
      this.editingKey = "";
      if (target) {
        target.editable = false;
      }
    },

    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture = null;
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      const storageRef = storage()
        .ref(
          `${year}${month}${date}${hours}${minutes}${seconds}_${this.imageData.name}`
        )
        .put(this.imageData);

      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            this.data["url"] = url;
          });
        }
      );
    },

    excelDownFunc() {
      var excelData = XLSX.utils.table_to_sheet(
        document.getElementById("userData")
      );
      var workBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workBook, excelData, "가입자 현황");
      XLSX.writeFile(workBook, "account_statistics.xlsx");
    },
  },

  mounted() {
    const self = this;
    this.data = [];

    db.collection("test")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var _t = doc.data();
          _t["key"] = doc.id;
          self.data.push(_t);
        });
      });
  },
};
</script>
<style>
.editable-row-operations a {
  margin-right: 8px;
}
</style>

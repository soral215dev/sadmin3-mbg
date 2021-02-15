<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template
      v-for="col in ['cname', 'email', 'uname', 'phone']"
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
    <template slot="delete" slot-scope="text, record">
      <a @click="() => onDelete(record.key)">Delete</a>
    </template>
  </a-table>
</template>
<script>
import firebase from "firebase/app";
import "firebase/database";

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
    dataIndex: "uname",
    key: "uname",
    scopedSlots: { customRender: "uname" },
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
    title: "Delete",
    dataIndex: "delete",
    key: "delete",
    scopedSlots: { customRender: "delete" },
    width: 140,
  },
];

const data = [];
const db = firebase.database().ref("bbs").limitToLast(10);

export default {
  data() {
    return {
      data,
      columns,
      editingKey: "",
    };
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

    onDelete(key) {
      // eslint-disable-next-line prefer-template
      const sref = firebase.database().ref("bbs/" + key + "/");
      sref.remove().then(function () {
        location.reload();
      });
    },

    edit(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];

      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
        this.editingKey = "";
      }
    },

    save(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];
      // eslint-disable-next-line prefer-template
      const sref = firebase.database().ref("bbs/" + key + "/");

      if (target) {
        delete target.editable;
        this.data = newData;
        sref.update(target);
      }
      this.editingKey = "";
    },

    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter((item) => key === item.key)[0];

      if (target) {
        location.reload();
      }
    },
  },

  mounted() {
    const self = this;
    this.data = [];
    db.once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        const _t = {
          key: childSnapshot.key,
          uname: childSnapshot.val().uname,
          email: childSnapshot.val().email,
          phone: childSnapshot.val().phone,
          cname: childSnapshot.val().cname,
        };
        self.data.push(_t);
      });
    });
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>

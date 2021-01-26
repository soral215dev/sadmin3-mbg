<template>
<a-table :columns="columns" :data-source="data" bordered>
    <template
      v-for="col in ['name', 'companyname', 'email', 'userName', 'userPhone' ]"
      :slot="col"
      slot-scope="text, record"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="e => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>
    <template slot="operation" slot-scope="text, record">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="e => save(record.key)">Save</a>
          <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)">Edit</a>
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
    title: 'Companyname',
    dataIndex: 'companyname',
    key: 'companyname',
    scopedSlots: { customRender: 'companyname' }
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    scopedSlots: { customRender: 'email' }
  },
  {
    title: 'Username',
    dataIndex: 'userName',
    key: 'userName',
    scopedSlots: { customRender: 'userName' },
    width: 150
  },
  {
    title: 'Userphone',
    dataIndex: 'userPhone',
    key: 'userPhone',
    scopedSlots: { customRender: 'userPhone' }
  },
   {
    title: 'Edit',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  },
  { 
    title: 'Delete', 
    dataIndex: 'delete', 
    key: 'delete', 
    scopedSlots: { customRender: 'delete' }, 
    width: 140
  }

];

const data = [];
const db = firebase.database().ref('user').limitToLast(10);

export default {
  data() {
   this.cacheData = data.map(item => ({ ...item }));

    return {
      data,
      columns,
      editingKey: ''

    };
  },
  
 methods: {

   handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];

      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },

   onDelete(key) {
     // eslint-disable-next-line prefer-template
     const sref = firebase.database().ref('user/' + key + "/");
          sref
            .remove()
            .then(function() {
              location.reload()            
              })
            .catch(function(error) {
              // eslint-disable-next-line prefer-template
              console.log("Remove failed: " + error.message);
            });
    },

   edit(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];

      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
        this.editingKey = '';
      }
    },

   save(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];
      // eslint-disable-next-line prefer-template
      const sref = firebase.database().ref('user/' + key + "/");

      if (target) {
        delete target.editable;
        this.data = newData;
        sref.update(target)
      }
      this.editingKey = '';
    },

    cancel(key) {
      const newData = [...this.data];
      const target = newData.filter(item => key === item.key)[0];

      if (target) {
              location.reload()            
      }
    }

 },
 
 mounted () {  
  const self = this;
  db.once('value', function(snapshot) {
    snapshot.forEach( 
      function(childSnapshot) {

      const _t = {
        key : childSnapshot.key,
        userName : childSnapshot.val().userName,
        email : childSnapshot.val().email,
        userPhone : childSnapshot.val().userPhone,
        companyname : childSnapshot.val().companyname
        }
        self.data.push(_t)
        });
    });
}
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>

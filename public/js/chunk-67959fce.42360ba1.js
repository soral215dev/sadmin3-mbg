(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67959fce"],{"477d":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"page-user-list"}},[r("vx-card",{ref:"filterCard",staticClass:"user-list-filters mb-8",attrs:{title:"Filters",actionButtons:""},on:{refresh:e.resetColFilters,remove:e.resetColFilters}},[r("div",{staticClass:"vx-row"},[r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Role")]),r("v-select",{staticClass:"mb-4 md:mb-0",attrs:{options:e.roleOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.roleFilter,callback:function(t){e.roleFilter=t},expression:"roleFilter"}})],1),r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Status")]),r("v-select",{staticClass:"mb-4 md:mb-0",attrs:{options:e.statusOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.statusFilter,callback:function(t){e.statusFilter=t},expression:"statusFilter"}})],1),r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Verified")]),r("v-select",{staticClass:"mb-4 sm:mb-0",attrs:{options:e.isVerifiedOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.isVerifiedFilter,callback:function(t){e.isVerifiedFilter=t},expression:"isVerifiedFilter"}})],1),r("div",{staticClass:"vx-col md:w-1/4 sm:w-1/2 w-full"},[r("label",{staticClass:"text-sm opacity-75"},[e._v("Department")]),r("v-select",{attrs:{options:e.departmentOptions,clearable:!1,dir:e.$vs.rtl?"rtl":"ltr"},model:{value:e.departmentFilter,callback:function(t){e.departmentFilter=t},expression:"departmentFilter"}})],1)])]),r("div",{staticClass:"vx-card p-6"},[r("div",{staticClass:"flex flex-wrap items-center"},[r("div",{staticClass:"flex-grow"},[r("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[r("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[r("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.paginationPageSize-(e.paginationPageSize-1))+" - "+e._s(e.usersData.length-e.currentPage*e.paginationPageSize>0?e.currentPage*e.paginationPageSize:e.usersData.length)+" of "+e._s(e.usersData.length))]),r("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),r("vs-dropdown-menu",[r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(10)}}},[r("span",[e._v("10")])]),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(20)}}},[r("span",[e._v("20")])]),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(25)}}},[r("span",[e._v("25")])]),r("vs-dropdown-item",{on:{click:function(t){return e.gridApi.paginationSetPageSize(30)}}},[r("span",[e._v("30")])])],1)],1)],1),r("vs-input",{staticClass:"sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",attrs:{placeholder:"Search..."},on:{input:e.updateSearchQuery},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),r("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[r("div",{staticClass:"p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32"},[r("span",{staticClass:"mr-2 leading-none"},[e._v("Actions")]),r("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),r("vs-dropdown-menu",[r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),r("span",[e._v("Delete")])],1)]),r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"ArchiveIcon",svgClasses:"h-4 w-4"}}),r("span",[e._v("Archive")])],1)]),r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),r("span",[e._v("Print")])],1)]),r("vs-dropdown-item",[r("span",{staticClass:"flex items-center"},[r("feather-icon",{staticClass:"mr-2",attrs:{icon:"SaveIcon",svgClasses:"h-4 w-4"}}),r("span",[e._v("CSV")])],1)])],1)],1)],1),r("ag-grid-vue",{ref:"agGridTable",staticClass:"ag-theme-material w-100 my-4 ag-grid-table",attrs:{components:e.components,gridOptions:e.gridOptions,columnDefs:e.columnDefs,defaultColDef:e.defaultColDef,rowData:e.usersData,rowSelection:"multiple",colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.paginationPageSize,suppressPaginationPanel:!0,enableRtl:e.$vs.rtl}}),r("vs-pagination",{attrs:{total:e.totalPages,max:7},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},i=[],s=(r("c5f6"),r("401be")),l=(r("4e06"),r("4a7a")),n=r.n(l),o=r("4faa"),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex items-center"},[r("vs-avatar",{staticClass:"flex-shrink-0 mr-2",attrs:{src:e.params.data.avatar,size:"30px"},on:{click:function(t){return e.$router.push(e.url)}}}),r("router-link",{staticClass:"text-inherit hover:text-primary",attrs:{to:e.url},on:{click:function(e){e.stopPropagation(),e.preventDefault()}}},[e._v(e._s(e.params.value))])],1)},u=[],d={name:"CellRendererLink",computed:{url:function(){return"/apps/user/user-view/268"}}},f=d,m=r("2877"),p=Object(m["a"])(f,c,u,!1,null,null,null),v=p.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vs-chip",{staticClass:"ag-grid-cell-chip",attrs:{color:e.chipColor(e.params.value)}},[r("span",[e._v(e._s(e.params.value))])])},g=[],C={name:"CellRendererStatus",computed:{chipColor:function(){return function(e){return"active"===e?"success":"blocked"===e?"danger":"deactivated"===e?"warning":"primary"}}}},w=C,b=(r("5fe9"),Object(m["a"])(w,h,g,!1,null,null,null)),x=b.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("feather-icon",{attrs:{icon:"CircleIcon",svgClasses:["fill-current h-4 w-4",e.textColor]}})},R=[],S={name:"CellRendererVerified",computed:{textColor:function(){return this.params.value?"text-primary":"text-grey"}}},A=S,k=Object(m["a"])(A,F,R,!1,null,null,null),_=k.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{style:{direction:e.$vs.rtl?"rtl":"ltr"}},[r("feather-icon",{attrs:{icon:"Edit3Icon",svgClasses:"h-5 w-5 mr-4 hover:text-primary cursor-pointer"},on:{click:e.editRecord}}),r("feather-icon",{attrs:{icon:"Trash2Icon",svgClasses:"h-5 w-5 hover:text-danger cursor-pointer"},on:{click:e.confirmDeleteRecord}})],1)},D=[],P={name:"CellRendererActions",methods:{editRecord:function(){this.$router.push("/apps/user/user-edit/".concat(268)).catch((function(){}))},confirmDeleteRecord:function(){this.$vs.dialog({type:"confirm",color:"danger",title:"Confirm Delete",text:'You are about to delete "'.concat(this.params.data.username,'"'),accept:this.deleteRecord,acceptText:"Delete"})},deleteRecord:function(){this.showDeleteSuccess()},showDeleteSuccess:function(){this.$vs.notify({color:"success",title:"User Deleted",text:"The selected user was successfully deleted"})}}},O=P,$=Object(m["a"])(O,y,D,!1,null,null,null),V=$.exports,E={components:{AgGridVue:s["AgGridVue"],vSelect:n.a,CellRendererLink:v,CellRendererStatus:x,CellRendererVerified:_,CellRendererActions:V},data:function(){return{roleFilter:{label:"All",value:"all"},roleOptions:[{label:"All",value:"all"},{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Staff",value:"staff"}],statusFilter:{label:"All",value:"all"},statusOptions:[{label:"All",value:"all"},{label:"Active",value:"active"},{label:"Deactivated",value:"deactivated"},{label:"Blocked",value:"blocked"}],isVerifiedFilter:{label:"All",value:"all"},isVerifiedOptions:[{label:"All",value:"all"},{label:"Yes",value:"yes"},{label:"No",value:"no"}],departmentFilter:{label:"All",value:"all"},departmentOptions:[{label:"All",value:"all"},{label:"Sales",value:"sales"},{label:"Development",value:"development"},{label:"Management",value:"management"}],searchQuery:"",gridApi:null,gridOptions:{},defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"ID",field:"id",width:125,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Username",field:"username",filter:!0,width:210,cellRendererFramework:"CellRendererLink"},{headerName:"Email",field:"email",filter:!0,width:225},{headerName:"Name",field:"name",filter:!0,width:200},{headerName:"Country",field:"country",filter:!0,width:150},{headerName:"Role",field:"role",filter:!0,width:150},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:"CellRendererStatus"},{headerName:"Verified",field:"is_verified",filter:!0,width:125,cellRendererFramework:"CellRendererVerified",cellClass:"text-center"},{headerName:"Department",field:"department",filter:!0,width:150},{headerName:"Actions",field:"transactions",width:150,cellRendererFramework:"CellRendererActions"}],components:{CellRendererLink:v,CellRendererStatus:x,CellRendererVerified:_,CellRendererActions:V}}},watch:{roleFilter:function(e){this.setColumnFilter("role",e.value)},statusFilter:function(e){this.setColumnFilter("status",e.value)},isVerifiedFilter:function(e){var t="all"===e.value?"all":"yes"===e.value?"true":"false";this.setColumnFilter("is_verified",t)},departmentFilter:function(e){this.setColumnFilter("department",e.value)}},computed:{usersData:function(){return this.$store.state.userManagement.users},paginationPageSize:function(){return this.gridApi?this.gridApi.paginationGetPageSize():10},totalPages:function(){return this.gridApi?this.gridApi.paginationGetTotalPages():0},currentPage:{get:function(){return this.gridApi?this.gridApi.paginationGetCurrentPage()+1:1},set:function(e){this.gridApi.paginationGoToPage(e-1)}}},methods:{setColumnFilter:function(e,t){var r=this.gridApi.getFilterInstance(e),a=null;"all"!==t&&(a={type:"equals",filter:t}),r.setModel(a),this.gridApi.onFilterChanged()},resetColFilters:function(){this.gridApi.setFilterModel(null),this.gridApi.onFilterChanged(),this.roleFilter=this.statusFilter=this.isVerifiedFilter=this.departmentFilter={label:"All",value:"all"},this.$refs.filterCard.removeRefreshAnimation()},updateSearchQuery:function(e){this.gridApi.setQuickFilter(e)}},mounted:function(){if(this.gridApi=this.gridOptions.api,this.$vs.rtl){var e=this.$refs.agGridTable.$el.querySelector(".ag-header-container");e.style.left="-".concat(String(Number(e.style.transform.slice(11,-3))+9),"px")}},created:function(){o["a"].isRegistered||(this.$store.registerModule("userManagement",o["a"]),o["a"].isRegistered=!0),this.$store.dispatch("userManagement/fetchUsers").catch((function(e){console.error(e)}))}},z=E,N=(r("671d"),Object(m["a"])(z,a,i,!1,null,null,null));t["default"]=N.exports},"4faa":function(e,t,r){"use strict";var a={users:[]},i=(r("20d6"),{SET_USERS:function(e,t){e.users=t},REMOVE_RECORD:function(e,t){var r=e.users.findIndex((function(e){return e.id===t}));e.users.splice(r,1)}}),s=r("bb36"),l={fetchUsers:function(e){var t=e.commit;return new Promise((function(e,r){s["a"].get("/api/user-management/users").then((function(r){t("SET_USERS",r.data),e(r)})).catch((function(e){r(e)}))}))},fetchUser:function(e,t){return new Promise((function(e,r){s["a"].get("/api/user-management/users/".concat(t)).then((function(t){e(t)})).catch((function(e){r(e)}))}))},removeRecord:function(e,t){var r=e.commit;return new Promise((function(e,a){s["a"].delete("/api/user-management/users/".concat(t)).then((function(a){r("REMOVE_RECORD",t),e(a)})).catch((function(e){a(e)}))}))}},n={};t["a"]={isRegistered:!1,namespaced:!0,state:a,mutations:i,actions:l,getters:n}},5687:function(e,t,r){},"5fe9":function(e,t,r){"use strict";r("acf6")},"671d":function(e,t,r){"use strict";r("5687")},acf6:function(e,t,r){}}]);
//# sourceMappingURL=chunk-67959fce.42360ba1.js.map
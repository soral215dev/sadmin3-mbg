(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21063d"],{b84e:function(e,s,i){"use strict";i.r(s);var t=function(){var e=this,s=e.$createElement,i=e._self._c||s;return i("div",{attrs:{id:"access-conttrol-editor"}},[i("vx-card",[i("p",[e._v("Your current role is "),i("strong",[e._v(e._s(e.$acl.get[0]))]),e._v(".")]),i("div",{staticClass:"demo-alignment mb-base"},[i("vs-radio",{attrs:{"vs-value":"editor"},model:{value:e.userRole,callback:function(s){e.userRole=s},expression:"userRole"}},[e._v("Editor")]),i("vs-radio",{attrs:{"vs-value":"admin"},model:{value:e.userRole,callback:function(s){e.userRole=s},expression:"userRole"}},[e._v("Admin")])],1),i("vx-card",{attrs:{title:"Buttons","no-shadow":"","card-border":"","code-toggler":""}},[i("vs-button",{directives:[{name:"show",rawName:"v-show",value:e.$acl.check("editor"),expression:"$acl.check('editor')"}],staticClass:"mr-4 mb-2"},[e._v("Editor And Admin")]),i("vs-button",{directives:[{name:"show",rawName:"v-show",value:e.$acl.check("admin"),expression:"$acl.check('admin')"}]},[e._v("Only Admin")]),i("template",{slot:"codeContainer"},[e._v('\n<vs-button v-show="$acl.check(\'editor\')" class="mr-4">Editor And Admin</vs-button>\n<vs-button v-show="$acl.check(\'admin\')">Only Admin</vs-button>\n                ')])],2),i("vx-card",{staticClass:"mt-base",attrs:{title:"Collapse","no-shadow":"","card-border":"","code-toggler":""}},[i("div",{attrs:{slot:"no-body"},slot:"no-body"},[i("vs-collapse",[i("vs-collapse-item",[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("Article 1")]),e._v("\n\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus eros tortor, non fringilla lectus cursus et. Fusce vel nisi ante. Aliquam sit amet lectus pharetra, luctus mi sed, aliquet felis. Mauris a tortor viverra, ornare tellus in, consectetur leo.\n                    "),i("br"),i("br"),e._v("\n                    Etiam nec nunc nec nisl luctus tincidunt efficitur vitae elit. Vestibulum iaculis nibh commodo neque ultrices lobortis. Cras magna massa, pretium vitae mattis varius, pharetra nec massa. Aliquam ac ex enim. Quisque consequat dui libero, vel blandit lorem porttitor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam sed lobortis nisl, quis eleifend metus.\n                  ")]),i("vs-collapse-item",[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("Article 2")]),e._v("\n\n                    Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac, rutrum vitae sapien. Donec a sapien id erat dapibus dignissim sodales in est. Donec gravida dapibus sapien at sollicitudin. Maecenas iaculis quam ex,\n                    "),i("br"),i("br"),e._v("\n                    eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend. Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur placerat enim. Integer condimentum tristique ante et ullamcorper. Mauris placerat pretium ex. Nam aliquam sed tortor sit amet\n                    "),i("br"),i("br"),e._v("\n                    efficitur. Mauris quis faucibus nulla. Pellentesque egestas non ipsum vel maximus.\n                  ")]),i("vs-collapse-item",{directives:[{name:"show",rawName:"v-show",value:e.$acl.check("admin"),expression:"$acl.check('admin')"}]},[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("Article 3 - Only Admin")]),e._v("\n\n                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu\n                  ")]),i("vs-collapse-item",[i("div",{attrs:{slot:"header"},slot:"header"},[e._v("Article 4")]),e._v("\n\n                    Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.\n                  ")])],1),i("template",{slot:"codeContainer"},[e._v('\n<vs-collapse>\n    <vs-collapse-item>\n        <div slot="header">\n            Article 1\n        </div>\n        Lorem....metus.\n    </vs-collapse-item>\n    <vs-collapse-item>\n        <div slot="header">\n            Article 2\n        </div>\n        Nunc....maximus.\n    </vs-collapse-item>\n    <vs-collapse-item v-show="$acl.check(\'admin\')">\n        <div slot="header">\n            Article 3 - Only Admin\n        </div>\n        Suspendisse....eu\n    </vs-collapse-item>\n    <vs-collapse-item>\n        <div slot="header">\n            Article 4\n        </div>\n        Suspendisse....finibus.\n    </vs-collapse-item>\n</vs-collapse>\n                ')])],2)]),i("vx-card",{staticClass:"mt-base",attrs:{title:"Route Protection","no-shadow":"","card-border":"","code-toggler":""}},[i("p",[e._v("You can add "),i("strong",[e._v("route protection")]),e._v(" using vue-acl. Only admin can visit eCommerce Dashboard.")]),i("vs-button",{staticClass:"mt-4",attrs:{to:"/dashboard/ecommerce",color:e.$acl.check("admin")?"primary":"danger"}},[e._v("visit")])],1)],1)],1)},a=[],l={data:function(){return{userRole:this.$acl.get[0]}},watch:{userRole:function(e){this.$store.dispatch("updateUserRole",{aclChangeRole:this.$acl.change,userRole:e})}}},n=l,r=i("2877"),o=Object(r["a"])(n,t,a,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d21063d.faa87b77.js.map
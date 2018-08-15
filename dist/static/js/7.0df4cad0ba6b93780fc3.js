webpackJsonp([7],{fJX3:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={name:"tagfactory-examples",data:function(){return{tags:["tag1","tag2","tag3"],associations:["abcd","efgh","1234"],tagMatcher:function(t){return/\d/g.test(t)},loading:!1}},watch:{tags:function(t){console.log(t)}},methods:{inputChange:function(t){var a=this;this.loading=!0,setTimeout(function(){a.associations.push(t),a.loading=!1},2e3)}},mounted:function(){this.tags=[]}},v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"page"},[s("au-panel",{staticClass:"section",attrs:{title:"组件描述"}},[s("p",{staticClass:"paragraph"},[t._v("\n      标签工厂组件，用于批量添加标签。\n    ")]),t._v(" "),s("div",{staticClass:"component-example"},[s("au-tagfactory",{attrs:{associations:t.associations,loading:t.loading,label:"打标签"},on:{"input-change":t.inputChange},model:{value:t.tags,callback:function(a){t.tags=a},expression:"tags"}})],1)]),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Props"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("必填")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认")]),t._v(" "),s("th",[t._v("可选")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("label")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            提示文字\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("label-width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td"),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("合法的css宽度值，仅支持px单位")]),t._v(" "),s("td",[t._v("\n            输入框前的提示文字的宽度"),s("br"),t._v("\n            仅inline为true时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("tips")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -String\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            需要显示的解释信息"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("inline")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否横向放置label\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("full-width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            是否占满父元素宽度"),s("br"),t._v("\n            仅在inline为false时有效\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            合法的css长度值\n          ")]),t._v(" "),s("td",[t._v("\n            宽度"),s("br"),t._v("\n            仅支持px单位"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("min-width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            合法的css长度值\n          ")]),t._v(" "),s("td",[t._v("\n            最小宽度"),s("br"),t._v("\n            仅支持px单位"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("max-width")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            合法的css长度值\n          ")]),t._v(" "),s("td",[t._v("\n            最大宽度"),s("br"),t._v("\n            仅支持px单位"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("tags")]),t._v(" "),s("td",[s("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -String\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            tag列表\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("tagSize")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("mini")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("large")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("normal")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("small")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("mini")])])]),t._v(" "),s("td",[t._v("\n            标签尺寸\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("associations")]),t._v(" "),s("td",[s("au-icon",{staticClass:"au-theme-color--success",attrs:{type:"check"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -String\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            关联列表\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("tagMatcher")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            tag适配器函数"),s("br"),t._v("\n            接受一个字符串参数表示当期输入或选中的关联"),s("br"),t._v("\n            返回true和false来决定是否满足适配"),s("br"),t._v("\n            如果需要异步适配，则返回一个promise对象，在其resolve()函数中传递结果\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("canRemove")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("标签是否可删除")])]),t._v(" "),s("tr",[s("td",[t._v("canCreate")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("是否可以通过输入直接创建标签")])]),t._v(" "),s("tr",[s("td",[t._v("repeat")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("标签是否可重复")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            占位字符\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("warning")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("是否显示警告样式")])]),t._v(" "),s("tr",[s("td",[t._v("warnings")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("\n            Array"),s("br"),t._v("\n            -String\n          ")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            需要显示的警告信息"),s("br"),t._v("\n            如果给定了需要显示的警告信息，则组件将不执行validators中提供的验证器，而只是简单显示给定的警告"),s("br"),t._v("\n            不管warning选项是true还是false，只要给定了警告信息就一定会显示警告样式"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("placeholder")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("''")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("td",[t._v("\n            占位字符\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("disabled")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("禁用")])]),t._v(" "),s("tr",[s("td",[t._v("loading")]),t._v(" "),s("td",[s("au-icon",{attrs:{type:"times"}})],1),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("true")]),t._v(" "),s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("false")])])]),t._v(" "),s("td",[t._v("\n            加载状态\n          ")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Slots"}},[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Events"}},[s("au-table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("@change")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("tags")])])]),t._v(" "),s("td",[t._v("\n            新增或删除标签后触发"),s("br"),t._v("\n            处理函数接受一个含有当前所有tag的字符串数组\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("@input-change")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("value")])])]),t._v(" "),s("td",[t._v("\n            输入框内容修改后触发"),s("br"),t._v("\n            处理函数接受一个表示新值的字符串参数\n          ")])]),t._v(" "),s("tr",[s("td",[t._v("@focus")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("tags")])])]),t._v(" "),s("td",[t._v("\n            聚焦事件"),s("br")])]),t._v(" "),s("tr",[s("td",[t._v("@focus")]),t._v(" "),s("td",[s("ol",{staticClass:"option-list"},[s("li",{staticClass:"au-theme-border-color--base-8"},[t._v("tags")])])]),t._v(" "),s("td",[t._v("\n            失焦事件"),s("br")])])])])],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"Methods"}},[s("au-icon",{attrs:{type:"minus"}})],1),t._v(" "),s("au-panel",{staticClass:"section",attrs:{title:"使用示例"}},[s("h4",{staticClass:"title-1"},[t._v("基础用例")]),t._v(" "),s("code-h",{attrs:{lang:"html",content:'\n      <au-tagfactory\n        v-model="tags"\n        :associations="associations"\n        @input-change="inputChange"\n        :loading="loading"\n        label="打标签"/>\n    '}}),t._v(" "),s("code-h",{attrs:{lang:"js"}},[t._v("\n      export default {\n        data () {\n          return {\n            tags: [\n              'tag1',\n              'tag2',\n              'tag3'\n            ],\n            associations: [\n              'abcd',\n              'efgh',\n              '1234'\n            ],\n            tagMatcher (v) {\n              return /\\d/g.test(v)\n            },\n            loading: false\n          }\n        },\n        watch: {\n          tags (v) {\n            console.log(v)\n          }\n        },\n        methods: {\n          inputChange (v) {\n            this.loading = true\n            setTimeout(() => {\n              this.associations.push(v)\n              this.loading = false\n            }, 2000)\n          }\n        }\n      }\n    ")])],1)],1)},staticRenderFns:[]},n=s("VU/8")(e,v,!1,null,null,null);a.default=n.exports}});
//# sourceMappingURL=7.0df4cad0ba6b93780fc3.js.map
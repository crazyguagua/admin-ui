<template>
  <div class="page">
    <au-panel class="section" title="组件描述">
      <p class="paragraph">
        开关组件
      </p>
      <!-- 组件示例 -->
      <div class="component-example">
        <au-switch v-model="value" color="default" :label="value ? '开' : '关'"></au-switch><br/><br/>
        <au-switch
          v-model="shadowValue"
          color="primary"
          :label="shadowValue ? '开' : '关'"
          :inline="true"
          :validators="[{
            validator (v) { return v },
            warning: '必须打开'
          }]"
          warning
          :tips="[
            '注释1',
            '注释2，注释2',
            '注释1，注释2，注释3',
          ]"></au-switch>
      </div>
      <!-- 组件示例 -->
    </au-panel>
    <au-panel class="section" title="Props">
      <au-table>
        <thead>
          <tr>
            <th>字段</th>
            <th>必填</th>
            <th>类型</th>
            <th>默认</th>
            <th>可选</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td>String</td>
            <td><au-icon type="minus"></au-icon></td>
            <td><au-icon type="minus"></au-icon></td>
            <td>
              提示文字
            </td>
          </tr>
          <tr>
            <td>label-width</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td></td>
            <td><au-icon type="minus"></au-icon></td>
            <td>合法的css宽度值，仅支持px单位</td>
            <td>
              提示文字的宽度<br>
              仅inline为true时有效
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td>String</td>
            <td>normal</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">large</li>
                <li class="au-theme-border-color--base-8">normal</li>
                <li class="au-theme-border-color--base-8">small</li>
                <li class="au-theme-border-color--base-8">mini</li>
              </ol>
            </td>
            <td>
              开关尺寸
            </td>
          </tr>
          <tr>
            <td>tips</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td>
              Array<br>
              -String
            </td>
            <td><au-icon type="minus"></au-icon></td>
            <td><au-icon type="minus"></au-icon></td>
            <td>
              需要显示的解释信息<br>
            </td>
          </tr>
          <tr>
            <td>inline</td>
            <td>
              <au-icon type="times"></au-icon>
            </td>
            <td>Boolean</td>
            <td>true</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">true</li>
                <li class="au-theme-border-color--base-8">false</li>
              </ol>
            </td>
            <td>
              是否横向放置label
            </td>
          </tr>
          <tr>
            <td>value</td>
            <td>
              <au-icon type="check" class="au-theme-color--success"></au-icon>
            </td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">true</li>
                <li class="au-theme-border-color--base-8">false</li>
              </ol>
            </td>
            <td>值</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>
              <au-icon type="times"></au-icon>
            </td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">true</li>
                <li class="au-theme-border-color--base-8">false</li>
              </ol>
            </td>
            <td>禁用</td>
          </tr>
          <tr>
            <td>color</td>
            <td>
              <au-icon type="times"></au-icon>
            </td>
            <td>String</td>
            <td>success</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">default</li>
                <li class="au-theme-border-color--base-8">primary</li>
                <li class="au-theme-border-color--base-8">danger</li>
                <li class="au-theme-border-color--base-8">warning</li>
                <li class="au-theme-border-color--base-8">info</li>
                <li class="au-theme-border-color--base-8">success</li>
              </ol>
            </td>
            <td>颜色</td>
          </tr>
          <tr>
            <td>readonly</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td>Boolean</td>
            <td>false</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">true</li>
                <li class="au-theme-border-color--base-8">false</li>
              </ol>
            </td>
            <td>只读</td>
          </tr>
          <tr>
            <td>warnings</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td>
              Array<br>
              -String
            </td>
            <td><au-icon type="minus"></au-icon></td>
            <td><au-icon type="minus"></au-icon></td>
            <td>
              需要显示的警告信息<br>
              如果给定了需要显示的警告信息，则组件将不执行validators中提供的验证器，而只是简单显示给定的警告<br>
            </td>
          </tr>
          <tr>
            <td>validators</td>
            <td>
              <!-- <au-icon type="check" class="au-theme-color--success"></au-icon> -->
              <au-icon type="times"></au-icon>
            </td>
            <td>
              Array<br>
              -Object
            </td>
            <td><au-icon type="minus"></au-icon></td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">validator: Function，接受一个表示当前值的参数value</li>
                <li class="au-theme-border-color--base-8">warning: String，当验证失败时需要显示的警告信息</li>
                <li class="au-theme-border-color--base-8">async: Boolean，是否为异步验证，默认为false</li>
              </ol>
            </td>
            <td>
              验证器配置<br>
              同步验证时，验证器函数只需要返回Booean类型的验证结果即可<br>
              异步验证时，需要额外配置async为true<br>
              同时，验证器函数需要返回一个promise，并在resolve函数中传递Boolean类型的验证结果给验证器<br>
              既有同步验证，又有异步验证时，验证器首先执行同步验证<br>
              只有通过了全部的同步验证时，才会执行异步验证<br>
            </td>
          </tr>
        </tbody>
      </au-table>
    </au-panel>
    <au-panel class="section" title="Slots">
      <au-icon type="minus"></au-icon>
    </au-panel>
    <au-panel class="section" title="Events">
      <au-table>
        <thead>
          <tr>
            <th>名称</th>
            <th>参数</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr>
            <td>@input</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">value</li>
                <li class="au-theme-border-color--base-8">event</li>
              </ol>
            </td>
            <td>
              输入事件<br>
              参数value表示当前值<br>
              参数event表示事件对象
            </td>
          </tr> -->
          <tr>
            <td>@change</td>
            <td>
              <ol class="option-list">
                <li class="au-theme-border-color--base-8">value</li>
              </ol>
            </td>
            <td>
              值改变事件<br>
              参数value表示当前值
            </td>
          </tr>
        </tbody>
      </au-table>
      <!-- <au-icon type="minus"></au-icon> -->
    </au-panel>
    <au-panel class="section" title="Methods">
      <au-icon type="minus"></au-icon>
    </au-panel>
    <au-panel class="section" title="使用示例">
      <h4 class="title-1">基础用例</h4>
      <code-h lang="html" content='
        <au-switch v-model="value" color="success" :label="value ? &#x27;开&#x27; : &#x27;关&#x27;"></au-switch>
        <au-switch v-model="shadowValue" color="danger" :label="shadowValue ? &#x27;开&#x27; : &#x27;关&#x27;"></au-switch>
      '></code-h>
      <code-h lang="js">
        export default {
          name: 'switch-examples',
          data () {
            return {
              value: true
            }
          },
          computed: {
            shadowValue: {
              get: function () {
                return !this.value
              },
              set: function (v) {
                this.value = !v
              }
            }
          }
        }
      </code-h>
    </au-panel>
  </div>
</template>
<script>
export default {
  name: 'switch-examples',
  data () {
    return {
      value: true
    }
  },
  computed: {
    shadowValue: {
      get: function () {
        return !this.value
      },
      set: function (v) {
        this.value = !v
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../../../style/vars';
  .au-modal-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
  }
  .au-modal-container:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .75;
  }
  .au-modal {
    position: relative;
    top: 50%;
    margin: -129px auto 0 auto;
    padding: 20px;
    width: 432px;
    height: 298px;
  }
  .au-modal-title {
    height: 30px;
    margin: 0;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    overflow: hidden;
  }
  .au-modal-content {
    height: 185px;
    margin: 12px 0;
    overflow: auto;
  }
  .au-modal-operations {
    padding-top: 12px;
    text-align: right;
    // height: 44px;
    // overflow: hidden;
  }
  .au-modal-button:not(:last-child) {
    margin-right: 8px;
  }
  .au-modal-dec-line {
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  .au-modal-close-icon {
    position: absolute;
    top: 5px;
    right: 7px;
    font-size: $large;
    cursor: pointer;
  }
</style>
<template>
  <div
    class="au-modal-container au-theme-before-background-color--base-0"
    v-show="localDisplay"
    ref="modal"
    @click="hide">
    <div class="au-modal au-theme-radius au-theme-background-color--base-12" @click.stop="() => {}" :style="modalStyle">
      <h4 class="au-modal-title au-theme-border-color--base-8" v-show="title">{{ title }}</h4>
      <div class="au-modal-content" ref="content">
        <slot></slot>
      </div>
      <div class="au-modal-dec-line au-theme-border-color--base-8" ref="decline"></div>
      <div class="au-modal-operations" v-show="buttonList.length" ref="operations">
        <au-button
          class="au-modal-button"
          v-for="(button, i) in buttonList"
          :key="i"
          :type="button.type"
          :size="button.size"
          :plain="button.plain"
          :disabled="button.disabled"
          :loading="button.loading"
          @click="operate(button)">{{ button.text }}</au-button>
      </div>
      <au-icon type="times" @click="hide" class="au-modal-close-icon au-theme-hover-font-color--primary-3"></au-icon>
    </div>
  </div>
</template>
<script>
  import { getElementSize } from '../../../helpers/dom'
  import AuButton from '../../button'
  import AuIcon from '../../icon'

  export default {
    name: 'au-modal',
    components: { AuButton, AuIcon },
    mounted () {
      // document.body.appendChild(this.$refs.modal)
      this.calModalContentStyle()
    },
    // destroyed () {
    //   // document.body.removeChild(this.$refs.modal)
    // },
    data () {
      return {
        localDisplay: this.display
      }
    },
    props: {
      display: {
        type: Boolean
      },
      title: {
        type: String
      },
      buttons: {
        type: Array
      },
      width: {
        type: [String, Number]
      },
      height: {
        type: [String, Number],
        valodator (v) {
          if (!/^\d+(px)*$/g.test(v)) {
            console.warn('Admin UI@au-modal@ height can not be percentage because we need absolute height value to put it in middle of the window')
            return false
          }
          return true
        }
      },
      onEnter: String
    },
    watch: {
      display (v) {
        this.localDisplay = v
        if (v) {
          this.calModalContentStyle()
          window.addEventListener('keyup', this.escHandler)
          if (this.onEnter) window.addEventListener('keyup', this.enterHandler)
        } else {
          window.removeEventListener('keyup', this.escHandler)
          if (this.onEnter) window.removeEventListener('keyup', this.enterHandler)
        }
      },
      localDisplay (v) {
        this.$emit(v ? 'show' : 'hide')
      }
    },
    computed: {
      buttonList () {
        let buttons = this.buttons
        let buttonList = []
        if (buttons instanceof Array) {
          buttons.forEach(button => {
            if (typeof button === 'string') {
              if (this.builtInButtons[button]) buttonList.push(this.builtInButtons[button])
            } else if (typeof button === 'object') {
              buttonList.push(button)
            }
          })
        }
        return buttonList
      },
      modalStyle () {
        let { width, height } = this
        // width can be form like 30% or 45px
        // height can only be form like 45px
        if (!height) height = 298
        height = height < 140 ? 140 : height
        // if not given width
        if (!width) width = ''
        else width = width + ''
        return {
          width: width.indexOf('%') === -1 ? width.indexOf('px') ? width : parseInt(width) + 'px' : width,
          height: parseInt(height) + 'px',
          marginTop: (parseInt(height) / 2 * -1) + 'px'
        }
      }
    },
    methods: {
      hide () {
        this.localDisplay = false
      },
      show () {
        this.localDisplay = true
      },
      operate (button) {
        let vm = this
        button.handler.call(this.$parent, {
          start () {
            vm.$set(button, 'loading', true)
          },
          stop () {
            vm.$set(button, 'loading', false)
          }
        })
      },
      calModalContentStyle () {
        let { height, title } = this
        height = height || 298
        height = height < 140 ? 140 : height
        let operationHeight = 0
        if (this.buttonList.length && this.$refs.operations) {
          operationHeight = getElementSize(this.$refs.operations, true).height
        }
        this.$refs.content.style.height = parseInt(height) - 64 - operationHeight - (title ? 31 : 0) + 'px'
      },
      escHandler (e) {
        if (e.keyCode !== 27) return
        this.hide()
      },
      enterHandler (e) {
        if (e.keyCode !== 13) return
        this.buttonList.forEach(button => {
          if (button.text === this.onEnter) this.operate(button)
        })
      }
    }
  }
</script>
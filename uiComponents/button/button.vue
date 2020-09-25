<template>
  <button
    @click="$emit('click')"
    class="c-button"
    :disabled="disabled"
    :class="['c-button-'+type,{'is-plain': plain, 'is-disabled': disabled, 'is-round': round, 'is-show':isShow},'c-button-size-'+size ]">
   <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'CButton',
    props: {
      type: {//样式
        type: String,
        default: 'style1'
      },
      size: {//大小
        type: String,
        default: 'default'
      },
      isShow: {//展示用
        type: Boolean,
        default: false
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data() {
      return {
        msg: 'button'
      }
    }
  }
</script>
<style lang='scss'>
.c-button{
  box-sizing: border-box;
  border: 0;
  outline: none;
  height: 64px;
  background-color: #72c0f0;
  color: #ffffff;
  border-radius: 8px;
  padding: 0 32px;
  min-width: 144px;
  &.c-button-size-default{
    font-size:30px;
  }
  &.c-button-style2{
    background-color: #ef6e3e;
  }
  &.c-button-style3{
    background-color: #ffffff;
    color: #000;
    border: 1px solid #cacaca;
  }
  &.c-button-style4{
    background-color: #4f86a7;
  }
  &.c-button-style5{
    background-color: #7bd886;
  }
  &.c-button-size-small{
    height: 56px;
    font-size: 26px;
  }
}
</style>


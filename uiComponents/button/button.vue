<template>
    <button
    @click="$emit('click')"
    class="c-button show"
    :disabled="disabled"
    :class="['c-button-'+type,{'is-plain': plain, 'is-disabled': disabled, 'is-round': round, 'show':isShow},'c-button-size-'+size ]">
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
 @import "../theme-default/css/option.scss";
// @import url('../theme-default/css/option.css');
//  $size:1;

.c-button{
  &.ishow{
    $size:5;
    color: $C501;

  }
  @function pxTorem($px){
      @return $px * $size
    };
  box-sizing: border-box;
  border: 0;
  outline: none;
  background-color: #72c0f0;
  color: #ffffff;
  border-radius: pxTorem(0.08rem);
  padding: 0 pxTorem(0.32rem);
  min-width: pxTorem(1.44rem);
  &.c-button-size-default{
    font-size:pxTorem(0.3rem);
     height: pxTorem(0.64rem);
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
    height: pxTorem(0.56rem);
    font-size: pxTorem(0.26rem);
  }
}
</style>


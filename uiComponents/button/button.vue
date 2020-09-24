<template>
  <div
    @click="$emit('click')"
    class="c__button"
    :disabled="disabled"
    :class="['c__button--'+type,{'is-plain': plain, 'is-disabled': disabled, 'is-round': round, 'is-show':isShow},'c__button--size-'+size ]">
   <span> <slot></slot></span>
  </div>
</template>

<script>
  export default {
    name: 'CButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      isShow: {
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
.c__button{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: #72c0f0;
  color: #ffffff;
  border-radius: 8px;
  padding: 0 32px;
  min-width: 1.44rem;
  &.c__button--size-default{
    font-size:30px;
  }
}
</style>


<template>
  <!-- type: plain/
              primary/
              danger/
              light/
              white/
              lightyellow/
              solidforbid/
              solidorange
  -->
  <!-- size: small/normal/middle/large -->
  <div class="ui-button flexcol-all-center" :class="classArr">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'uiButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'small'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      classArr: `ui-button-${this.type ? this.type : 'primary'} ui-button-${
        this.size ? this.size : 'small'
      } ${this.disabled ? 'disabled' : ''} ${this.shadow ? '' : 'noshadow'}`
    }
  },
  watch: {
    disabled() {
      this.classArr = `ui-button-${
        this.type ? this.type : 'primary'
      } ui-button-${this.size ? this.size : 'small'} ${
        this.disabled ? 'disabled' : ''
      } ${this.shadow ? '' : 'noshadow'}`
    }
  }
}
</script>

<style scoped lang="scss">
.ui-button {
  min-width: 1.44rem;
  width: -webkit-fit-content;
  box-sizing: border-box;
  text-align: center;
  border-radius: 0.08rem;
  -webkit-border-radius: 0.08rem;
  padding: 0 0.2rem;
}

/* Size Button normal */
.ui-button-normal {
  height: 0.56rem;
  font-size: 0.26rem;
}

/* Size Button middle */
.ui-button-middle {
  min-width: 2.04rem;
  height: 0.64rem;
  font-size: 0.24rem;
  border-radius: 0.32rem;
}

/* Size Button large */
.ui-button-large {
  // min-width: 4.4rem;
  // height: 0.64rem;
  // font-size: 0.3rem;
  min-width: 2.39*2rem;
  height: 0.42*2rem;
  font-size: 0.14*2rem;
  border-radius: 0.42*2rem;
}

/* Size Button small */
.ui-button-small {
  border-radius: 0.28rem;
  width: 1.44rem;
  height: 0.56rem;
  font-size: 0.24rem;
}

/* Type Button plain */
.ui-button-plain {
  background: #fff;
  color: #000;
  border: 0.02rem solid #ccc;
  &:active {
    background: #ccc
  }
  &.disabled {
    opacity: 0.5;
  }
  &.disabled:active {
    background: #fff;
  }
}

/* Type Button primary 蓝底经典按钮*/
.ui-button-primary {
  background-color: blue;
  color: #fff;
  &:active {
    background-color:blue;
  }
  &.disabled {
    background-color: blue;
    color: rgba($color: #ffffff, $alpha: 0.7);
  }
}

/* Type Button danger */
.ui-button-danger {
  background-color: #ff6363;
  color: #fff;
  &:active {
    background-color: #ff5252;
  }
  &.disabled {
    background-color: rgba($color: #ff6363, $alpha: 0.7);
    color: rgba($color: #ffffff, $alpha: 0.7);
  }
}

/* Type Button white 白底橘字 */
.ui-button-white {
  background: #fff;
  color: #f40;
  border: 0.02rem solid #f40;
  &:active {
    background: rgba($color: #f40, $alpha: 0.1);
  }
  &.disabled {
    color: #f40;
    border: 0.02rem solid #f40;
  }
  &.disabled:active {
    background: #fff;
  }
}

/* Type Button light 橘色高亮按钮*/
.ui-button-light {
  background-color: #f40;
  color: #fff;
  &:active {
    background: rgba($color: #f40, $alpha: 0.8);
  }
  &.disabled {
    background-color: rgba($color: #f40, $alpha: 0.7);
    color: rgba($color: #ffffff, $alpha: 0.7);
  }
}

/* Type Button lightyellow*/
.ui-button-lightyellow {
  background: #fff7e1;
  color: #f40;
  &:active {
    background: #FFECB8;
  }
}

/* Type Button solidforbid*/
.ui-button-solidforbid {
  background: blue;
  color: #f40;
  &:active {
    background: blue;
  }
}

/* Type Button solidorange*/
.ui-button-solidorange {
  background: blue;
  color: #f40;
  &:active {
    background: blue;
  }
}

/* Type Button solidblue*/
.ui-button-solidblue {
  background: blue;
  color: #000;
  &:active {
    background: blue;
  }
}

/* Button noshadow */
.noshadow {
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
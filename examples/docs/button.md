### 按钮文案

<div class="demo-box">
  <div class="demo-block">
    <div>
        <c-button type="style1" :isShow = 'true'>默认按钮</c-button>
        <c-button type="style2">默认按钮</c-button>
        <c-button type="style3">默认按钮</c-button>
        <c-button type="style4">默认按钮</c-button>
        <c-button type="style5">默认按钮</c-button>
    </div>
     <div style='marginTop:10px'>
        <c-button type="style1" size='small'>默认按钮</c-button>
        <c-button type="style2" size='small'>默认按钮</c-button>
        <c-button type="style3" size='small'>默认按钮</c-button>
        <c-button type="style4" size='small'>默认按钮</c-button>
        <c-button type="style5" size='small'>默认按钮</c-button>
        <i class="c-icon-weixin fs-24"></i>
        <i class="c-icon-shoucang fs-24"></i>
    </div>
  </div>
</div>

  ::: demo
  ```html
    <div>
       <c-button type="style1">默认按钮</c-button>
        <c-button type="style2">默认按钮</c-button>
        <c-button type="style3">默认按钮</c-button>
        <c-button type="style4">默认按钮</c-button>
        <c-button type="style5">默认按钮</c-button>
    </div>
  ```
  :::

  ### api
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,small            |    —     |
| type     | 类型   | string    |   style1,style2,style3 |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |

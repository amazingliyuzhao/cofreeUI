### 带iframe的按钮展示


  ::: demo
  ```html
    <div>
       <c-button type="style1">默认按钮</c-button>
        <c-button type="style2">默认按钮</c-button>
        <c-button type="style3">默认按钮</c-button>
        <c-button type="style4">默认按钮</c-button>
        <c-button type="style5">默认按钮</c-button>
    </div>
    <div>
       <c-button type="style1" size='small'>默认按钮</c-button>
        <c-button type="style2" size='small'>默认按钮</c-button>
        <c-button type="style3" size='small'>默认按钮</c-button>
        <c-button type="style4" size='small'>默认按钮</c-button>
        <c-button type="style5" size='small'>默认按钮</c-button>
    </div>
  ```
  :::

  ### api
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,small            |    —     |
| type     | 类型   | string    |   style1,style2,style3 |     —    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |

<div class="phone">
    <iframe src="http://localhost:8086/#/"></iframe>
    <div class="statusbar"></div>
</div>
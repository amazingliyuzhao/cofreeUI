# 开发引导

----



## 新建和发布组件

- 在uiComponents目录下新建组件,样式文件新建在theme-default目录下，index.css增加引入
- index中增加导出
- 修改package.json中版本号，npm publish

----


## 新建组件展示

- 在examples/dosc目录下新建md文件(md文件中可之内写vue组件，::: demo 作为标记不渲染，可见button.md)
- nav.config.js中新增路由
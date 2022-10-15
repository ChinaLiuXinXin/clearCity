# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

顶部导航栏的插槽封装
    因为业务的需要，顶部插槽需要进行封装，主要是对左侧和右侧图标以及中间文字，因此对三者都设计了prop，通过动态
    传入相应的值来实现路由跳转，以及数据展示。值配置在route文件中，不算是动态的，只是方便集中管理。
    
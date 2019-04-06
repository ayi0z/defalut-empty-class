# default-empty-class

##  说明
    为表单元素空值状态设置默认classname

## 安装
```
    npm i 'default-empty-class'
```
## 使用
```
    import emptyClass from 'default-empty-class'
    Vue.use(emptyClass)
    <input v-empty-class="'default-empty-class'">

    <style>
        .default-empty-class{
            border: solid 1px #ff0000;
        }
    </style>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

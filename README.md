# l

## Config

- [x] 组织项目目录结构
- [x] 配置 ESLint 校验 和 自动格式化
- [x] 配置项目相关信息
- [x] 配置多环境
- [x] 配置 vue.config.js
- [x] 配置 CSS 样式系统
- [x] 配置 SVG
- [x] 配置 I18N 国际化
- [ ] 配置多主题切换
- [ ] 配置基础框架结构
- [x] 配置 Axios
- [x] 配置 Router
- [x] 配置 Vuex
- [x] 配置 CDN 引入静态资源
- [x] 配置 Vscode 代码片段
- [x] 配置更新基础框架
- [ ] 自动化部署

## 1. 组织项目目录结构

```js
├── src
│  ├── api                                             # api 请求文件夹
│  ├── assets                                          # 资源文件夹
│  ├── ├── images                                      # 图片文件夹
│  ├── ├── styles                                      # 样式文件夹
│  ├── ├── ├── common                                  # 常用样式
│  ├── ├── ├── variable                                # 全局样式变量
│  ├── ├── ├── index.scss                              # 入口文件
│  ├── ├── svg                                         # svg 文件
│  ├── components                                      # 全局公共组件
│  ├── router                                          # 路由
│  ├── ├── index.ts                                    # 路由入口文件
│  ├── ├── modules                                     # 路由模块
│  ├── store                                           # vuex
│  ├── ├── index.ts                                    # vuex 入口文件
│  ├── ├── modules                                     # vuex 模块
│  ├── utils                                           # 工具类
│  ├── ├── axios                                       # axios 请求封装
│  ├── ├── cdn                                         # cdn 静态资源
│  ├── ├── i18n                                        # i18n 多语言
│  ├── ├── ├── index.ts                                # i18n 入口文件
│  ├── ├── ├── ├── modules ├── zh.ts                    # i18n 中文配置
│  ├── ├── ├── ├── modules ├── en.ts                    # i18n 英文配置
│  ├── ├── common                                      # 全局公共方法
│  ├── views                                           # 所有视图
│  ├── App.vue                                         # 入口页面
│  ├── main.ts                                         # 入口文件
│  ├── registerServiceWorker.ts                        # 离线缓存
│  ├── shims-tsx.d.ts                                  # 为TSX做的适配定义文件
│  ├── shims-vue.d.ts                                  # 为TS做的适配定义文件
```

## 2. 配置 ESLint 校验 和 自动格式化

``` .eslintrc.js ```

```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 允许使用 any 类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 函数定义时括号前面要不要有空格
    'space-before-function-paren': 0,
  },
};
```

``` .vscode/settings.json ```

```js
{
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  // 重新设定 tabsize
  "editor.tabSize": 2,
  // 添加文件类型支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue"
  ],
  // 每次保存的时候将代码按 eslint 格式进行修复
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // 用 prettier 进行格式化
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.html": "prettier",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.options.tabSize": 2,
  "vetur.format.scriptInitialIndent": false,
  "vetur.format.styleInitialIndent": false,
  // 自动识别 ts 语法定义的属性
  "vetur.experimental.templateInterpolationService": false,
  // 在函数名和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  // 默认行尾字符
  "files.eol": "\n",
}
```

``` .prettierrc.js ```

```js
module.exports = {
  // 换行长度，默认80
  printWidth: 120,
}
```

## 3. 配置项目相关信息

### 3.1 配置favicon.ico

修改 ``` public\img\icons ``` 和 ``` public\favicon.ico ``` 文件

### 3.2 配置网页标题

#### 3.2.1 直接修改

``` ./public/index.html ```

```html
<title>管理后台</title>
```

#### 3.2.2 全局路由拦截修改

``` @/router/index.ts ```

``` typescript
// 在路由中配置标题
router.beforeEach((to, from, next) => {
  document.title = `管理后台${to.meta.title ? ' - ' + to.meta.title : ''}`;
  next();
});
```

## 4. 配置多环境

### 4.1 修改 package.json

``` ./package.json ```

``` json
"scripts": {
  "start": "yarn serve:dev",
  "serve": "yarn serve:dev",
  "serve:dev": "vue-cli-service serve --mode develop",
  "serve:test": "vue-cli-service serve --mode test",
  "serve:uat": "vue-cli-service serve --mode uat",
  "serve:prod": "vue-cli-service serve --mode production",
  "build": "yarn build:dev",
  "build:dev": "vue-cli-service build --mode develop",
  "build:test": "vue-cli-service build --mode test",
  "build:uat": "vue-cli-service build --mode uat",
  "build:prod": "vue-cli-service build --mode production",
  "lint": "vue-cli-service lint"
}
```

### 4.2 添加 .env 文件

``` .env.develop ```

```js
# 开发环境
NODE_ENV = 'development'
VUE_APP_ENV = 'development'

// others config
```

``` .env.test ```

``` js
# 测试环境
NODE_ENV = 'production'
VUE_APP_ENV = 'test'

// others config
```

``` .env.uat ```

``` js
# UAT环境
NODE_ENV = 'production'
VUE_APP_ENV = 'uat'

// others config
```

``` .env.production ```

``` js
# 生产环境
NODE_ENV = 'production'
VUE_APP_ENV = 'production'

// others config
```

### 4.3 使用方法

``` html
{{ process.env.NODE_ENV }}
{{ process.env.VUE_APP_ENV }}
```

### 4.4 查看当前使用的环境

``` index.html ```

```html
<title env="<%= VUE_APP_ENV %>"><%= htmlWebpackPlugin.options.title %></title>
```

## 5. 配置 vue.config.js
[更多详细配置](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)
```
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  // 静态资源目录
  assetsDir: 'assets',
}
```

## 6. 配置 CSS 样式系统

## 6.1 全局样式文件

``` ./main.ts ```

```
import "@/assets/styles/index.scss";
```

## 6.2 配置 scss 预置数据

``` vue.config.js ```

```js
css: {
  loaderOptions: {
    sass: {
      prependData: `@import "@/assets/styles/common/index.scss";`,
    },
  },
},
```

### 6.3 scss 常用样式

```scss
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/**
 * 边距
 * 定义了一些常用的内边距和外边距
 */
$gauge: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
        5, 10, 15, 20, 25, 30, 35, 40, 45, 50,
        60, 70, 80, 90, 100;

@each $i in $gauge {
  .m-#{$i} { margin: $i+px; }
  .m-t#{$i} { margin-top: $i+px; }
  .m-b#{$i} { margin-bottom: $i+px; }
  .m-l#{$i} { margin-left: $i+px; }
  .m-r#{$i} { margin-right: $i+px; }
  .m-lr#{$i} { margin-left: $i+px; margin-right: $i+px; }
  .m-tb#{$i} { margin-top: $i+px; margin-bottom: $i+px; }

  .p-#{$i} { padding: $i+px; }
  .p-t#{$i} { padding-top: $i+px; }
  .p-b#{$i} { padding-bottom: $i+px; }
  .p-l#{$i} { padding-left: $i+px; }
  .p-r#{$i} { padding-right: $i+px; }
  .p-lr#{$i} { padding-left: $i+px; padding-right: $i+px; }
  .p-tb#{$i} { padding-top: $i+px; padding-bottom: $i+px; }
}

/**
 * Flex 布局
 * 定义了flex布局常用的几种方式
 */
.flex { display: flex; flex-wrap: wrap; }
.flex-center { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }
$flex-x: "center", "space-between", "space-around", "space-evenly";
$flex-y: "center", "flex-start", "flex-end", "space-evenly", "baseline";
@each $i in $flex-x {
  .flex-x-#{$i} { display: flex; flex-wrap: wrap; justify-content: #{$i}; }
}
@each $i in $flex-y {
  .flex-y-#{$i} { display: flex; flex-wrap: wrap; align-items: #{$i}; }
}

/**
 * Cursor
 * 定义了鼠标手势
 */
$cursor: pointer;
@each $i in $cursor {
  .cursor-#{$i} { cursor: $i; }
}

/**
 * Font size
 * 定义了一些常用的字体大小
 */
 $fonts: (
  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  22, 24, 26, 28, 30, 32, 34, 36, 38, 40
);
@each $font in $fonts{
  .font-#{$font}{ font-size: $font + px; }
}

/**
 * 超出指定行数省略号
 */
@mixin line-clamp($number) {
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: $number;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 6.4 使用示例

```
<div class="flex-center"><div>1</div><div>2</div></div>
<div class="m-10">margin: 10px;</div>
<div class="p-10">padding: 10px;</div>
<div class=".cursor-pointer">cursor: pointer;</div>
```

## 7. 配置 SVG

### 7.1 安装依赖

```shell
yarn add svg-sprite-loader --save-dev
```

### 7.2 添加配置

``` ./vue.config.js ```

```javascript
chainWebpack: config => {
  // svg
  const svgRule = config.module.rule('svg')
  svgRule.uses.clear()
  svgRule
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
}
```

### 7.3 创建 SVG 资源文件夹

``` @/assets/svg ```

### 7.4 创建 SVG 公共组件

``` @/components/s-svg-icon ```

```vue
<template>
  <svg
    :class="svgClass"
    :style="{
      color: color,
      width: size,
      height: size,
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {
  // name
  @Prop({ default: "" }) name!: string;

  // 颜色
  @Prop({ default: "" }) color!: string;

  // 大小
  @Prop({ default: "16px" }) size!: string;

  /**
   * 获取名称
   */
  get iconName(): string {
    return `#icon-${this.name}`;
  }

  /**
   * 获取class
   */
  get svgClass() {
    return this.name ? `svg-icon icon-${this.name}` : "404";
  }
}
</script>
<style lang="scss">
.svg-icon {
  fill: currentColor;
  vertical-align: middle;
}
</style>
```

### 7.5 全局注册组件

``` @/components/index.ts ```

``` typescript
import Vue from "vue";
import SvgIcon from "@/components/svg-icon/index.vue";

/**
 * 引入 @/assets/svg 下的所有 svg 文件
 */
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/assets/svg", true, /\.svg$/);
requireAll(req);

// 注册全局组件
Vue.component("svg-icon", SvgIcon);
```

``` ./main.ts ```

```typescript
import "@/components/index";
```

### 7.6 使用组件

```vue
<svg-icon color="#e74e3d" size="30"></svg-icon>
<svg-icon name="svg-name" color="#e74e3d" size="30"></svg-icon>
```

## 8. 配置 I18N 国际化

### 8.1 安装依赖

```shell
yarn add vue-i18n --save
```

### 8.2 添加翻译文件

``` @/utils/i18n/index.ts ```

```js
import VueI18n from "vue-i18n";

// 引入 modules 文件夹下的所有 store
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("./modules", true, /\.ts$/);
const modules: any = {};
requireAll(req).map((route: any) => (modules[route.default.key] = route.default));

export default new VueI18n({
  locale: localStorage.getItem("locale") || "zh",
  messages: modules,
});
```

``` @/utils/i18n/modules/zh.ts ```

```js
export default {
  key: "zh",
  message: {
    hello: "你好，世界",
  },
};
```

``` @/utils/i18n/modules/en.ts ```

``` js
export default {
  key: "en",
  message: {
    hello: "Hello, world",
  },
};
```

### 8.3 全局引入

``` main.js ```

```js
import i18n from "@/utils/i18n";

...

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
```

### 8.4 使用方法

```js
$t('message.hello')
this.$t('message.hello')
```

### 8.5 切换语言

```js
localStorage.setItem("locale", "");
this.$i18n.locale = localStorage.getItem("locale");
```

## 9. 配置多主题切换
## 10. 配置基础框架结构

## 11. 配置 Axios

### 11.1 配置

``` @/utils/axios/index.ts ``` 基础配置

``` typescript
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import business from "./business";
import qs from "qs";

// 创建请求
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  },
  withCredentials: true,
  timeout: 1000 * 10,
  transformRequest: [
    (data: any) => {
      data = JSON.stringify(data);
      return data;
    },
  ],
  transformResponse: [
    (data: any) => {
      if (typeof data === "string" && data.startsWith("{")) {
        data = JSON.parse(data);
      }
      return data;
    },
  ],
});

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 请求开始对之前的请求做检查取消操作
    removePending(config);
    // 将当前请求添加到 pending 中
    addPending(config);

    // 根据业务拦截请求
    return business.request(config);
  },
  (error: any) => {
    console.log("error:::", error);
  }
);

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在请求结束后，移除本次请求
    removePending(response);

    // 根据业务拦截响应
    return business.response(response);
  },
  (error: { message: string }) => {
    if (axios.isCancel(error)) {
      console.log("repeated request: " + error.message);
    } else {
      console.log("error:::", error);
    }
    return Promise.reject(error);
  }
);

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending = new Map();
/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config: AxiosRequestConfig) => {
  const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join("&");
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel: any) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel);
      }
    });
};
/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config: AxiosRequestConfig) => {
  const url = [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join("&");
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url);
    cancel(url);
    pending.delete(url);
  }
};

/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = (): void => {
  for (const [url, cancel] of pending) {
    cancel(url);
  }
  pending.clear();
};

export default service;
```

``` @/utils/axios/business.ts ``` 业务逻辑相关配置

``` typescript
import { AxiosRequestConfig, AxiosResponse } from "axios";
export default {
  /**
   * 拦截请求处理相应的业务逻辑
   * @param config config
   * @returns config
   */
  request(config: AxiosRequestConfig): AxiosRequestConfig {
    console.log("请求拦截器处理业务逻辑", config);

    /**
     * 处理 POST 请求参数
     */
    if ((config.method as string).toUpperCase() === "POST") {
      (config as any).headers["Content-Type"] = "application/json;charset=utf-8";
    }
    return config;
  },

  /**
   * 拦截响应处理相应的业务逻辑
   * @param config config
   * @returns config
   */
  response(response: AxiosResponse): AxiosResponse {
    console.log("返回拦截器处理业务逻辑", response);
    return response.data;
  },
};
```

### 11.2 使用方法

``` @/api/home/index.ts ```

``` typescript
import request from "@/utils/axios/index";

// 获取首页配置
export const GetConfig = (params: any): Promise<any> => {
  return request.get("http://yapi.syy.dongchali.cn/mock/469/platform/integralActivity/list", { params });
};

// 设置首页配置
export const SetConfig = (params: any): Promise<any> => {
  return request.post("/home/config", params);
};
```

## 12. 配置 Router

### 12.1 全局引入

``` main.ts ```

```typescript
import router from "./router";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
```

### 12.2 路由配置

``` @/router/index.ts ```

```typescript
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

// 引入 modules 文件夹下的所有路由
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/router/modules", true, /\.ts$/);
const modules: any = requireAll(req).map((route: any) => route.default);
const routes: Array<RouteConfig> = [
  // 首页
  {
    path: "/",
    name: "Home",
    meta: {
      title: "首页",
      icon: "home",
      keepAlive: false,
      hidden: true,
      permission: 10000,
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/index/index.vue"),
  },

  // 登录
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import(/* webpackChunkName: "login" */ "@/views/login/index.vue"),
  },

  // 其他模块
  ...modules,

  // 404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/404/index.vue"),
  },
];

// 配置路由信息
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 修改项目标题
router.beforeEach((to: any, from: any, next: any) => {
  document.title = `管理后台${to.meta.title ? " - " + to.meta.title : ""}`;
  next();
});

export default router;
```

### 12.3 其他路由

``` @/router/modules/about.ts ```

```typescript
export default {
  path: "/about",
  name: "About",
  meta: {
    title: "关于我们",
  },
  component: () => import(/* webpackChunkName: "about" */ "@/views/about/index/index.vue"),
};
```

## 13. 配置 Vuex

### 13.1 安装依赖

```shell
yarn add vuex --save
```

### 13.2 全局引入

``` .main.ts```

```typescript
import store from "@/store";

new Vue({
  store,
}).$mount("#app");
```

### 13.3 创建 store

``` @/store/index.ts ```

```typescript
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 引入 modules 文件夹下的所有 store
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/store/modules", true, /\.ts$/);
const modules: any = {};
requireAll(req).map((route: any) => (modules[route.default.key] = route.default));

export default new Vuex.Store({
  modules: {
    ...modules,
  },
});
```

``` @/store/modules/common.ts ```

```typescript
export default {
  key: "common",
  namespaced: true,
  state: {
    version: "1.0.0",
  },
  mutations: {
    CHANGE_STATE(state: any, context: any): void {
      context.length
        ? context.forEach((item: any) => (state[item.key] = item.value))
        : (state[context.key] = context.value);
    },
  },
  actions: {
    changeState({ commit }: any, context: any): void {
      commit("CHANGE_STATE", context);
    },
  },
};
```

``` @/store/modules/user.ts ```

```typescript
export default {
  key: "user",
  namespaced: true,
  state: {
    name: "lee",
    age: 100,
    city: "ShangHai",
  },
  mutations: {
    CHANGE_STATE(state: any, context: any): void {
      context.length
        ? context.forEach((item: any) => (state[item.key] = item.value))
        : (state[context.key] = context.value);
    },
  },
  actions: {
    changeState({ commit }: any, context: any): void {
      commit("CHANGE_STATE", context);
    },
  },
};
```

### 13.4 使用方法

```typescript
// 获取方法
this.$store.state.common.xxx;

// 设置方法
this.$store.dispatch("common/changeState", { key: "key", value: data });
this.$store.dispatch("common/changeState", [ { key: "key", value: data } ]);
this.$store.commit("common/CHANGE_STATE", { key: "key", value: data });
this.$store.commit("common/CHANGE_STATE", [ { key: "key", value: data } ]);
```

## 14. 配置CDN引入静态资源

### 14.1 ./public/index.html

```html
<!-- import css cdn -->
<% for (let i in htmlWebpackPlugin.options.cdn.css) { %>
<link rel="stylesheet" href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" />
<% } %>

<!-- import javascript cdn -->
<% for (let i in htmlWebpackPlugin.options.cdn.js) { %>
<script type="text/javascript" src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
<% } %>
```

### 14.2 vue.config.js

```javascript
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CDN } = require("./src/utils/cdn");

...

configureWebpack: {
  // 忽略打包第三方库
  externals: {
    vue: "Vue",
    "vue-router": "VueRouter",
    vuex: "Vuex",
    axios: "axios",
  },
},
pages: {
  // 首页配置CDN
  index: {
    entry: "src/main.ts",
    template: "public/index.html",
    filename: "index.html",
    chunks: ["chunk-vendors", "chunk-common", "index"],
    cdn: CDN[process.env.VUE_APP_ENV],
  },
},
```

### 14.3 ./src/utils/cdn/index.js

```js
module.exports.CDN = {
  develop: {
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js",
      "https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.js",
      "https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.js",
      "https://cdn.jsdelivr.net/npm/vue-i18n@8.26.5/dist/vue-i18n.js",
    ],
  },
  test: {
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js",
      "https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.js",
      "https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.js",
      "https://cdn.jsdelivr.net/npm/vue-i18n@8.26.5/dist/vue-i18n.js",
    ],
  },
  uat: {
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
      "https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js",
      "https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js",
      "https://cdn.jsdelivr.net/npm/vue-i18n@8.26.5/dist/vue-i18n.min.js",
    ],
  },
  production: {
    js: [
      "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js",
      "https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js",
      "https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js",
      "https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js",
      "https://cdn.jsdelivr.net/npm/vue-i18n@8.26.5/dist/vue-i18n.min.js",
    ],
  },
};
```

## 15. 配置 Vscode 代码片段

### 15.1 作用

使用快捷键自动生成代码片段

### 15.2 配置方法

复制以下配置信息，粘贴到 ``` Vscode 首选项 => 用户片段 => 新建全局代码片段文件```

```js
{
  /**
   * Console
   */
  "console.log": {
    "scope": "javascript, typescript",
    "prefix": "cl",
    "body": [
      "console.log('$1', $2)"
    ],
    "description": "console.log()"
  },
  "console.dir": {
    "scope": "javascript, typescript",
    "prefix": "cd",
    "body": [
      "console.dir('$1', $2)"
    ],
    "description": "console.dir()"
  },
  "console.table": {
    "scope": "javascript, typescript",
    "prefix": "ct",
    "body": [
      "console.table('$1', $2)"
    ],
    "description": "console.table()"
  },
  /**
   * Template
   */
  "vue2.x typescript template": {
    "scope": "",
    "prefix": "vue2.x-typescript-template",
    "body": [
      "<template>\n\t<div class='${1}'></div>\n</template>\n\n<script lang='ts'>\nimport { Component, Vue } from 'vue-property-decorator';\n\n@Component({\n\tcomponents: {},\n})\nexport default class ${2} extends Vue {\n\tmounted(): void {}\n}\n</script>\n<style scoped lang='scss'>\n</style>\n"
    ],
    "description": "vue2.x-typescript-template"
  },
  "vue3.x typescript template": {
    "scope": "",
    "prefix": "vue3.x-typescript-template",
    "body": [
      "<template>\n\t<div class=\"${1}\">\n\t\t$2\n\t</div>\n</template>\n\n<script lang='ts'>\nimport { defineComponent } from 'vue'\n\nexport default defineComponent({\n\tsetup () {\n\t\tconsole.log('$3')\n\t}\n})\n</script>\n"
    ],
    "description": "vue3.x-typescript-template"
  },
  /**
   * Function
   */
  "function": {
    "scope": "",
    "prefix": "function",
    "body": [
      "${1}(): void {${2}}"
    ],
    "description": "function"
  },
  "promise": {
    "scope": "javascript, typescript",
    "prefix": "promise",
    "body": [
      "return new Promise((${2:resolve}, ${3:reject}) => {${1}})"
    ],
    "description": "promise"
  },
  /**
   * API
   */
  "api": {
    "scope": "javascript, typescript",
    "prefix": "api",
    "body": [
      "${1}({$2}).then((res: any) => {\n\tconsole.log(res)\n}).catch((error: any) => console.log(error)).finally(() => {$3})"
    ],
    "description": "api"
  },
  "api-get": {
    "scope": "javascript, typescript",
    "prefix": "api-get",
    "body": [
      "export const ${1} = (params: any): Promise<any> => {\n\treturn request.get('${2}', { params });\n};"
    ],
    "description": "api-get"
  },
  "api-post": {
    "scope": "javascript, typescript",
    "prefix": "api-post",
    "body": [
      "export const ${1} = (params: any): Promise<any> => {\n\treturn request.post('${2}', params);\n};"
    ],
    "description": "api-post"
  },
  /**
   * Array
   */
  "map": {
    "scope": "javascript, typescript",
    "prefix": "map",
    "body": [
      "${1}.map((item: ${2:any}) => {$3})"
    ],
    "description": "map"
  },
  "foreach": {
    "scope": "javascript, typescript",
    "prefix": "foreach",
    "body": [
      "${1}.forEach((item: ${2:any}) => {${3}})",
    ],
    "description": "foreach"
  },
  "find": {
    "scope": "javascript, typescript",
    "prefix": "find",
    "body": [
      "${1}.find((item: ${2:any}) => {$3})"
    ],
    "description": "find"
  },
  "filter": {
    "scope": "javascript, typescript",
    "prefix": "filter",
    "body": [
      "${1}.filter((item: ${2:any}) => {$3})"
    ],
    "description": "filter"
  },
  "every": {
    "scope": "javascript, typescript",
    "prefix": "every",
    "body": [
      "${1}.every((item: ${2:any}) => {$3})"
    ],
    "description": "every"
  },
  "some": {
    "scope": "javascript, typescript",
    "prefix": "some",
    "body": [
      "${1}.some((item: ${2:any}) => {$3})"
    ],
    "description": "some"
  },
  /**
   * Style
   */
  "scss": {
    "scope": "javascript, typescript, vue",
    "prefix": "scss",
    "body": [
      "<style scoped lang='scss'>${1}</style>"
    ],
    "description": "scss"
  },
  /**
   * Vue
   */
  "router-get": {
    "scope": "javascript, typescript, vue",
    "prefix": "vue-router-get",
    "body": [
      "this.${1:$}route.${2}"
    ],
    "description": "vue-router-get"
  },
  "router-params": {
    "scope": "javascript, typescript, vue",
    "prefix": "vue-router-get-params",
    "body": [
      "this.${1:$}route.params.${2:id}"
    ],
    "description": "vue-router-get-params"
  },
  "router-push": {
    "scope": "javascript, typescript, vue",
    "prefix": "vue-router-push",
    "body": [
      "this.${1:$}router.push({ path: '${2}' });"
    ],
    "description": "vue-router-push"
  },
  "store-get": {
    "scope": "javascript, typescript, vue",
    "prefix": "vuex-store-get",
    "body": [
      "this.${1:$}store.state.${2}"
    ],
    "description": "vuex-store-get"
  },
  "store-set": {
    "scope": "javascript, typescript, vue",
    "prefix": "vuex-store-set",
    "body": [
      "this.${1:$}store.dispatch('${2}/changeState', [{ key: '${3}', value: '${4}' }]);"
    ],
    "description": "vuex-store-set"
  },
}
```

### 15.3 快捷键说明

| 快捷键                     | 描述                                    | 生成代码                                                     |
| -------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| cl                         | 控制台输出片段                          | console.log('')                                              |
| cd                         | 控制台输出片段                          | console.dir('')                                              |
| ct                         | 控制台输出片段                          | console.table('')                                            |
| vue2.x-typescript-template | 生成一个 vue2.x + typescript 空模板片段 | -                                                            |
| function                   | 生成函数表达式                          | xxx(): void {}                                               |
| promise                    | 生成 Promise 对象                       | return new Promise((resolve, reject) => { })                 |
| api                        | 生成一个使用 api 请求的片段             | .({}).then((res: any) => { console.log(res) }).catch((error: any) => console.log(error)).finally(() => {}) |
| api-get                    | 生成一个 api get 请求片段               | export const xxx = (params: any): Promise<any> => request.get("xxx", { params }); |
| api-post                   | 生成一个 api post 请求片段              | export const xxx= (params: any): Promise<any> => request.post("xxx", params); |
| map                        | map 遍历数组片段                        | .map((item: any) => {})                                      |
| foreach                    | foreach遍历数组片段                     | .forEach((item: any) => {})                                  |
| find                       | find 遍历数组片段                       | .find((item: any) => {})                                     |
| filter                     | filter 遍历数组片段                     | .filter((item: any) => {})                                   |
| every                      | every 遍历数组片段                      | .every((item: any) => {})                                    |
| some                       | some 遍历数组片段                       | .some((item: any) => {})                                     |
| scss                       | 生成 style scss 结构                    | <style scoped lang="scss"></style>                           |
| router-get                 | 生成一个获取 route 的片段               | this.$route.path                                             |
| router-params              | 生成一个获取 route params 的片段        | this.$route.params.id                                        |
| router-push                | 添加一个新的路由记录                    | this.$router.push({ path: "/" });                            |
| store-get                  | 生成一个获取 store 的片段               | this.$store.state.xxx                                        |
| store-set                  | 生成一个设置 store 的片段               | this.$store.dispatch("xxx/changeState", [{ key: "xxx", value: "xxx" }]); |

## 16. 配置更新基础框架

### 16.1 查看项目中已有远程仓库

```shell
git remote
```

### 16.2 添加远程基础框架仓库

```shell
git remote add framework git-url
```

### 16.3 查看基础框架信息

```shell
git fetch framework
```

### 16.4 获取或者初始化基础框架

```shell
# 获取v1.0.0分支的代码
git merge framework/v1.0.0 --allow-unrelated-historie
```

### 16.5 解决冲突

更新基础框架，如有冲突先解决冲突，然后提交并推送代码，项目中的基础框架更新完成

## 17. 自动化部署

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
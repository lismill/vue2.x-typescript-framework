# l

## Config

- [x] 组织项目目录结构
- [x] 配置 ESLint 校验 和 自动格式化
- [x] 配置项目相关信息
- [x] 配置多环境
- [x] 配置 vue.config.ts
- [x] 配置 SVG
- [ ] 配置 CSS 样式系统
- [ ] 配置 Vscode 代码片段
- [ ] 配置基础框架结构
- [ ] 配置多主题切换
- [ ] 配置 I18N 国际化
- [ ] 配置 Router
- [x] 配置 Axios
- [ ] 配置 Mock
- [ ] 配置 Vuex
- [ ] 配置更新基础框架
- [ ] 自动化部署

### 1. 组织项目目录结构

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
│  ├── language                                        # i18n 多语言
│  ├── ├── ├── en.ts                                   # 英文配置
│  ├── ├── ├── i18n.ts                                 # 注册多 i18n 语言实例
│  ├── ├── ├── index.ts                                # 入口文件
│  ├── ├── ├── ja.ts                                   # 日文配置
│  ├── ├── ├── zh-CN.ts                                # 中文配置
│  ├── router                                          # 路由
│  ├── ├── index.ts                                    # 路由入口文件
│  ├── ├── modules                                     # 路由模块
│  ├── store                                           # vuex
│  ├── ├── index.ts                                    # vuex 入口文件
│  ├── ├── modules                                     # vuex 模块
│  ├── utils                                           # 工具类
│  ├── ├── axios                                       # axios 请求封装
│  ├── ├── common                                      # 全局公共方法
│  ├── views                                           # 所有视图
│  ├── App.vue                                         # 入口页面
│  ├── main.ts                                         # 入口文件
│  ├── registerServiceWorker.ts                        # 离线缓存
│  ├── shims-tsx.d.ts                                  # 为TSX做的适配定义文件
│  ├── shims-vue.d.ts                                  # 为TS做的适配定义文件
```

### 1. 配置 ESLint 校验 和 自动格式化

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

### 1. 配置项目相关信息

#### 1.1 配置favicon.ico

修改 ``` public\img\icons ``` 和 ``` public\favicon.ico ``` 文件

#### 1.2 配置网页标题

##### 1.2.1 直接修改

``` ./public/index.html ```

```html
<title>管理后台</title>
```

##### 1.2.2 全局路由拦截修改

``` @/router/index.ts ```

``` typescript
// 在路由中配置标题
router.beforeEach((to, from, next) => {
  document.title = `管理后台${to.meta.title ? ' - ' + to.meta.title : ''}`;
  next();
});
```

### 1. 配置多环境

#### 1.1 修改 package.json

``` ./package.json ```

``` json
"scripts": {
  "start": "yarn serve:dev",
  "serve": "yarn serve:dev",
  "serve:dev": "vue-cli-service serve --mode development",
  "serve:test": "vue-cli-service serve --mode test",
  "serve:uat": "vue-cli-service serve --mode uat",
  "serve:prod": "vue-cli-service serve --mode production",
  "build": "yarn build:dev",
  "build:dev": "vue-cli-service build --mode development",
  "build:test": "vue-cli-service build --mode test",
  "build:uat": "vue-cli-service build --mode uat",
  "build:prod": "vue-cli-service build --mode production",
  "lint": "vue-cli-service lint"
}
```

#### 1.2 添加 .env 文件

``` .env.development ```

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

#### 1.3 使用方法

``` html
{{ process.env.NODE_ENV }}
{{ process.env.VUE_APP_ENV }}
```

### 1. 配置 vue.config.ts

```
module.exports = {
  // 部署应用包时的基本 URL
  publicPath: './',
  // 静态资源目录
  assetsDir: 'assets',
}
```

### 1. 配置 Axios

#### 1.1 配置

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

#### 1.2 使用方法

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

### 1. 配置 SVG

#### 1.1 安装依赖

```shell
cnpm install svg-sprite-loader --save-dev
```

#### 1.2 添加配置

``` ./vue.config.ts ```

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



#### 1.3 创建 SVG 资源文件夹

``` @/assets/svg ```

#### 1.4 创建 SVG 公共组件

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

#### 1.5 全局注册组件

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

#### 1.6 使用组件

```vue
<svg-icon color="#e74e3d" size="30"></svg-icon>
<svg-icon name="svg-name" color="#e74e3d" size="30"></svg-icon>
```

### 1. 代码片段

#### 1.1 作用

使用快捷键自动生成代码片段

#### 1.2 配置方法

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
}
```

### 1.3 快捷键说明

| 快捷键                     | 描述                                    | 生成代码                                                     |
| -------------------------- | --------------------------------------- | ------------------------------------------------------------ |
| cl                         | 控制台输出片段                          | console.log('')                                              |
| cd                         | 控制台输出片段                          | console.dir('')                                              |
| ct                         | 控制台输出片段                          | console.table('')                                            |
| vue2.x-typescript-template | 生成一个 vue2.x + typescript 空模板片段 | -                                                            |
| api                        | 生成一个使用 api 请求的片段             | .({}).then((res: any) => { console.log(res) }).catch((error: any) => console.log(error)).finally(() => {}) |
| api-get                    | 生成一个 api get 请求片段               | export const xxx = (params: any): Promise<any> => request.get("xxx", { params }); |
| api-post                   | 生成一个 api post 请求片段              | export const xxx= (params: any): Promise<any> => request.post("xxx", params); |
| map                        | map 遍历数组片段                        | .map((item: any) => {})                                      |
| foreach                    | foreach遍历数组片段                     | .forEach((item: any) => {})                                  |
| find                       | find 遍历数组片段                       | .find((item: any) => {})                                     |
| filter                     | filter 遍历数组片段                     | .filter((item: any) => {})                                   |
| every                      | every 遍历数组片段                      | .every((item: any) => {})                                    |
| some                       | some 遍历数组片段                       | .some((item: any) => {})                                     |

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
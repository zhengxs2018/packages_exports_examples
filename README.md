# Node 模块嵌套条件导出示例

[nodejs][nodejs] 从 `v12.7.0` 开始，在 [package.json][packages] 中加入了 [exports](https://nodejs.org/api/packages.html#packages_exports) 字段，作为 `main` 字段的替代方案，并且支持自定义子模块路径的导出。

同时加入条件定义，支持多种模式的导出。

## 🌰 在同一个包支持 esm 和 cjs 模块的导出与使用

**1. 在公共包的 package.json 加入条件导出**

```json5
{
  "name": "shared",
  // 降级
  "main": "./exports/index.js",
  // 条件导出
  "exports": {
    "node": {
      // ESM 模块
      "import": "./exports/index.mjs",
      // CommonJS 模块
      "require": "./exports/index.js"
    },
    // 其他支持的环境，如：浏览器
    "default": "./exports/index.mjs"
  }
}
```

**2. 在 esm 模块中使用**

文件以 `.mjs` 后缀结尾

```js
import { printMsg } from "shared";

printMsg("hello,esm"); // -> "hello,esm"
```

**3. 在 cjs 模块中使用**

文件以 `.cjs` 或 `.js` 后缀结尾

```js
const { printMsg } = require("shared");

printMsg("hello,cjs"); // -> "hello,esm"
```

## exports 支持

| 版本               | 变化                                         |
| ------------------ | -------------------------------------------- |
| v14.13.0、v12.20.0 | 添加对 "exports" 模式的支持                  |
| v13.7.0、v12.16.0  | 实现逻辑条件导出排序                         |
| v13.7.0、v12.16.0  | 删除 --experimental-conditional-exports 选项 |
| v13.2.0、v12.16.0  | 实施有条件出口                               |
| v12.7.0            | v12.7.0 加入                                 |

## 目录结构

```text
├── examples/                 // 示例
├── shared/                   // 演示模块
└── package.json
```

## 启动示例

```bash
# 安装依赖
$ npm install

# 启动 cjs 示例
$ npm run cjs:hello

# 启动 esm 示例
$ npm run esm:hello

# 启动 esm 加载远程模块示例
$ npm run esm:remote
```

## License

- MIT

[nodejs]: https://nodejs.org/
[esm]: https://nodejs.org/api/esm.html
[packages]: https://nodejs.org/api/packages.html

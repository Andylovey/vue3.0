# Vue 3 + TypeScript + Vite + Vue-Router4.0 + element-plus + axios

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


## 项目搭建以及集成

搭建详细参考[项目搭建](https://juejin.cn/post/6951649464637636622)

<!-- 环境配置参考[href]() -->

## vite配置根路径@

1. 在vite.config.ts添加
resolve: {
  alias: {
'@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
  }
}

2. 在tsconfig.json添加
"baseUrl": "./",
"paths": {
  "@/*": ["./src/*"]
}

## vite多环境配置
详细步骤参考[环境配置](https://www.pudn.com/news/62bbbb46f3cc394cf1db6e34.html)


## 打包完之后使用http-server运行
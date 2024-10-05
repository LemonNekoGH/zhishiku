# vue-i18n 插件导致的构建失败问题
## 版本

- vite 3.0.5

- @intlify/vite-plugin-vue-i18n 7.0.0

- vue-i18n 9.2.2

## 现象

报错

```Bash
[vite:load-fallback] Could not load vue-i18n/dist/vue-i18n.runtime.mjs (imported by src/main.ts): ENOENT: no such file or directory, open 'vue-i18n/dist/vue-i18n.runtime.mjs'
error during build:
Error: Could not load vue-i18n/dist/vue-i18n.runtime.mjs (imported by src/main.ts): ENOENT: no such file or directory, open 'vue-i18n/dist/vue-i18n.runtime.mjs'
 ELIFECYCLE  Command failed with exit code 1.
```


## 原因

7.0.0 版本的插件让 vite 从 vue-i18n/dist/vue-i18n.runtime.mjs 中加载模块，但是这个路径并不存在，而且 vue-i18n 的包中并没有指定从这里读取

## 解决方案

降级插件到 3.4.0

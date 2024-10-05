# Bun：高性能 JavaScript 运行时


## 问题

### 每个终端启动时都会出现`zsh compinit: insecure directories, run compaudit for list`，需要按`y`键才能继续

2023-09-13：暂无解决方案，卸载 Bun 即可

### 在构建包含`@nolebase/vitepress-plugin-enhanced-readabilities`阅读增强组件的`VitePress`文档项目时，会报错

```Bash

  vitepress v1.3.3

✓ building client + server bundles...
build error:
Unknown file extension ".vue" for /Users/lemonneko/Projects/zhishiku/node_modules/@nolebase/ui/dist/components/NuTag/index.vue
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".vue" for /Users/lemonneko/Projects/zhishiku/node_modules/@nolebase/ui/dist/components/NuTag/index.vue
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:160:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:203:36)
    at defaultLoad (node:internal/modules/esm/load:143:22)
    at async ModuleLoader.load (node:internal/modules/esm/loader:403:7)
    at async ModuleLoader.moduleProvider (node:internal/modules/esm/loader:285:45)
error: script "docs:build" exited with code 1
```


换用`pnpm`解决了问题

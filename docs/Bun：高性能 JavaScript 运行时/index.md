# Bun：高性能 JavaScript 运行时
<p id="ouXeMksUDv26yo5HUsGx7f">



</p>

<p id="aDMZAJ1mKS8veH67iMqvy9">

## 问题

</p>

<p id="ninqYaWzGhSH18CNPVgvwo">

### 每个终端启动时都会出现`zsh compinit: insecure directories, run compaudit for list`，需要按`y`键才能继续

</p>

<p id="dLgKphFMhVFBkAwCVijzqW">

2023-09-13：暂无解决方案，卸载 Bun 即可

</p>

<p id="cPQoVxXdAZUKhmmWNhNTSX">

### 在构建包含`@nolebase/vitepress-plugin-enhanced-readabilities`阅读增强组件的`VitePress`文档项目时，会报错

</p>

<p id="pvUNSfa2Nhkvjw6G841uN5">

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


</p>

<p id="uN6r32b9bzbECmrH8Rbb2j">

换用`pnpm`解决了问题

</p>

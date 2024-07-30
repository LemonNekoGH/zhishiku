
<p id="gPhWFyfb59Y5CzwNG4eUg5">

## 版本

</p>

- vite 3.0.5

- @intlify/vite-plugin-vue-i18n 7.0.0

- vue-i18n 9.2.2

<p id="d9RLZJLaqjrg9vVyEXXhjC">

## 现象

</p>

<p id="2xxea7Jn27rcVeM88k8toN">

报错

</p>

<p id="9wmCQFfLMx45WUMU9uLJo6">

```Bash
[vite:load-fallback] Could not load vue-i18n/dist/vue-i18n.runtime.mjs (imported by src/main.ts): ENOENT: no such file or directory, open 'vue-i18n/dist/vue-i18n.runtime.mjs'
error during build:
Error: Could not load vue-i18n/dist/vue-i18n.runtime.mjs (imported by src/main.ts): ENOENT: no such file or directory, open 'vue-i18n/dist/vue-i18n.runtime.mjs'
 ELIFECYCLE  Command failed with exit code 1.
```


</p>

<p id="bVUvTm1Uw8Mx3duogReVf2">

## 原因

</p>

<p id="vgvw7bxUviqDjrGKVwNDmT">

7.0.0 版本的插件让 vite 从 vue-i18n/dist/vue-i18n.runtime.mjs 中加载模块，但是这个路径并不存在，而且 vue-i18n 的包中并没有指定从这里读取

</p>

<p id="civBTzfn1oEDqpztjRodvJ">

## 解决方案

</p>

<p id="8KLnd4LYEtYdetdSaw8aVC">

降级插件到 3.4.0

</p>

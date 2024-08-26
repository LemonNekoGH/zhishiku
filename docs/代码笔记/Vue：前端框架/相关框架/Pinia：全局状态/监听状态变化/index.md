# 监听状态变化
<p id="1DGsH6iYmwj3MEk4ZiJ4ZH">

先定义一个状态库

</p>


<p id="ni1K5xUmvDTkAT7qSyztnm">

`/store.ts`

</p>


<p id="oyTgEcpWcML8hJjZ37MaSv">

```TypeScript
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('main', () => {
  // 定义稍后会被改动的状态
  const willChange = ref('这条信息会被改变')
  return {
    willChange
  }
})
```


</p>


<p id="4EEFxNNjjBkHzuck7vzPL1">

然后使用`watch`监听变化，关于`watch`的使用：[https://v3.cn.vuejs.org/api/computed-watch-api.html#watch](<https://v3.cn.vuejs.org/api/computed-watch-api.html#watch>)

</p>


<p id="eA9dpuQqKG2XmvV2CYJAPP">

`/App.vue`

</p>


<p id="akpd76DJ21a3LxhmtqHD4s">

```Vue
<script lang="ts" setup>
import { useStore } from './store.ts'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'

// 获取到状态实例
const store = useStore()
// 解构状态实例
const { willChange } = storeToRefs(store)
// 监听状态的变化
watch([willChange], ([newVal, oldVal]) => {
  console.log('willChange 发生了变化，旧的值是：' + oldVal + '，新的值是：' + newVal)
})
</script>
<template>
  <button @click="willChange = '柠喵真可爱'">点击改变状态的值</button>
</template>
```


</p>


<p id="ik6Empc2wJPNDjHeMU8QtB">

完成之后，点击页面中的“点击改变状态的值”按钮之后，控制台就会输出“willChange发生的变化，旧的值是：这条信息会被改变，新的值是：柠喵真可爱”

</p>


<p id="oHoUtfwZhiEgzziP916GZL">



</p>



# math/rand：伪随机数包的使用
<p id="e4kfJovzgf297d4KWXik5s">

## 打乱数组或切片

</p>

<p id="mnc5ur88nv9dS22HrtCcWf">

```Go
rand.Shuffle(len(arr), func(i, j int) {
  arr[i], arr[j] = arr[j], arr[i]
})
```


</p>

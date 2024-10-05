# math/rand：伪随机数包的使用
## 打乱数组或切片

```Go
rand.Shuffle(len(arr), func(i, j int) {
  arr[i], arr[j] = arr[j], arr[i]
})
```


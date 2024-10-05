# 实战记录：一些操作的实现方法
## 合并两个 map

### 手动合并

```Go
  map1 := map[string]string{
    "Key1": "Value1",
  }
  map2 := map[string]string{
    "Key2": "Value2",
  }

  for k, v := range map1 {
    map2[k] = v
  }

  fmt.Printf("%v\n", map2)
  // Output: map[Key1:Value1 Key2:Value2]
```


### 其它方法

- 

## 在线人数统计

# 实战记录：一些操作的实现方法
<p id="8nPcU2HBcMme5dsC6gMR1g">

## 合并两个 map

</p>

<p id="oBtczhQ9hmLdMv3RSaB4p3">

### 手动合并

</p>

<p id="6jHsGgTjgAPpn2yJb3jzfN">

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


</p>

<p id="pexxe1Q7GuGmE3vCmL4PTF">

### 其它方法

</p>

- 

<p id="mirkFAVJE7xBJXgtH8FjXh">

## 在线人数统计

</p>


<p id="vgdBoBek8ZnH994Bzdcpb9">

## 语法

</p>

- 可以在表达式前加入`(?m)`来开启多行匹配模式

<p id="2LduGJCjMqidtTXe4Gs9kf">



</p>

<p id="nUm6s8BfHGcvDoM6Md1KLU">

## 小技巧

</p>

<p id="1ZwJsDUj7T3iQWZfRuZxPX">

### 通过包级变量检测并缓存已编译好的正则对象

</p>

<p id="w6TwQNhBB5rrgq7UjseQ1r">



</p>

<p id="bD6Qn6ut4WGZ6xk1mtGx2R">

```Go
var reg = regexp.MustCompile("^(#){1,6} .*(\n)?")
```


</p>

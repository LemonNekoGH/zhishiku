# 语法
<p id="u44epr2rntmq6MxzDj13pZ">

## 函数

</p>


<p id="fuCw5NzuxiCXvUTRE71yMd">

### `suspend`关键字

</p>


<p id="w8YLkpKQC2Wx47fALh88Et">

被此关键字标记的函数可以被协程中代码暂停执行、继续执行，它之内在协程作用域中被调用，或者被另一个被`suspend`标记的函数调用，有关协程的内容被放在标准库部分。

</p>


<p id="6sj2546pbgyGxwt1wGbpee">

### `infix`关键字

</p>


<p id="pcVZZEWwxS3FY32xX6UVr">

被此关键字标记的函数只能接收两个参数

</p>


<p id="isTAiYLrYhQCfBiXEQuAJu">

```Kotlin
infix fun add(a: Int, b: Int) = a + b
```


</p>


<p id="izxALTPxsapY2XUpjqUgS7">

它可以被放在两个参数之间

</p>


<p id="rKApkjAktr3cUAfqYMkUYk">

```Kotlin
println(1 add 2) // output: 3

```


</p>


<p id="99cvRCpkHFhNgGDLkZErwx">

### `operator`关键字

</p>


<p id="4HHU3wsNZxpqrdiWduxZLT">

用于重载或者为类型添加运算符

</p>


<p id="6VhfzWAAC9hK8LXe35hfh1">

```Kotlin
data class IntContent(var content: Int) {
  operator fun plus(another: IntContent): IntContent {
    return IntContent(content + another.content)
  }
}


```


</p>


<p id="oaPLhCHez8qc5tpwNJtU3M">



</p>



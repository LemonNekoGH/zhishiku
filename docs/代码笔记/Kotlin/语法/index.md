# 语法
## 函数

### `suspend`关键字

被此关键字标记的函数可以被协程中代码暂停执行、继续执行，它之内在协程作用域中被调用，或者被另一个被`suspend`标记的函数调用，有关协程的内容被放在标准库部分。

### `infix`关键字

被此关键字标记的函数只能接收两个参数

```Kotlin
infix fun add(a: Int, b: Int) = a + b
```


它可以被放在两个参数之间

```Kotlin
println(1 add 2) // output: 3

```


### `operator`关键字

用于重载或者为类型添加运算符

```Kotlin
data class IntContent(var content: Int) {
  operator fun plus(another: IntContent): IntContent {
    return IntContent(content + another.content)
  }
}


```




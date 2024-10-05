# 语法
## 类型转换

### 为什么`interface{}`可以看做任意类型？

`interface{}`表示一个空接口，在 Go 中判断一个类型是否实现某接口就看这个类型中是否有这个接口定义的函数，而空接口中没有定义函数，可以得出“所有的类型已经实现空接口（空接口是所有类型的父类型）”的结论，又因为父类型参数可以传入子类型的值（向上转型），表面上看起来`interface{}`就可以是任意类型了

### 强制类型转换

```Go
type A int

func (a A) AddOne() int {
  return int(a) + 1
}

test := 1 // int 类型
A(test).AddOne() // 强制转换为 A 类型
```


### 隐式类型转换

```Go
package main

func Test(a float) {
}

func main() {
  Test(1) // 1 是 int，会被自动转换为 float
}
```


### 从接口类型转换成实际的类型

需要用到`Type Assert`类型断言，具体写法如下

```Go
var a interface{} = 15
b := a.(int)
```


当转换出错时，比如实际类型是`string`，却要转成`int`，会`panic`

```Go
panic: interface conversion: interface {} is string, not int
```


也可以同时接收另一个返回值来判断是否转换成功

```Go
var a interface{} = 15
b, success := a.(int) // success 是 bool 类型
```


## 数组和切片的区别

数组的长度是固定的，切片不是，其它都一样

```Go
[]string // 字符串切片
[8]string // 长度为 8 的字符串数组
[...]string{"LemonNeko"} // 数组语法糖，长度在初始化后自动计算，例子的长度为 1
```


## 函数作为参数传递

当函数作为参数传递时是以地址传递的，当打印函数时会打印函数的地址

## 函数名不能为`init`

Go 在每个包都内置了一个 init 函数，用于在包加载完成之后初始化变量

## 切片语法

可以使用 [1:4] 这样的语法从切片中取出位置 1 到 3 的部分，产生一个新的切片

### append

在使用切片的过程中，如果使用[**append**](<https://haicoder.net/golang/golang-slice-append.html>)使切片的长度大于了切片的容量，那么切片的容量会以双倍的形式自动扩容

## 关于 defer 的运行

- panic 之后 defer 的函数会被运行

- os.Exit 之后 defer 的函数不会被运行

# 语法


## 函数

### `async`关键字

被此关键字标记的函数表示它是一个异步函数，它必须返回一个`Task`

在异步函数中，可以使用`await`关键字来等待被调用的其它异步函数

非异步函数函数在调用异步函数时也可以使用它返回的`Task`类型中的`Wait()`函数来进行等待

### `yield`关键字

为迭代器返回下一个值



## 泛型

### `where`对类型参数进行约束

```C#
class SomeClass<T> where T : IObserver<int> { // 要求 T 实现 IObserver<int>
  public void Print<U>() where U : new() {} // 要求 U 拥有一个无参数构造方法
}
```


## 关键字

### `default`

```C#
int i = default; // 0
default(bool); // false
```


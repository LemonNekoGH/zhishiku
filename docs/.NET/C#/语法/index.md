
<p id="f8o9B2PQEsof183iQJyD3B">



</p>

<p id="7nqFs4XqHsA3sZ7RSdnuhA">

## 函数

</p>

<p id="bzYjdY2LD8GKPqWUK8XHYf">

### `async`关键字

</p>

<p id="sst1rcjSsTRvpPVT4ANjT3">

被此关键字标记的函数表示它是一个异步函数，它必须返回一个`Task`

</p>

<p id="tQn7PP8kK9nsVRbMs5gzxr">

在异步函数中，可以使用`await`关键字来等待被调用的其它异步函数

</p>

<p id="abEh85PpHkPSoujgDDix9U">

非异步函数函数在调用异步函数时也可以使用它返回的`Task`类型中的`Wait()`函数来进行等待

</p>

<p id="gqf7zj8nxcMotuZJoJrHxh">

### `yield`关键字

</p>

<p id="cF61ZjedcHXVP9NYNhPKun">

为迭代器返回下一个值

</p>

<p id="uhL7S4ExeJGp9STn4zcquP">



</p>

<p id="6ogxgEaQfcabd21HaCN4TQ">

## 泛型

</p>

<p id="dhMQdidFSMBf9PVJA2ef5X">

### `where`对类型参数进行约束

</p>

<p id="2AWF9wgTy3acnvo1XyFLMp">

```C#
class SomeClass<T> where T : IObserver<int> { // 要求 T 实现 IObserver<int>
  public void Print<U>() where U : new() {} // 要求 U 拥有一个无参数构造方法
}
```


</p>

<p id="woZv9YLJ9py3vmcqn2iuq">

## 关键字

</p>

<p id="4JXdcW6bTU4rGRY8wriTHP">

### `default`

</p>

<p id="2TMsnfFT7D1j71dzP4onU">

```C#
int i = default; // 0
default(bool); // false
```


</p>

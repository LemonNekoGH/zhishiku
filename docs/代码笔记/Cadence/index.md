# Cadence
Cadence 是 Flow 区块链官方发明的一种合约语言，只能运行在 Flow 虚拟机上。

## 值转换到 Go 时的注意事项

Cadence 里的 Path 在 ToGoValue() 的返回值是 nil，应该使用 String() 方法

## 合约

- 更新时不会重新调用 init 函数，东西不会丢

## 资源

- 资源不可以在查询脚本和交易脚本中创建

- 在数组中的资源变量定义时要把`@`移动至最外层，Map 也是一样

- 资源可以在交易过程中临时没有所有者，所以有些时候触发的事件里面的所有者参数为空

- 资源内嵌在另一个资源里时，另一个资源需要在销毁时把这个资源销毁

## 查询脚本

- 查询脚本可以调用会修改状态的函数，但是执行完成后状态会回滚

## 函数

- 判断函数是否需要用交易脚本调用

## 事件

事件用于在交易中触发，可以用于记录必要信息

- 不可以是顶层成员

- 不可以在查询脚本或者交易脚本中触发

## 存储空间



每个区块链账号都可以存一定的数据，取决于这个账号拥有的 Flow 数量

### 存入资源

使用`AuthAccount.save`函数，将资源存储到某个路径

```纯文本
acc.save(<- res, /storage/test)
```


### 链接存储路径到公开路径

链接后可以让外部使用公开路径借用此资源

使用`AuthAccount.link`函数，将某个公开路径链接到存储路径

```text
acc.link(/public/test, /storage/test)
```


### 借用资源

#### `PublicAccount`未获得授权的情况下使用

使用`PublicAccount.getCapability`函数获得借用能力

```纯文本
let cap = acc.getCapability<&Any>(/public/test)

```


使用`Capability.check`检查是否确实存在此资源

```纯文本
assert(cap.check())
```


使用`Capability.borrow`借用此资源

```纯文本
let resRef = cap.borrow() // resRef 这时候被推断为 &Any? 类型
```


#### `AuthAccount`已获得授权的情况下使用

使用`AuthAccount.borrow`借用此资源

```纯文本
let resRef = cap.borrow(/public/test) // resRef 这时候被推断为 &Any? 类型
```


### 取出资源

使用`AuthAccount.load`取出资源

```纯文本
let res <- acc.load<@Any>(/storage/test) // res 这时候被推断为 @Any? 类型
```


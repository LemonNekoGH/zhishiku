# Cadence
<p id="iRebGsJMGKeeG4Xakq2HFz">

Cadence 是 Flow 区块链官方发明的一种合约语言，只能运行在 Flow 虚拟机上。

</p>


<p id="jxKJdtC6osoC9eHXzVACuB">

## 值转换到 Go 时的注意事项

</p>


<p id="5v1Uuq8KsGBkwwTd8ZNDLt">

Cadence 里的 Path 在 ToGoValue() 的返回值是 nil，应该使用 String() 方法

</p>


<p id="9X4jQv45j2Jh6SahMAAMei">

## 合约

</p>


- 更新时不会重新调用 init 函数，东西不会丢


<p id="nMZvbejBMCLypLooMTm4rv">

## 资源

</p>


- 资源不可以在查询脚本和交易脚本中创建




- 在数组中的资源变量定义时要把`@`移动至最外层，Map 也是一样
	<p id="uRTW3LhgZEDApSL4GvdhNq">
	
	```纯文本
	pub var anArray: [[[@Res]]] // 错误
	pub var anArray: @[[[Res]]] // 正确
	```
	
	
	</p>


- 资源可以在交易过程中临时没有所有者，所以有些时候触发的事件里面的所有者参数为空






- 资源内嵌在另一个资源里时，另一个资源需要在销毁时把这个资源销毁
	<p id="oKmu5dnuhZDMvNhHXZwpSG">
	
	如下代码，`AResourceEmbeddedInAResource`资源需要在析构函数中明确的把`ForEmbeddedR`销毁
	
	</p>
	<p id="aKrxVcf9oY2toBVn3KH6tA">
	
	```text
	    pub resource ForEmbeddedR {
	        pub var myName: String
	
	        init() {
	            self.myName = "LemonNeko"
	        }
	    }
	    
	    pub resource AResourceEmbeddedInAResource {
	        pub var forEmbedded: @ForEmbeddedR
	
	        init() {
	            self.forEmbedded <- create ForEmbeddedR()
	        }
	
	        destroy() {
	            destroy self.forEmbedded
	        }
	    }
	```
	
	
	</p>


<p id="8s3gPPC3skDTz6WwfXTgi8">

## 查询脚本

</p>


- 查询脚本可以调用会修改状态的函数，但是执行完成后状态会回滚


<p id="oGh43wunMpDMhUinX5JpGg">

## 函数

</p>


- 判断函数是否需要用交易脚本调用
	1. 有资源转移，也就是有`ElementTypeUnaryExpression`类型的表达式
	1. 合约成员被赋值，合约成员的成员被赋值也算


<p id="8pQGRvxHaz5MC6Qznkg4fS">

## 事件

</p>


<p id="irtfdgzTSe4qurCuNswk7d">

事件用于在交易中触发，可以用于记录必要信息

</p>


- 不可以是顶层成员


- 不可以在查询脚本或者交易脚本中触发


<p id="ryj3vnpAygy1zonCaQz6KL">

## 存储空间

</p>


<p id="rCmPvp997pCCkFnSuqAUcF">



</p>


<p id="v19S8Y2fVpMXJsrXq3QKRx">

每个区块链账号都可以存一定的数据，取决于这个账号拥有的 Flow 数量

</p>


<p id="5MpcbVvM7qEriYkEN9XVJi">

### 存入资源

</p>


<p id="c1gLZN6SjN4JsBAuUrLNxS">

使用`AuthAccount.save`函数，将资源存储到某个路径

</p>


<p id="mHBKteuN6GKTKr82ih4iCE">

```纯文本
acc.save(<- res, /storage/test)
```


</p>


<p id="iMtAopwtHxYq6xJX5UxPYh">

### 链接存储路径到公开路径

</p>


<p id="uQyrhEkWqs6VgFjcQWR7ve">

链接后可以让外部使用公开路径借用此资源

</p>


<p id="udj8tBAqTbZtCcTDKaUcWN">

使用`AuthAccount.link`函数，将某个公开路径链接到存储路径

</p>


<p id="nA4nZqDk9qJVuQRYrmzWjd">

```text
acc.link(/public/test, /storage/test)
```


</p>


<p id="fMBEpFeTC1zLgknTidMY5d">

### 借用资源

</p>


<p id="bhkGCSHkZkXFw7aRxkakf9">

#### `PublicAccount`未获得授权的情况下使用

</p>


<p id="5QtjtYnvMuHk61S1Li84Fi">

使用`PublicAccount.getCapability`函数获得借用能力

</p>


<p id="wt4s16KUargc73TnGVmZNv">

```纯文本
let cap = acc.getCapability<&Any>(/public/test)

```


</p>


<p id="b14ENWgL9itxBkiFQxX4G7">

使用`Capability.check`检查是否确实存在此资源

</p>


<p id="71zPMJFaGxH9wrvwoSLNSn">

```纯文本
assert(cap.check())
```


</p>


<p id="7ADvKfY1XZMezpDmRoY3aW">

使用`Capability.borrow`借用此资源

</p>


<p id="bmEchQtv2VPLNHNaa2DEbV">

```纯文本
let resRef = cap.borrow() // resRef 这时候被推断为 &Any? 类型
```


</p>


<p id="oioDXyp4qJnTmmdJt7qYzM">

#### `AuthAccount`已获得授权的情况下使用

</p>


<p id="bbdohXKee4KWLRAxBpJBnX">

使用`AuthAccount.borrow`借用此资源

</p>


<p id="ga2vJn6GJn6jhiHZVZ2vwq">

```纯文本
let resRef = cap.borrow(/public/test) // resRef 这时候被推断为 &Any? 类型
```


</p>


<p id="pTsaxJYY5XmUuk56YMZ7Xy">

### 取出资源

</p>


<p id="87ZKyo9N82j1i5V7b6CA9F">

使用`AuthAccount.load`取出资源

</p>


<p id="sCxKHh8txqdGnyf5BXKWMP">

```纯文本
let res <- acc.load<@Any>(/storage/test) // res 这时候被推断为 @Any? 类型
```


</p>



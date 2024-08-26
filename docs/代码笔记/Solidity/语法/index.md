# 语法
<p id="f1vTRcw2BJLq5L7RQfnQ6P">

## 导入

</p>


<p id="aGG6JfQPryZGDuAMRUUR3E">



</p>


<p id="jSqMi8o9QS8y4TpRHVpvD4">

Solidity 支持通过导入`import`语句来导入其它合约，可使用绝对路径和相对路径

</p>


<p id="9t47mThQukf3kBHkqcBPaW">

也能通过在编译时添加`--include-path`和`--base-path`来选择包含合约的路径

</p>


<p id="jKrcKhzW3rDcqoYoAt9Fg7">

如果

</p>


- 命令执行的位置在`/user/projects`


- `--include-path`为`/path/to/contracts`


- `--base-path`为`.`


- 导入的合约路径是`/Test.sol`


<p id="jvyawXoiHeWYVaKQmw7Kim">

最终拼接结果为`/user/projects/path/to/contracts/Test.sol`，编译器就从这个文件中读取内容了

</p>


<p id="3H1KKEkvSb4r1Epqm3qhpw">

## 函数

</p>


<p id="8NwosyaQdED5aPcBM7gv7F">

在合约中可以使用`function`关键字定义函数

</p>


<p id="hc3rX47e11QCH4B1L8LH9X">

语法

</p>


<p id="g7X2Dj25uGwoXHEhjo5hnG">

```纯文本
function <函数名称>(<参数列表>) <可见性> <状态可变性> [修饰符] returns(<返回值类型>) {
  <函数体>
}
```


</p>


<p id="jWz8ufDZWGYM9xdYpQvtnm">

### 可见性

</p>


- `private`只有合约内部可以调用


- `internal`合约内部可以调用，合约的子类也能调用，类似 Java 里面的`protected`


- `external`只有外部可以调用


- `public`任何地方可以调用


- 如果不写的话，默认可见性修饰符是`public`


<p id="w54a4E8eW4e8oJMPvfJEJb">

### 状态可变性

</p>


<p id="6k4yJhCreP9DM9qTZ41WyV">

修改合约状态的操作：触发事件，修改合约内变量，创建新合约，发送货币

</p>




- `pure`不可读取合约状态，不可修改合约状态，调用时不消耗 gas
	<p id="7QE6djPJcmRSniH256fegs">
	
	当要求它是纯函数，输入相同时输出就一定相同时，可能可以标记为`pure`，比如纯计算这样的工具函数。
	
	</p>




- `view`可以读取合约状态，不可修改合约状态，调用时不消耗 gas
	<p id="4Hx8M8PsXdTqN8iMJgNedY">
	
	可以直接调用，因此`msg.sender`并不会是你的地址，应当添加一个参数让用户传入
	
	</p>


<p id="vpNzX1JGUPosaumsJ5yqLV">

### 变量修饰符

</p>


- storage


- memory


- calldata


<p id="fosFV8ypqNWAb36iiDHv4a">

## 函数修饰符

</p>


<p id="iEhgxxCC112YHFFewcwb36">

可以使用`modifier`关键字定义一个函数修饰符，被修饰的函数将会在执行前或执行完之后再执行修饰符的代码，类似面向切面编程。

</p>


<p id="7bqAgBZuFeQbGctGDnaomX">

## 事件

</p>


<p id="4nk75YbnrXHzZuQsNNeBXt">

在合约中可以使用`event`关键字定义事件

</p>


<p id="pYk35nZvAvfWWcTHeqEfFU">

```text
contract Sample {
  event Test();
  
  function emitTest() public {
    emit Test();
  }
}
```


</p>


<p id="as93BWFh22EuQ57wQHzkuq">

## 其它

</p>


- 可以通过`msg.sender`获取到函数调用者的






- 获取字符串长度
	<p id="hQeJyr5wX6Bvq4799axJVt">
	
	可以先转换成 bytes 然后获取长度
	
	</p>
	<p id="h5yEBjZZnFg9FKEEMKStqq">
	
	```纯文本
	function test(string str) returns(uint) {
	  return bytes(str).length;
	}
	```
	
	
	</p>




- 当条件不满足函数的执行条件时，可以使用`revert()`，`assert()`和`require()`来回滚交易
	- `revert()`不包括条件检查，更推荐使用`require()`
	- `assert()`不会返还手续费
	<p id="7UH3rKJWCJp6Bu5MroXjjz">
	
	```纯文本
	function setUsername(string memory name) {
	  if (bytes(name).length < 3) revert('username is too short');
	  // 或
	  require(bytes(name).length >= 3, 'username is too short');
	}
	```
	
	
	</p>


<p id="mw53Drzt1pTxhomnNXXhDf">

## 踩过的坑

</p>




- 为合约生成 Go 绑定代码
	<p id="3YbdmRyhubKTHr75DehRqA">
	
	<img src="./assets/image0.jpe" width="790.000000" height="359.000000">
	
	</p>


<p id="iiWjxeAnDDDoyB2WL4J4Pn">



</p>



# 语法
## 导入



Solidity 支持通过导入`import`语句来导入其它合约，可使用绝对路径和相对路径

也能通过在编译时添加`--include-path`和`--base-path`来选择包含合约的路径

如果

- 命令执行的位置在`/user/projects`

- `--include-path`为`/path/to/contracts`

- `--base-path`为`.`

- 导入的合约路径是`/Test.sol`

最终拼接结果为`/user/projects/path/to/contracts/Test.sol`，编译器就从这个文件中读取内容了

## 函数

在合约中可以使用`function`关键字定义函数

语法

```纯文本
function <函数名称>(<参数列表>) <可见性> <状态可变性> [修饰符] returns(<返回值类型>) {
  <函数体>
}
```


### 可见性

- `private`只有合约内部可以调用

- `internal`合约内部可以调用，合约的子类也能调用，类似 Java 里面的`protected`

- `external`只有外部可以调用

- `public`任何地方可以调用

- 如果不写的话，默认可见性修饰符是`public`

### 状态可变性

修改合约状态的操作：触发事件，修改合约内变量，创建新合约，发送货币

- `pure`不可读取合约状态，不可修改合约状态，调用时不消耗 gas

- `view`可以读取合约状态，不可修改合约状态，调用时不消耗 gas

### 变量修饰符

- storage

- memory

- calldata

## 函数修饰符

可以使用`modifier`关键字定义一个函数修饰符，被修饰的函数将会在执行前或执行完之后再执行修饰符的代码，类似面向切面编程。

## 事件

在合约中可以使用`event`关键字定义事件

```text
contract Sample {
  event Test();
  
  function emitTest() public {
    emit Test();
  }
}
```


## 其它

- 可以通过`msg.sender`获取到函数调用者的

- 获取字符串长度

- 当条件不满足函数的执行条件时，可以使用`revert()`，`assert()`和`require()`来回滚交易

## 踩过的坑

- 为合约生成 Go 绑定代码



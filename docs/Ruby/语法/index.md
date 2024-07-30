
<p id="7K5a9C5pecxBSwEAa9L7b7">

Ruby 是一个多范式强类型动态类型语言，下面是`Ruby`语法字典

</p>

<p id="qRPgdzHo9aZaYLNDExM8Rz">



</p>

<p id="2mokZ2CjYw14PhXKbQtgrX">

## 数据类型

</p>

<p id="tonBFBTGYzC2u4CKXGu6rk">

字符串类型

</p>

<p id="4EiVEb1mQcTSFhgcNUxN5B">

```Ruby
a = 'hello'
b = "world"

```


</p>

<p id="asWU5vUKU7LoGcs4Aiog94">

数字类型

</p>

<p id="wb11L3VCS1T4QBwLDzyL42">

```Ruby
a = 1
b = 1.1
c = -1
d = 1.1e15
```


</p>

<p id="pJWYHe4Zv5Z3k5n8H8Cp7L">

布尔值

</p>

<p id="iBkCBScmUqk9QBdMVPekXY">

```Ruby
a = true
b = false
```


</p>

<p id="fHNx3FDGuTyZYxu3nU16Dr">

数组类型

</p>

<p id="9ResMeoWKZgZuMzDaw45Cg">

```Ruby
a = [ 'hello', 'world', 15, false ]
```


</p>

<p id="aWD3nyfo5wHY1kctcKWuR7">

哈希类型：尚未理解，暂时不写

</p>

<p id="8gYcp7hL8gggBbxrjT5Ksw">

符号类型，类似`Python`中的字典，`JavaScript`中的自定义对象

</p>

<p id="gjpNKJ7tQy1EtyrTd5YjG2">

```Ruby
a_dic = { :foo=>'bar' }
puts a_dic[:foo]
# outputs: bar
# 或者也可以用另一种更易懂的写法
a_dic = { foo:'bar' }

```


</p>

<p id="6pq1FoH7UeYxk5fjhxjM1W">

## 标准输出函数

</p>

<p id="6EG3gm35LexRXgdzF8DUcj">

```Ruby
print "hello" # 会打印一个 hello
puts "hello" # 会打印一个 hello\n，相当于 kotlin 中的 println
p "hello" # 会打印 "hello" 这个对象的地址，以及成员等信息
```


</p>

<p id="fjhmzKghD6Qa3CAJyTpjVC">

## 变量定义

</p>

<p id="dpP7rQDMfEn9PfRbHQg5zn">

Ruby 定义变量时不需要`var``let`

</p>

<p id="p25sW1CGgAAWp1bm5BWtEL">

```Ruby
$a = 15 # 定义了一个全局变量 a 并赋值为 15，它将在程序的任意位置可用
@b = 15 # 定义了一个实例变量 b 并赋值为 15，如果作为脚本运行，它将在程序的任意位置可用，如果在类中定义，它只能在类中使用
c = 15 # 定义了一个本地变量 c 并赋值为 15，它只能在所在的作用域中可用
```


</p>

<p id="cCAT246ogntq7KGRwnhPH2">

## 函数定义

</p>

<p id="bsUcZTuVodMgxBLuC62znp">

这里定义了一个名为`aFunction`的函数，函数输出了一个文本`hello`

</p>

<p id="i3mvYLqD9CPmuXxT6rjhAs">

```Ruby
def aFunction
  puts "hello"
end
```


</p>

<p id="9SKdbT6T8MYDdetAPftsVD">

`Ruby`的函数永远具有返回值，如果函数中不包含`return`关键字，那么最后一个语句的执行结果就这个函数的返回值，如果最后一条语句的执行结果为`nil`那么这个函数也返回的是`nil`

</p>

<p id="te8FBjjJJj7GJ8S7ASQqfE">

```Ruby
def printAndAppendHello(str)
  puts "#{str}Hello"
end
```


</p>

<p id="5ssM3CNWmqp1su26bQiTe8">

这里定义了一个名为`printAndAppendHello`并接收一个参数，函数将`str`与`Hello`合并在一起然后输出

</p>

<p id="jMXstbpvofrsrTtjdwTP5D">

函数可以接收函数作为参数，也可以接收一个`lambda`作为参数

</p>

<p id="x5oJ39NsXFpyAgf6seZbEk">

```Ruby
# 接收函数作为参数
def invokeFun(fn)
  fn()
end
# 接收 lambda 作为参数
def invokeFun2
  yield
end

invokeFun2 do
  puts "hello"
end
```


</p>

<p id="hgVstePrgB4vbJ39x1HLq8">

## 流程控制

</p>

<p id="nUaiNxB4FNzjpDhPyAGroM">

`if`语句，`then`关键字是可选的

</p>

<p id="5XHZkCYHWaVdKQcRBWdedH">

```Ruby
def greaterOrEqualOrLess10(num)
  if num > 10 then
    puts "greater"
  elsif num == 10
    puts "equal"
  else
    puts "less"
  end
end

greaterOrEqualOrLess10(11) # greater
greaterOrEqualOrLess10(10) # equal
greaterOrEqualOrLess10(9) # less

```


</p>

<p id="7CzsB75yjAyRdt6hKxog7B">

`if`表达式，如果后面的表达式成立则运行前面的表达式

</p>

<p id="i3tkWCqvL3qSYd3Mcayun4">

```Ruby
a = 10
b = 9
puts "greater" if a > b # greater
puts "greater" if a < b # 不执行

```


</p>

<p id="kD61qzX1iQ2VJtUWmAu8Hy">

`unless`语句

</p>

<p id="rzndSu3VHe9kTEjN8NPhR6">

```Ruby
def greaterOrLess10(num)
  unless num > 10 # 相当于 if num <= 10
    puts "less"
  else
    puts "greater"
  end
end

greaterOrEqualOrLess10(11) # greater
greaterOrEqualOrLess10(9) # less
```


</p>

<p id="jwiuVUgvPveQJtupuzsxKC">

`for`语句

</p>

<p id="hsLHu9SMoraHBpoJkhYiyA">

```Ruby
for i in array
  puts i
end
```


</p>

<p id="hGwnWeP3AHwr7X9WgKGDh7">

## 类定义

</p>

<p id="pnUBv7kMoTgapyNbpcq2qg">

```Ruby
class Person
  def initialize(name) # 构造方法
    @name = name
  end
end
```


</p>

<p id="oFLedWdgrpYTirT9yQs7c7">

这里定义了一个名为`Person`的类，并且在构造时接收一个参数并将它赋值为成员变量`@name`

</p>

<p id="9WfTiCssmy65ATTkUqAuf4">

```Ruby
class Student < Person
end
```


</p>

<p id="jDuhRGR6jRKwTWeDV89YTV">

这里定义了一个名为`Student`的类，并且继承`Person`类

</p>

<p id="2urXu86k6uz39ab7RC7seQ">

```Ruby
 class Person
  attr_accessor :name # 访问器
  def initialize(name) # 构造方法
    @name = name
  end
end
```


</p>

<p id="ekBvk763hqi2czjpQgBzip">

这里为`@name`成员变量添加了一个访问器，可以在类外部写入或者读取`@name`

</p>

<p id="ifc82qAZ8PGKDuZcGRHXX2">

```Ruby
puts Student.new("aria").name
# outputs: aria
```


</p>

<p id="2kTutyt2a8eXGYbMZXoyft">

现在可以构造一个`Student`的实例并且打印成员变量`@name`

</p>

<p id="83V8Pc8XCnp9rnRweau2Dj">

```Ruby
class Person
  def self.whoAmI # 定义静态方法
    puts 'human'
  end
end
```


</p>

<p id="efaZDrTeRM97FK9VKWDMV3">

## 模板语法

</p>

<p id="3P2VeAvxRJ9fLmDPDkb5SH">

```Ruby
str = 'Hello'
puts "#{str} world"
# outputs: Hello world
```


</p>

<p id="2JmtVtrsvE7p4JEE1HpQWg">

这种语法仅可在双引号包围的字符串中使用，`rubocop linter`一般不允许出现双引号字符串，但是这样的模板字符串是被允许的

</p>

<p id="5Qe3nSo8tDmahcs3VEvPNp">

```Ruby
str = 'Hello'
puts('%{str} world' % { str: })
# outputs: Hello world

```


</p>

<p id="4ajFb2pdMvueLEGRv1NMvy">

这样的语法可以在单引号包围的字符串中使用，但是`rubocop`会将它优化成`format`函数调用 ↓

</p>

<p id="uNfJViGeRn4C2MMaSedamH">

```Ruby
puts(format('%<str>s world', str:))
```


</p>

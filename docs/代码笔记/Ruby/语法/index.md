# 语法
Ruby 是一个多范式强类型动态类型语言，下面是`Ruby`语法字典



## 数据类型

字符串类型

```Ruby
a = 'hello'
b = "world"

```


数字类型

```Ruby
a = 1
b = 1.1
c = -1
d = 1.1e15
```


布尔值

```Ruby
a = true
b = false
```


数组类型

```Ruby
a = [ 'hello', 'world', 15, false ]
```


哈希类型：尚未理解，暂时不写

符号类型，类似`Python`中的字典，`JavaScript`中的自定义对象

```Ruby
a_dic = { :foo=>'bar' }
puts a_dic[:foo]
# outputs: bar
# 或者也可以用另一种更易懂的写法
a_dic = { foo:'bar' }

```


## 标准输出函数

```Ruby
print "hello" # 会打印一个 hello
puts "hello" # 会打印一个 hello\n，相当于 kotlin 中的 println
p "hello" # 会打印 "hello" 这个对象的地址，以及成员等信息
```


## 变量定义

Ruby 定义变量时不需要`var``let`

```Ruby
$a = 15 # 定义了一个全局变量 a 并赋值为 15，它将在程序的任意位置可用
@b = 15 # 定义了一个实例变量 b 并赋值为 15，如果作为脚本运行，它将在程序的任意位置可用，如果在类中定义，它只能在类中使用
c = 15 # 定义了一个本地变量 c 并赋值为 15，它只能在所在的作用域中可用
```


## 函数定义

这里定义了一个名为`aFunction`的函数，函数输出了一个文本`hello`

```Ruby
def aFunction
  puts "hello"
end
```


`Ruby`的函数永远具有返回值，如果函数中不包含`return`关键字，那么最后一个语句的执行结果就这个函数的返回值，如果最后一条语句的执行结果为`nil`那么这个函数也返回的是`nil`

```Ruby
def printAndAppendHello(str)
  puts "#{str}Hello"
end
```


这里定义了一个名为`printAndAppendHello`并接收一个参数，函数将`str`与`Hello`合并在一起然后输出

函数可以接收函数作为参数，也可以接收一个`lambda`作为参数

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


## 流程控制

`if`语句，`then`关键字是可选的

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


`if`表达式，如果后面的表达式成立则运行前面的表达式

```Ruby
a = 10
b = 9
puts "greater" if a > b # greater
puts "greater" if a < b # 不执行

```


`unless`语句

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


`for`语句

```Ruby
for i in array
  puts i
end
```


## 类定义

```Ruby
class Person
  def initialize(name) # 构造方法
    @name = name
  end
end
```


这里定义了一个名为`Person`的类，并且在构造时接收一个参数并将它赋值为成员变量`@name`

```Ruby
class Student < Person
end
```


这里定义了一个名为`Student`的类，并且继承`Person`类

```Ruby
 class Person
  attr_accessor :name # 访问器
  def initialize(name) # 构造方法
    @name = name
  end
end
```


这里为`@name`成员变量添加了一个访问器，可以在类外部写入或者读取`@name`

```Ruby
puts Student.new("aria").name
# outputs: aria
```


现在可以构造一个`Student`的实例并且打印成员变量`@name`

```Ruby
class Person
  def self.whoAmI # 定义静态方法
    puts 'human'
  end
end
```


## 模板语法

```Ruby
str = 'Hello'
puts "#{str} world"
# outputs: Hello world
```


这种语法仅可在双引号包围的字符串中使用，`rubocop linter`一般不允许出现双引号字符串，但是这样的模板字符串是被允许的

```Ruby
str = 'Hello'
puts('%{str} world' % { str: })
# outputs: Hello world

```


这样的语法可以在单引号包围的字符串中使用，但是`rubocop`会将它优化成`format`函数调用 ↓

```Ruby
puts(format('%<str>s world', str:))
```


# 类型系统
## 进行类型断言

相关链接：[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor>)

通过`constructor`属性获得对象类型

```JavaScript
class A {}
class B {}
const a = new A()
console.log(a.constructor) // output: A
console.log(a.constructor.name) // output: 'A'
console.log(a.constructor === A) // output: true
```


但是这样的方式有缺陷，因为`constructor`属性是可以被赋值的

```JavaScript
a.consturctor = B
console.log(a.constructor) // output: B

```


所以可以换个方式，使用`instanceof`运算符

```JavaScript
console.log(a.constructor === B) // output: true
console.log(a instanceof B) // output: false
console.log(a instanceof A) // output: true
```


## 为对象定义一个只读属性

使用`Object.defineProperty`不会覆盖已经存在的属性的值，但是可以修改属性描述符

```JavaScript
'use strict'

const foo = { bar: 'hello' }
foo.bar = 'world'
Object.defineProperty(foo, 'bar', {
  writable: false
})
foo.bar = 'world' // Error: Cannot assign to read only property 'bar' of object '#<Object>'
```


可以将`configurable`设置为`false`来阻止属性描述符被修改，进一步保护只读属性

```JavaScript
Object.defineProperty(foo, 'bar', {
  configurable: false
})
Object.defineProperty(foo, 'bar', {
  configurable: true
}) // TypeError: Cannot assign to read only property 'bar' of object '#<Object>'

```




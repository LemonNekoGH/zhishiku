# 关键字
## `readonly`将属性标记为只读

```TypeScript
interface Foo {
    readonly bar: string
}

const foo: Foo = { bar: 'hello' }

foo.bar = 'world' // 编译失败：Cannot assign to 'bar' because it is a read-only property.

```


但是这种标记只在类型检查时生效，而且可以绕过

```TypeScript
function changeFoo(fooIn: { bar: string }) {
    fooIn.bar = 'world'
}

changeFoo(foo)

console.log(foo.bar) // output: world

```


当函数参数类型与实际参数一致，但是没有`readonly`标记时，编译不会失败，以上代码会被编译为：

```JavaScript
"use strict";
const foo = { bar: 'hello' };
function changeFoo(fooIn) {
    fooIn.bar = 'world';
}
changeFoo(foo);
console.log(foo.bar);
```


相关链接：

- 官方文档：[https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const](<https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const>)

- 在`JavaScript`中为对象定义一个只读属性：[https://www.wolai.com/h7JfxRyemVJJChiDzMHicD#wcFFf5wmGgTZSoRqJMFAry](<https://www.wolai.com/h7JfxRyemVJJChiDzMHicD#wcFFf5wmGgTZSoRqJMFAry>)

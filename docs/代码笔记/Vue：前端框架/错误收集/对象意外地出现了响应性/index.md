# 对象意外地出现了响应性
因为 JS 的对象都是引用

如果不希望传入的对象被修改，请拷贝后传入

```JavaScript
const objA = { name: 'A' }
const refObj = ref(objA)

refObj.value.name = 'B'
console.log(objA.name)
// output: B
```


如果将对象赋值给 ref，也会导致对象拥有响应性

```JavaScript
const objA = { name: 'A' }
const refObj = ref({ ...objA })

refObj.value = objA
refObj.value.name = 'B'
console.log(objA.name)
// output: B
```


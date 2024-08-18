# 对象意外地出现了响应性
<p id="tdSrNWSHZWcKsdzN6n38U9">

因为 JS 的对象都是引用

</p>

<p id="4XJfaPmnkEu5mtG7gEqPqQ">

如果不希望传入的对象被修改，请拷贝后传入

</p>

<p id="gAFwVyFr3KeydtX6W8XRni">

```JavaScript
const objA = { name: 'A' }
const refObj = ref(objA)

refObj.value.name = 'B'
console.log(objA.name)
// output: B
```


</p>

<p id="pJ9C3xrgs4oevK2Ras2KBi">

如果将对象赋值给 ref，也会导致对象拥有响应性

</p>

<p id="tbeqLdwmQeiehxV7BNRCU1">

```JavaScript
const objA = { name: 'A' }
const refObj = ref({ ...objA })

refObj.value = objA
refObj.value.name = 'B'
console.log(objA.name)
// output: B
```


</p>


<p id="jk1GrAn45T9HFbvffM2nRR">



</p>

<p id="ovUKHZrpEkC428QeMWerEf">

## Activator

</p>

<p id="jZgXghofszKdooifnp1C6j">

为某个类型创建实例，或者获取某个实例的引用

</p>

- `Activator.CreateInstance<T>()`，`Activator.CreateInstance(Type)`为某个类型创建实例

<p id="pQaXUZzUgwxg3yPWABsbQq">

## `Enum`枚举类型

</p>

<p id="3rW7nHzNUhfWsnXP2tKDnU">

### `Parse(string)`将字符串转为`Enum`实例

</p>

<p id="5Rf61cihtV6dXrvNuwkBfT">

所有的`Enum`都可以这样做

</p>

<p id="ww6vojW3wDxVisZkyJVupr">

```C#
public enum State {
  Idle,
  Moving,
  Running
}

State.parse("Idle") // State.Idle
```


</p>

<p id="rTi7EMr38UpukYvDAjfTit">

## <span style="color:#E91E2C;">!! 注意 !!</span>

</p>

- `Convert.FromHexString`方法不存在于`.NET Framework 4.8.1`

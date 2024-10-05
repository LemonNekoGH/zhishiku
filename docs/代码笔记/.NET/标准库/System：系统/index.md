# System：系统


## Activator

为某个类型创建实例，或者获取某个实例的引用

- `Activator.CreateInstance<T>()`，`Activator.CreateInstance(Type)`为某个类型创建实例

## `Enum`枚举类型

### `Parse(string)`将字符串转为`Enum`实例

所有的`Enum`都可以这样做

```C#
public enum State {
  Idle,
  Moving,
  Running
}

State.parse("Idle") // State.Idle
```


## <span style="color:#E91E2C;">!! 注意 !!</span>

- `Convert.FromHexString`方法不存在于`.NET Framework 4.8.1`

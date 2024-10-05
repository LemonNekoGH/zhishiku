# System.Reflection：反射


## `Type`类

通过任何值的`.GetType()`都可以获取此类型，它描述了一个类型，类似`Java`中的`Class`类

### `GetFields(int)`实例方法

获取某个类型拥有的字段，通过传入`BindingFlags.NonPublic | BindingFlags.Instance`可以获取私有字段和类字段



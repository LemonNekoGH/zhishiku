# 标准库
.NET 存在多种实现：

- .NET 5 及以上

- .NET Framework

- UWP

- Xamarin Android SDK

- Xamarin.iOS

- Xamarin.Mac

因此存在多种标准库，某些实现中会有其他实现中不存在的库，或者相同的库中的部分代码有丝毫区别。

从`.NET 5`以后，不再区分`.NET Core`和`.NET Framework`，如果需要平台特定库，可以设置特殊的`TargetFramework`，例如`net7.0-windows10.0.19041.0`表示使用`.NET 7`并附带`Windows Desktop`库

[System：系统](./System%EF%BC%9A%E7%B3%BB%E7%BB%9F/index.md)

[System.Threading：异步编程](./System.Threading%EF%BC%9A%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B/index.md)

[System.Windows.Threading（仅存在于 Windows Desktop）](./System.Windows.Threading%EF%BC%88%E4%BB%85%E5%AD%98%E5%9C%A8%E4%BA%8E%20Windows%20Desktop%EF%BC%89/index.md)

[System.Text.Json(.Serialization) 存在于 .NET 5 及以上版本](./System.Text.Json%28.Serialization%29%20%E5%AD%98%E5%9C%A8%E4%BA%8E%20.NET%205%20%E5%8F%8A%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC/index.md)

[System.Runtime.InteropServices：用于互操作](./System.Runtime.InteropServices%EF%BC%9A%E7%94%A8%E4%BA%8E%E4%BA%92%E6%93%8D%E4%BD%9C/index.md)

[System.Reflection：反射](./System.Reflection%EF%BC%9A%E5%8F%8D%E5%B0%84/index.md)

[System.IO.Ports (Windows Only)](./System.IO.Ports%20%28Windows%20Only%29/index.md)

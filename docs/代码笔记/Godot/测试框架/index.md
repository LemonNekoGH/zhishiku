# 测试框架
## [`GoDotTest`](<https://github.com/chickensoft-games/GoDotTest>)

本测试框架要求被测场景名称与被挂载脚本名称相同，要求测试类的名称为被挂载脚本名称 + "Test"，对文件位置没有要求

```Bash
dotnet build -c Debug <project.csproj>
godot --headless --run-test --quit-on-finish
```


可配合[GodotTestDriver](<https://github.com/derkork/godot-test-driver>)一起进行集成测试

可配合[Shouldly](<https://github.com/shouldly/shouldly>)来进行断言

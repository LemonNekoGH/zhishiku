# 可执行工具包
## `format`代码格式化工具

类似`gofmt`，需要安装之后才能使用

```powershell
dotnet tool install -g dotnet-format # 安装
dotnet format -v diag <*.sln> # 使用
```


## `coverlet`覆盖率收集工具



```bash
dotnet tool install -g coverlet.console
```


## `ef`EFCore 辅助工具



```Bash
dotnet ef migrations add <迁移名称>
# 会自动寻找项目下的 DbContext 子类然后根据现有的数据库结构生成迁移代码
```




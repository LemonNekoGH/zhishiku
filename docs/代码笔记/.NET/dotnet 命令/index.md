# dotnet 命令
## `tool`用于管理工具

```bash
dotnet tool install <pkg-name>
```


## `add package`为当前工程添加包

```bash
dotnet add package coverlet.collect
```


## `build`构建工程

```bash
dotnet build -c <配置名称> <*.sln>
```


## `test`运行测试用例

```Bash
dotnet test <project.csproj>
dotnet test <project.csproj> --collect "<collector package>"
```


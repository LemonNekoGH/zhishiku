# 可执行工具包
<p id="52eELwVpspMpfjETdV7A8">

## `format`代码格式化工具

</p>

<p id="sT9x4crvhnbthPrv1UCVZc">

类似`gofmt`，需要安装之后才能使用

</p>

<p id="7yR1z9y8GeXnTho8GBsfHt">

```powershell
dotnet tool install -g dotnet-format # 安装
dotnet format -v diag <*.sln> # 使用
```


</p>

<p id="htGnZRW8SGYYEZz98wcqce">

## `coverlet`覆盖率收集工具

</p>

<p id="he8QKXtUfh5ZoFyFeMGDHG">



</p>

<p id="jBtTaYxCLn98T1FzPRgXfD">

```bash
dotnet tool install -g coverlet.console
```


</p>

<p id="bJA3hcgSCQRukKzGwqaxEY">

## `ef`EFCore 辅助工具

</p>

<p id="mRuVAv5em9oNKF1Vrmd1n8">



</p>

<p id="oXSDn6Jiw7bPiLhyw9JJy3">

```Bash
dotnet ef migrations add <迁移名称>
# 会自动寻找项目下的 DbContext 子类然后根据现有的数据库结构生成迁移代码
```


</p>

<p id="hqHo79hJcDMcpWuKmLqfW7">



</p>

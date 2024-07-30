
<p id="68gm52bgJrgTP6ZFzxXLTB">

## `tool`用于管理工具

</p>

<p id="guQGrnu6h8GnUrZaGkFw2s">

```bash
dotnet tool install <pkg-name>
```


</p>

<p id="rQWnRXDrYL9aYAYWDeZzi9">

## `add package`为当前工程添加包

</p>

<p id="3JvfK1AZKSHi72Yk4Fg9Kw">

```bash
dotnet add package coverlet.collect
```


</p>

<p id="2z3SBiF7EEx2aDHs64WFSz">

## `build`构建工程

</p>

<p id="jhbVAs4VZ7FJkNoP1i9P5Z">

```bash
dotnet build -c <配置名称> <*.sln>
```


</p>

<p id="ixzgVhevJtP4MdVYxPuLoD">

## `test`运行测试用例

</p>

<p id="uFb91Uk65U4RRiJyMfYypF">

```Bash
dotnet test <project.csproj>
dotnet test <project.csproj> --collect "<collector package>"
```


</p>

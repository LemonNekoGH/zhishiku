# 为不同平台编译依赖 libpq 的应用
## `Windows`

::: tip ⚠️
`arm64`平台上没有官方编译的`postgresql`
:::

在`Windows`上没有独立存在的`libpq`库，需要完整安装`postgresql`来获取此库

可以使用`Chocolatey`进行安装：

```Bash
PS> choco install postgresql -y
```


安装完成之后需要设置环境变量，路径中的`16`表示主版本：

```Bash
PQ_LIB_DIR=C:\Program Files\PostgreSQL\16\lib
```


## `macOS`

参考：[https://stackoverflow.com/questions/70313347/ld-library-not-found-for-lpq-when-build-rust-in-macos](<https://stackoverflow.com/questions/70313347/ld-library-not-found-for-lpq-when-build-rust-in-macos>)

使用`brew`进行安装即可：

```Bash
% brew install libpq
```


在`M`系列芯片（arm64）上需要额外一个步骤才能使`libpq`在链接时被找到

```Bash
% brew link --force libpq
```


## `Linux`

### `Ubuntu`

使用`apt`进行安装即可：

```Bash
$ sudo apt update && apt install libpq-dev -y
```




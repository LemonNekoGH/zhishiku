
<p id="xcPJysR1mej5SdLsuZgcrP">

## `Windows`

</p>

<p id="jBEaz5PgHxbsZecRPuzG8h">

::: tip ⚠️
`arm64`平台上没有官方编译的`postgresql`
:::

</p>

<p id="tVekMjjN8tVBPXHpSZc3DE">

在`Windows`上没有独立存在的`libpq`库，需要完整安装`postgresql`来获取此库

</p>

<p id="kY2cyLfVcTqkRp6wHZJNyL">

可以使用`Chocolatey`进行安装：

</p>

<p id="hSCb2ggq8r1xV9mtuJHpob">

```Bash
PS> choco install postgresql -y
```


</p>

<p id="fPn3v3CUchSq7Tzo3VVyCq">

安装完成之后需要设置环境变量，路径中的`16`表示主版本：

</p>

<p id="9LjneuvZCjsJ4FKc6QoBV7">

```Bash
PQ_LIB_DIR=C:\Program Files\PostgreSQL\16\lib
```


</p>

<p id="vMET7Kh7RF3KcoT1oWEJBp">

## `macOS`

</p>

<p id="nHdx4zXAzxyenJ4GXJ8eRa">

参考：[https://stackoverflow.com/questions/70313347/ld-library-not-found-for-lpq-when-build-rust-in-macos](<https://stackoverflow.com/questions/70313347/ld-library-not-found-for-lpq-when-build-rust-in-macos>)

</p>

<p id="aY6NTkVsmhoHC39oN13Jhc">

使用`brew`进行安装即可：

</p>

<p id="m1pMLE9d7hks4R6iJUxwSr">

```Bash
% brew install libpq
```


</p>

<p id="iN7rNX7gtrJ3FBwTQ9afra">

在`M`系列芯片（arm64）上需要额外一个步骤才能使`libpq`在链接时被找到

</p>

<p id="rondPPxdQHDWgbVdLYu17N">

```Bash
% brew link --force libpq
```


</p>

<p id="xp1GknW5RmiBKQgY2t95h1">

## `Linux`

</p>

<p id="gCh7uBdZBdN81GFM3eCc4K">

### `Ubuntu`

</p>

<p id="Qftzfe5FqfDRCHBEiSBXK">

使用`apt`进行安装即可：

</p>

<p id="m2s4XoW2Zi9bsvgA6YwzSy">

```Bash
$ sudo apt update && apt install libpq-dev -y
```


</p>

<p id="7NKcjpAYVf6phHhyCjGXM2">



</p>

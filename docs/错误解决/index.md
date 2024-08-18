# 错误解决
<p id="eUj6YvqRHdtjadvt2WaHEe">

## `ld`找不到`-lz`

</p>

<p id="nhSvWBW3krWN6VRk2pYpt5">

[https://stackoverflow.com/questions/3373995/usr-bin-ld-cannot-find-lz#:~:text=11 Answers Sorted by%3A 185,dev got me past it](<https://stackoverflow.com/questions/3373995/usr-bin-ld-cannot-find-lz#:~:text=11 Answers Sorted by: 185,dev got me past it>)

</p>

<p id="xhihYJwEDdENH7jRwtkm3M">

```text
/usr/bin/ld.bfd: cannot find -lz: No such file or directory
```


</p>

<p id="3nn5VweeZtRbj8NekZeiJy">

`-lz`通常指的是`zlib`压缩库，这是一个广泛使用的压缩和解压缩库。

</p>

<p id="qdgo1bvZZqxjGqtUhDdtoy">

可以通过以下命令安装

</p>

<p id="wJ2beJkxWAeN2k48CRXkYi">

```Bash
# Debian, Ubuntu...
$ sudo apt-get install zlib1g-dev
# Red Hat
$ sudo yum install zlib-devel
# macOS
brew install zlib
```


</p>

<p id="gCWqKWunhc1bURhKXxLuPd">



</p>

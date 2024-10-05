# 错误解决
## `ld`找不到`-lz`

[https://stackoverflow.com/questions/3373995/usr-bin-ld-cannot-find-lz#:~:text=11 Answers Sorted by%3A 185,dev got me past it](<https://stackoverflow.com/questions/3373995/usr-bin-ld-cannot-find-lz#:~:text=11 Answers Sorted by: 185,dev got me past it>)

```text
/usr/bin/ld.bfd: cannot find -lz: No such file or directory
```


`-lz`通常指的是`zlib`压缩库，这是一个广泛使用的压缩和解压缩库。

可以通过以下命令安装

```Bash
# Debian, Ubuntu...
$ sudo apt-get install zlib1g-dev
# Red Hat
$ sudo yum install zlib-devel
# macOS
brew install zlib
```




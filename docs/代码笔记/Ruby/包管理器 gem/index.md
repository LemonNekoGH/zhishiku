# 包管理器 gem
它会将包全局安装到系统中，因此更适合用来安装可执行的程序

## 命令

### `install`

安装一个包

### `sources`

管理下载源，比如将源改成 ruby-china

```Bash
$ gem sources --add https://gems.ruby-china.com/
```


然后移除自带的源

```Bash
$ gem sources --remove https://rubygems.org/
```


然后列出当前使用的源

```Bash
$ gem sources -l

```


它应当输出

```Bash
*** CURRENT SOURCES ***

https://gems.ruby-china.com/
```




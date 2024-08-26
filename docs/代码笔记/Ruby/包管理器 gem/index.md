# 包管理器 gem
<p id="j2S6u5KTEAFY2EYnY1Md3s">

它会将包全局安装到系统中，因此更适合用来安装可执行的程序

</p>


<p id="sdvviZosYAq7gmMQrgN8nj">

## 命令

</p>


<p id="wLLdmP5gBXSxA6o1YUK5f1">

### `install`

</p>


<p id="1tAZ7zBT15o9smR9Cy6SRD">

安装一个包

</p>


<p id="b1oLdYVKsAek7WKgDn67H5">

### `sources`

</p>


<p id="2dguVigQhErQnsQHmAvNDg">

管理下载源，比如将源改成 ruby-china

</p>


<p id="aix3Q3fi7uhLgxba4fr2PY">

```Bash
$ gem sources --add https://gems.ruby-china.com/
```


</p>


<p id="sTuyGPSajaXgMwq3mzCZrD">

然后移除自带的源

</p>


<p id="pbf9kpAt8Gkgp4VMkNhf7S">

```Bash
$ gem sources --remove https://rubygems.org/
```


</p>


<p id="xwpa9qNDt4benjve2aSqkw">

然后列出当前使用的源

</p>


<p id="3BbwSu9e5juuv98H4wBhiz">

```Bash
$ gem sources -l

```


</p>


<p id="tpz3MCoPEJEFoWdW8C2BtV">

它应当输出

</p>


<p id="uazdNKhbZ4g89asHkKfqx7">

```Bash
*** CURRENT SOURCES ***

https://gems.ruby-china.com/
```


</p>


<p id="e16v3oZyhj9e9BWyVd9KWE">



</p>



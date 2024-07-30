
<p id="24VrvsCmgLmyB3tqUYHX77">

可以把文件内置到字符串变量中，Go 1.17 不再支持嵌入相对路径

</p>

<p id="1uYMoo8t4Y6eKGnxTvcuKW">



</p>

<p id="rxfoHUCospSb91VnrA1ZJv">

```Go
//go:embed hello.txt
var hello string
```


</p>

<p id="mPo72F8KkGgZfTuC9pGr2H">

注意事项：不能嵌入上一级目录（出于安全考虑），不要在注释开头加空格

</p>

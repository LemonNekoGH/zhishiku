# embed：内嵌包的使用
可以把文件内置到字符串变量中，Go 1.17 不再支持嵌入相对路径



```Go
//go:embed hello.txt
var hello string
```


注意事项：不能嵌入上一级目录（出于安全考虑），不要在注释开头加空格

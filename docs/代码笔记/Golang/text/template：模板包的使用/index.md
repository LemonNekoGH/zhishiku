# text/template：模板包的使用


## 变量定义

```纯文本
{{ $a := "test" }}
{{ $a }}
```


结果

```纯文本
test
```


## 流程控制 · 判断

语法

```纯文本
{{ if [expression] }}
TEXT
{{ else }}
TEXT2
{{ end }}
```


例子：A 比 B 大时渲染 TEXT，否则渲染 TEXT2

```纯文本
{{ $A := 2 }}{{ $B := 1 }}
{{ if gt $A $B }} {{- /*请注意，类似 gt 这样的运算符属于函数，所以应该按照函数的写法来使用*/ -}}
TEXT
{{ else }}
TEXT2
{{ end }}
```


结果

```纯文本
TEXT
```


## 流程控制 · 循环

语法

```纯文本
{{ range [argument] }}
TEXT
{{ end }}
```


例子：名为`Arr`的数组，内容是`[]string{"hello", "neko"}`

```纯文本
{{ range $i, $it := .Arr }}
{{$1}}{{$it}}
{{ end }}
```


结果

```纯文本
0hello
1neko
```


注意，在循环中无法访问到作用域之外的字段

```Go
// Go 结构体
type A struct{
  Field0 string
  Field1 []struct {
    Field2 string
  }
}
// 模板
{{ range .Field1 }}
{{ .Field0 }} <- 报错
{{ .Field2 }} <- 正常渲染
{{ end }}
```


## 函数

语法

```text
{{ <name> [arguments...] }}
```


## 注释

语法

```纯文本
{{- /*A comment*/ -}}
```


注释前后的`\n`也是无效的，所以单独一行注释不会导致渲染出空行

## 子模板

语法

```Go
{{define "Name"}}My name is: {{.Name}}{{end}}
{{template "Name" .}} {{- /*想要把当前对象传入子模板，可以用 . 号，不可以同时传入多个对象*/ -}}
```


如果我有这样一个结构体

```Go
type A struct {
  Name string
}

```


我实例化了这个结构体，Name 值为 LemonNeko

将这个模板编译并执行，传入这个结构体，输出应当是

```Go

My name is: LemonNeko
```




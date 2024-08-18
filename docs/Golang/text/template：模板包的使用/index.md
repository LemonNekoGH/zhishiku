# text/template：模板包的使用
<p id="uDQhfJxnJzRfL8kDXqP6PT">



</p>

<p id="8ucLGztfhEuR7MxuW39xfC">

## 变量定义

</p>

<p id="cXutvte1V7H9G6Jk6zP6D9">

```纯文本
{{ $a := "test" }}
{{ $a }}
```


</p>

<p id="jAc58mneZsmoSdtG2iNzJp">

结果

</p>

<p id="56gAfXeRtbXZwfb1eG7JnA">

```纯文本
test
```


</p>

<p id="eNp2RqmGYGiKbgt7tkJR4V">

## 流程控制 · 判断

</p>

<p id="di95DyV33Nmzi19a3zVZzA">

语法

</p>

<p id="sMKkS3KdbWFk3U4Q26Z8HJ">

```纯文本
{{ if [expression] }}
TEXT
{{ else }}
TEXT2
{{ end }}
```


</p>

<p id="xx5k6UQqbsaybsLbuGQNDv">

例子：A 比 B 大时渲染 TEXT，否则渲染 TEXT2

</p>

<p id="irC2iKUNsK4f4DbpkgcgJT">

```纯文本
{{ $A := 2 }}{{ $B := 1 }}
{{ if gt $A $B }} {{- /*请注意，类似 gt 这样的运算符属于函数，所以应该按照函数的写法来使用*/ -}}
TEXT
{{ else }}
TEXT2
{{ end }}
```


</p>

<p id="r5HsLNbuffuuRpo58t31QJ">

结果

</p>

<p id="64XZAtNa66xgZdpTFnHHTE">

```纯文本
TEXT
```


</p>

<p id="9rPDrPofqbSS1aEbnJkvcC">

## 流程控制 · 循环

</p>

<p id="7J6NHm65DFPfbxaT5LK33E">

语法

</p>

<p id="byDNiH6vs8z9khMcc9Zfg4">

```纯文本
{{ range [argument] }}
TEXT
{{ end }}
```


</p>

<p id="kQyMz7JQocXUAnAUdK4xLE">

例子：名为`Arr`的数组，内容是`[]string{"hello", "neko"}`

</p>

<p id="7omWhYpafGznUzzMPY7sBp">

```纯文本
{{ range $i, $it := .Arr }}
{{$1}}{{$it}}
{{ end }}
```


</p>

<p id="p3gkH2umov9Rp8tdVQxv66">

结果

</p>

<p id="nq8sDE34rhNmfc6q346nPe">

```纯文本
0hello
1neko
```


</p>

<p id="iXQfFZih4WZvFGDoJhW32k">

注意，在循环中无法访问到作用域之外的字段

</p>

<p id="sTTN2nbxbuRpNjj1Jxh1W9">

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


</p>

<p id="koGkUqJkDgjPbqebWcDaYX">

## 函数

</p>

<p id="tfnSg8VGay3xJpEPVeAVEG">

语法

</p>

<p id="x7nBaM8fEjJ8e69s52Lj62">

```text
{{ <name> [arguments...] }}
```


</p>

<p id="3GtFQ1R73LuEh6TZLnYmMM">

## 注释

</p>

<p id="7LCPzbwrx7hkXKz6US3u41">

语法

</p>

<p id="4G524pGZQizgh57ufQhmLg">

```纯文本
{{- /*A comment*/ -}}
```


</p>

<p id="f2ELR3oWFrEmZAwAAzmCtR">

注释前后的`\n`也是无效的，所以单独一行注释不会导致渲染出空行

</p>

<p id="dsrh3jnZWQsti94hgnH3Qk">

## 子模板

</p>

<p id="6hFsUTTfe4sgzeAH5Y71br">

语法

</p>

<p id="hxeFn8eRw4WSs2Cuim4fK4">

```Go
{{define "Name"}}My name is: {{.Name}}{{end}}
{{template "Name" .}} {{- /*想要把当前对象传入子模板，可以用 . 号，不可以同时传入多个对象*/ -}}
```


</p>

<p id="6p3dCg353LKqrnLAzf9fwC">

如果我有这样一个结构体

</p>

<p id="8fV3KBhP2H5MKgZf7AR7cW">

```Go
type A struct {
  Name string
}

```


</p>

<p id="37YXycstrVSzdY7ntsKT3i">

我实例化了这个结构体，Name 值为 LemonNeko

</p>

<p id="acDJfGP6yGCxBpgBpprQbX">

将这个模板编译并执行，传入这个结构体，输出应当是

</p>

<p id="v8vZy82sB5eP4CLmEm4nzc">

```Go

My name is: LemonNeko
```


</p>

<p id="ruNn2hGaf7J8vSMVPM4PT8">



</p>

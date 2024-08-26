# 测试
<p id="vxz3H1K7YozJjTCCVmVDCA">

## 清除测试缓存

</p>


<p id="8JBuZf2TaeMJJXmiPorY92">

Go 测试在运行通过后，会缓存结果，在检测到没有代码改动的情况下，下次会直接显示通过

</p>


<p id="p4UX41s7MHBQJcQ4Gj37xB">

可以使用以下命令清除缓存

</p>


<p id="2ZohRhCiGcFxhG4gSyMrGQ">

```Go
go clean -testcache
```


</p>


<p id="46n9YchW8Biw3uxbvmWxnw">

## 运行所有测试

</p>


<p id="abUi3fwTz9f9xkyeoEcdz1">

可以在项目根目录运行以下命令来跑完所有包里面的测试

</p>


<p id="oKaMASk9ANzNkvNC2mnpgP">

```Bash
go test $(go list ./...)
```


</p>


<p id="514Fz1fYFqMMSQRWHgMJ69">

其中`go list ./...`是列出当前目录下的所有包

</p>


<p id="g87Py7DgQq6BTxnCxq8n22">

没有在 cmd 和 powershell 中尝试

</p>


<p id="jL2wKRSfwHn3CCgc3NQntC">

## 踩过的坑

</p>


<p id="rrDt9fsGD5SxuzRXqfBc5m">

### 有一个测试在单独运行时正常，和包中的另一个测试一起运行时出错

</p>


<p id="85tPBehbBu7hpJ8bvv2tA2">

原因：函数 A 带有缓存，函数 B 依赖函数 A，在测试函数 A 时，A 产生了缓存，再测试 B 时，B 获得的是 A 的缓存，因此 B 没有获得期望的返回，B 测试无法通过

</p>


<p id="wktPDG9KR13UVFVsFAY6ho">



</p>


<p id="uH2jkrhage75VcpmnSkT25">

## 查看代码覆盖率

</p>


<p id="wgZBxwCW2nZed76EXhh8Ef">

Go VSCode 插件就可以做到，打开指令面板，选择`Go: Toggle Test Coverage In Current Package`就可以了，它会先运行一遍测试再显示覆盖率，可能会有点慢

</p>


<p id="6QAF6eqBbDWS7U5LpWTtHv">

## 基准测试

</p>


<p id="vC883SodQBFjkJ3pTCsm76">

当对性能要求比较严格时，需要运行的测试，需要更多的了解。

</p>


<p id="csrbaZdFtbcCAM2msAPERR">

## 示例

</p>


<p id="vUCSWWoEivYbjoMaiizQhz">

能显示在文档中的示例，如下：

</p>


<p id="55YEwNhWoJcKV8KmxdoEkp">

<img src="./assets/image0.png" width="844.000000" height="442.000000">

</p>


<p id="uSGADpQCbfhYcKo6iMziHr">

示例应当写在`*_test.go`文件中，也会被测试框架运行

</p>


<p id="9EpGgTzfN3FQsAj9bZVtme">



</p>


<p id="rDoAy4c4VgSAz3gTZmdSfd">

## 关于测试

</p>


- 数组中的元素，字段中包含 time.Time 时，从数据库中取出的结果是和存入时不同的，不要直接用 ElementsMatch 来比较



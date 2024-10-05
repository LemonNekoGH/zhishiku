# 包管理器
## 注意事项

请尽量使用小写包名，比如仓库是`github.com/LemonNekoGH/godence`也应该写成`github.com/lemonnekogh/godence`，打了新的 tag 之后可以马上根据[https://pkg.go.dev/about#best-practices-h2](<https://pkg.go.dev/about#best-practices-h2>)来检查自己的新版本能不能被下载

## 安装可以在命令行运行的 Go 包

可以使用`go install`安装可以在命令行运行的 Go 包，假如为了预览注释而安装 godoc 包。

```Bash
$ go install golang.org/x/tools/cmd/godoc@v0.1.12
```


其中`golang.org/x/tools/cmd/godoc`是包路径，`v0.1.12`是包的版本。

安装之后，运行`godoc`如果报`command not found`那就表示你的`$GOPATH/bin`没有被加入`PATH`环境变量中。

**注意：在 Go 1.8 之后，**`**GOPATH**`**不会被自动设定为**`**$HOME/go**`**，所以如果还是没有用，需要手动再设定**`**GOPATH**`，将它设定为你的 Go 安装目录，



## 包的版本

可以通过打 tag 来提交新的版本，比如 github.com/LemonNekoGH/godence 仓库的 v1.0.0，拉取时就能拉取到 github.com/LemonNekoGH/godence@v1.0.0

那有些包的路径后面为什么直接跟着 /v2 这样的后缀呢，因为他们直接修改了包的名称，拉取时会先看路径中有没有 /v3 这样的标记，然后优先拉取当前大版本中的最新版本，否则拉取没有任何标记匹配的最新版本

包名和版本之间的关系



## 私有仓库拉取

Go 1.19 已经可以使用 workspce 特性了





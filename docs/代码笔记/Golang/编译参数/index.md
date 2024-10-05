# 编译参数
## 隐藏 Windows 控制台界面

在编译时加入`-ldflags -Hwindowsgui`就好

## 构建时使用`-ldflags`进行变量注入

适合用来设置一些固定的程序属性，比如版本号

[https://github.com/LemonNekoGH/go-ldflags-inject-demo](<https://github.com/LemonNekoGH/go-ldflags-inject-demo>)

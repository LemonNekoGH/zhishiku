# X 窗口系统
X 窗口系统是一种很古老但依然被大量 Linux 发行版使用或兼容的窗口系统。

`XDG Desktop`关于桌面入口文件的标准



## 桌面图标

在`~/.local/share/applications`中创建一个`.desktop`文件，比如我们为`Godot`编辑器创建一个桌面图标，那么我们要创建一个`.desktop`，比如`godot.desktop`，内容如下：

```Bash
[Desktop Entry]
Type=Application
Name=Godot
Exec=/usr/local/bin/godot
```


（可选）通过运行命令来更新桌面数据库：

```Bash
$ update-desktop-database ~/.local/share/applications
```


### 问题解决

1. 在桌面启动应用时不会加载环境变量，因此要求从环境变量中读取内容的应用无法读取到环境变量

## 自定义协议

如果你希望你的程序能够处理你自定义的协议，比如`godot://`，你需要在`godot.desktop`文件中新增一行：

```Bash
MimeType=x-scheme-handler/godot
```


并且在`~/.local/share/applications/mimeapps.list`的`[Default Applications]`区域下加入这样一行：

```Bash
[Default Applications]
x-scheme-handler/godot=godot.desktop
```


添加完成后，可以尝试在浏览器的终端中输入`location.href="godot://project"`，可能会弹出这样的框：

<img src="./assets/image0.png" width="517.000000" height="212.000000">

`xdg-open`是一个软件包，它可以用于打开文件或者链接，因此它劫持了所有的自定义协议，如果点击`打开 xdg-open`之后依然没有反应，可能是配置错了。

# Chrome
## 陀螺仪模拟

Chrome 可以在开发者工具中打开传感器视图，模拟陀螺仪状态

## 调试 Android 上的 Chrome

1. 打开手机的开发者模式和 USB 调试

1. 连接手机和电脑

1. 进入`chrome://inspect/#devices`页面

1. 选择手机上打开的标签页，点击 inspect 开始调试

## 反反调试技巧

当遇到一开Devtools 就疯狂调试模式的网站时，只需要点左起倒数第二个图标，禁用所有断点即可

<img src="./assets/image0.png" width="256.000000" height="95.000000">

## 启动时指定配置文件（用户）

```JavaScript
path/to/chrome.exe --profile-directory="[配置文件名]" |--- 默认配置文件名Default，其它配置文件Profile [编号]，编号从1开始

```


## 暗色/亮色模式调试

windows按 ctrl + shift + p

mac按 command + shift + p

然后输入dark theme

## Chrome 在 macOS 上占用过大空间的解决方法



`2023/08/18`目前已经不在`/Applications/Google Chrome.app/Contents/Versions`，底下，而是在`/Applications/Google\ Chrome.app/Contents/Frameworks/Google Chrome Framework.framework/Versions`下，保留最近的三个版本即可



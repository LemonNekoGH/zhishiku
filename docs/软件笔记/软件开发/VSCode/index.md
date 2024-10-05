# VSCode
## 使用`eslint`并在保存时修复

安装`eslint`包

```Bash
yarn add -D eslint
```


然后安装`eslint`插件，并在工程下`.vscode/settings.json`中启用保存时修复

```JSON
{
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    }
}
```


`Stylelint`也是这样的操作

## 显示缩进辅助线

截止`1.65.2`版本，此方法可用

缩进辅助线一般是默认开启的，如果因为安装了什么软件导致被关闭了，可以通过以下方式还原：

1. 修改工作区的设置文件`.vscode/settings.json`，添加一行：

1. 在设置界面搜索`guid`，找到并勾选以下选项

## 丝滑的显示输入指示器

```TypeScript
"editor.cursorSmoothCaretAnimation": true,
```


## 让标签换行

```JSON
"workbench.editor.wrapTabs": true,
```


## 让 VSCode 不要省略只有一个子文件夹的路径

<img src="./assets/image0.png" width="980.000000" height="92.000000">

## Go 插件相关

[不在文件行中显示 run tests | debug tests](./%E4%B8%8D%E5%9C%A8%E6%96%87%E4%BB%B6%E8%A1%8C%E4%B8%AD%E6%98%BE%E7%A4%BA%20run%20tests%20%7C%20debug%20tests/index.md)

### 配置当前工作区的 Go 版本

在工作区根目录下创建`.vscode/settings.json`并写入

```JSON
{
  "go.goroot": "<路径>"
}
```




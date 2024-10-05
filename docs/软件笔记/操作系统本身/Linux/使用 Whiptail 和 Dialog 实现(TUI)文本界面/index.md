# 使用 Whiptail 和 Dialog 实现(TUI)文本界面
## TUI是什么

TUI全称Text-based user interface（基于文本的用户界面），在终端实现GUI的效果，它长这样：

<img src="./assets/image0.png" width="568.888889" height="341.333333">

这篇文章讲述如何在Linux中实现带TUI的bash脚本

Whiptail存在于大多数Linux发行版本中，一般不需要安装，Whiptail是精简版的Dialog。

如果没有：

```Bash
sudo apt install whiptail
sudo apt install dialog
```




# Sprite Studio
<p id="qeRh8MX5nT1LFHwj47fYwp">

### 导出为 sspkg 注意事项

</p>


- 工程路径不要有中文


<p id="vdZDb3XdQVSmtjjAGttnoK">

### PSToSS6 转换工具注意事项

</p>


- psd 路径不要有中文


- psd 内图层最好都已经栅格化


- psd 内图层名称不要有中文


<p id="rNwjvUEUj2tvjGJukWsXYx">

### 工程目录和工程文件重命名注意事项

</p>


<p id="kcywZG22oinpsj6tFAp7Ug">

> 当你在外部修改了工程内文件的名称后，ss 不会提示你是否要关联新的文件

</p>


- 最好直接在 SS 软件里面改


- 如果没有，请用文本编辑器打开相应的 ssce，ssae，sspj 文件，将旧名称替换成新的名称


<p id="ibJvFPVFs57QnkBWPwgyj9">

### sspkg 播放流程

</p>


1. 从网络上拉取下来


1. 用解压库进行解压


1. 用 ssfblib 加载


1. 获取到动画包内容


1. 获取到指定动画包的指定动画数据


1. 生成贴图精灵作为动画部件


1. 获取当前帧的部件数据，对部件进行相应的变换



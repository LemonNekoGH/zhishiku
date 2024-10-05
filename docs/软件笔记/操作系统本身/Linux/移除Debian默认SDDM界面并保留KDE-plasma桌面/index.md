# 移除Debian默认SDDM界面并保留KDE-plasma桌面
# ⚠️ 注意！！ 进行该操作前请务必做好备份工作，操作过程中可能会破坏系统组件导致无法正常启动！

::: tip 📌
在debian、ubuntu等debian发行版本中使用Tasksel 安装桌面后会遇到无法在Tasksel 中卸载桌面的情况。
:::

## 卸载多余的桌面环境

启动Tasksel查看已安装的桌面环境

```Bash
sudo tasksel 
```


<img src="./assets/image0.png" width="774.222222" height="480.000000">

卸载GNOME

```Bash
sudo apt-get remove --purge gnome-shell gnome-core gnome-session gnome-settings-daemon gnome-control-center
```


卸载XFCE

```Bash
sudo apt-get remove --purge xfce4 xfce4-goodies
```


卸载LXDE

```Bash
sudo apt-get remove --purge lxde lxde-core lxde-common
```


卸载Cinnamon

```Bash
sudo apt-get remove --purge cinnamon cinnamon-core cinnamon-desktop-environment
```


卸载Mate

```Bash
sudo apt-get remove --purge mate-desktop-environment
```


卸载LXQT

```Bash
sudo apt-get remove --purge lxqt-core lxqt-panel
```


清理未使用的附加依赖包

```Bash
sudo apt-get autoremove --purge
sudo apt-get clean

```


卸载并重新安装SDDM

```Bash
sudo apt-get remove --purge sddm
sudo apt-get autoremove --purge
sudo apt-get clean

sudo apt-get update
sudo apt-get install sddm

```


完全安装KDE-Plasma

```Bash
sudo apt-get install --reinstall kde-full
```


## 如果无法进入桌面，可以尝试以下方法

将现在的配置文件夹重命名，程序会自动创建新的文件夹和配置

```Bash
mv ~/.config ~/.config_backup
mv ~/.local ~/.local_backup
```


如果可以通过`startx`命令启动桌面环境但是开机不会进入桌面

配置SDDM 自动登录

```Bash
sudo nano /etc/sddm.conf


```


```Ini
[Autologin]
User=your-username
Session=plasma.desktop
```




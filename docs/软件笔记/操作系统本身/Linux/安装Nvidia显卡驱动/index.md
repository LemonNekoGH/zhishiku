# 安装Nvidia显卡驱动
去官方网站下载`.run`文件[https://www.nvidia.com/en-us/geforce/drivers/](<https://www.nvidia.com/en-us/geforce/drivers/>)

将文件移动到home目录下

### 将下载好的文件权限设置为可执行

```Bash
chmod +x ./NVIDIA-Linux-x86_64-550.100.run
```


### 进入tty界面

按`Ctrl + Alt + F1`或执行

```Bash
sudo systemctl isolate multi-user.target
```


### 关闭图形环境:

```Bash
sudo systemctl stop gdm # 或者 sddm

```


### 执行安装文件:

```Bash
sudo ./NVIDIA-Linux-x86_64-550.100.run
```


如果报错缺失linux内核头文件，参考这篇文章修复<a href="#ujMgrstZvbDGXf4fEzL5VL" style="color:inherit;text-decoration:underline dashed;">Debian 安装内核</a>

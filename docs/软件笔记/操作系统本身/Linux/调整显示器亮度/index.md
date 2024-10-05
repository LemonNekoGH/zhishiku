# 调整显示器亮度
安装ddcutil  ddcui

```Bash
sudo apt update 
sudo apt install ddcutil ddcui
```


配置

为了检测到 i2c 设备，需要载入内核模块 i2c-dev

1. 创建 /etc/modules-load.d/i2c.conf ，在其中写下:

```Bash
i2c-dev
```


这样 Linux 在启动时会自动加载 i2c-dev 模块

1. 此时 i2c 设备只有 root 用户才能访问，为了使用普通账户访问，需要将用户添加到 i2c 组

```Bash
sudo groupadd --system i2c
sudo usermod <user-name> -aG i2c
```


查看`Feature 10`的功能

```Bash
ddcutil capabilities | grep "Feature: 10"
# output
# Feature: 10 (Brightness)
```


查询当前亮度

```Bash
ddcutil getvcp 10 | grep -i 'Brightness' | awk '{print $9}' | sed 's/,$//'
```


设置当前亮度

```Bash
current_backlight=$(ddcutil getvcp 10 | grep -i 'Brightness' | awk '{print $9}' | sed 's/,$//')
ddcutil setvcp 10 $((current_backlight + 20))

```




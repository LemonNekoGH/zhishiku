# 调整显示器亮度
<p id="6rmB5BC3n9H3GbejRU54BK">

安装ddcutil  ddcui

</p>


<p id="d3wvF2HNtTwvcfW8mG2wC1">

```Bash
sudo apt update 
sudo apt install ddcutil ddcui
```


</p>


<p id="idHoJDVYEoZpqZJjcVwZCQ">

配置

</p>


<p id="pMbsiomZUkprBfX8XYPr4o">

为了检测到 i2c 设备，需要载入内核模块 i2c-dev

</p>


1. 创建 /etc/modules-load.d/i2c.conf ，在其中写下:


<p id="2apGEBgZeUN97xa8wqE32p">

```Bash
i2c-dev
```


</p>


<p id="5wN3ALUxs6swZaGAsioBQc">

这样 Linux 在启动时会自动加载 i2c-dev 模块

</p>


1. 此时 i2c 设备只有 root 用户才能访问，为了使用普通账户访问，需要将用户添加到 i2c 组


<p id="aYyP7ZovvW9wFLgTZKriWL">

```Bash
sudo groupadd --system i2c
sudo usermod <user-name> -aG i2c
```


</p>


<p id="t1DgYZp9vtBzSaXNnfbFU2">

查看`Feature 10`的功能

</p>


<p id="23uWhYvdNJm6xbJsC5B8xn">

```Bash
ddcutil capabilities | grep "Feature: 10"
# output
# Feature: 10 (Brightness)
```


</p>


<p id="oTNvTBJUQCictA8kfesZCJ">

查询当前亮度

</p>


<p id="76YA7Cg2Kh1ozR9AwSY8WK">

```Bash
ddcutil getvcp 10 | grep -i 'Brightness' | awk '{print $9}' | sed 's/,$//'
```


</p>


<p id="e7k9JiGT2wGMca4cbdnHzP">

设置当前亮度

</p>


<p id="2JWzDovgXn7YFByw9y8mJY">

```Bash
current_backlight=$(ddcutil getvcp 10 | grep -i 'Brightness' | awk '{print $9}' | sed 's/,$//')
ddcutil setvcp 10 $((current_backlight + 20))

```


</p>


<p id="vvewFJFHFYGxtxKZxtQR54">



</p>



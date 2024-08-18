# Unix Shell 通用命令
<p id="6qg2K7T5uyo4Mk8gL7GMpK">

[小技巧](./%E5%B0%8F%E6%8A%80%E5%B7%A7/index.md)

</p>

<p id="vw7kvfzeKepi8pAUGdbsnF">

## `source`

</p>

<p id="rpnoqntq3MD3SFX99Cmzyz">

```Bash
source ~/.bash_profile # 使 .bash_profile 在当前终端会话中立即生效。


```


</p>

<p id="8Rs6Kag1G9ZKMuz5ca1YcZ">

## `adduser`添加用户

</p>

<p id="uhg9Ee67QaPX23e89cm8T9">

```Bash
sudo adduser neko # 添加一个名为 neko 的用户

```


</p>

<p id="usdKLmgmtT7mtjzSZ3m6mb">

## `passwd`为用户设置密码

</p>

<p id="iC7WxMGzEU3hXZTqMbfdiN">

敲完命令后会像普通的密码输入场景一样，密码不显示

</p>

<p id="n8JiipE26u2FyLhd96iJ7u">

```Bash
sudo passwd neko # 请求设置 neko 用户的密码
```


</p>

<p id="9TpWvRXX6B497Ce3k9BcCL">

## `su`切换用户

</p>

<p id="k2uyZP7BFn8A9HUuj7GBpd">

如果此用户拥有密码，会需要输入密码

</p>

<p id="6ac4nhyiwjeQUKy7JYCvZo">

```Bash
su neko # 切换到 neko 用户
```


</p>

<p id="jgzdUJtMBJLoYSgZPPBy2d">

## `awk`选择被输入的内容的某一列进行输出

</p>

<p id="qkDvx3FgGhn9CrQthW2TL7">

```Bash
df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            448M     0  448M   0% /dev
tmpfs            92M  608K   91M   1% /run
/dev/sda1        30G  4.6G   24G  17% /
tmpfs           457M     0  457M   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/sda15      124M  5.9M  118M   5% /boot/efi
/dev/sdb1       3.9G   24K  3.7G   1% /mnt
tmpfs            92M     0   92M   0% /run/user/1003
df -h | awk '{print $4}'
Avail
448M
91M
24G
457M
5.0M
118M
3.7G
92M

```


</p>

<p id="vpqHLrJNYxtAv158M9f5dJ">

## `chown`修改文件或文件夹的所有者

</p>

<p id="sy9HChR4TEgedhSuVio52V">

```Bash
sudo chown <用户名> <文件或文件夹名称>
```


</p>

<p id="pffLkkmEZZhnythNzmYQ8Z">

## `tr`替换、删除输入中的字符

</p>

<p id="gHib8PcfnCYqz6XMZk9H9o">

```Bash
echo 'test' | tr 's' 't' # 无选项，输出：tett
echo 'test' | tr -c 't' 's' # 反选，输出：sess
echo 'test' | tr -d 't' # 移除字符，输出：es

```


</p>

<p id="qikYBceHo7UvupJZRyRfuS">

## `head`命令

</p>

<p id="5BUJupZQcD7GmBHActw3fi">

用于获取输入的前第 n 行

</p>

<p id="wCPMrqWzF1nqYc8PPPSmGA">

```Bash
$ echo 'a\nb\nc' | head -n 1
# a
$ echo 'a\nb\nc' | head -n 2
# a
# b
```


</p>

<p id="cQGg8yioENLaWiWt7nUdFy">

## `tail`命令

</p>

<p id="2J2efAijLLA3q9jNgAzv5a">

与`head`命令相反，用于获取输入的最后第 n 行

</p>

<p id="hd9gfmD6mWkLAoNN76FhVc">

```Bash

```


</p>

<p id="jMxKWf87rGapYd1nFtSGiT">

## `sed`命令<span style="color:#E91E2C;">待学习</span>

</p>

<p id="1EUi31eRKE4bQkKw4o5wtS">

例子：把字符串中的 " 替换成 '

</p>

<p id="nePBoLdQrSF3QscfrMeg8F">

```Bash
echo 'ABCDE"EDCBA' | sed "s~\(['\"\/]\)~\\\\\1~g")
# ABCDE\"EDCBA
```


</p>

<p id="jK8gmNzADSPLmrXdn3WDdX">

## `ssh`命令

</p>

<p id="mnZABRsN23wu3QpJrrCQYc">



</p>

<p id="na1vD2eAXM75ZeymFjgdBo">

可用于连接远程计算机，远程计算机中必须安装 ssh server 才能接受连接

</p>

<p id="9uQKJJgNQWYrHfHUPufvqx">

```JavaScript
ssh <username>@<address>
```


</p>

<p id="5RqiGsmJr2ExBUWw8eTVgt">

参数列表：

</p>

- `-p <number>`指定端口号，如果远程计算机的 ssh 服务端口不是 22 时使用

- `-i <path>`指定私钥文件，在用户关闭了密码登录，使用私钥登录的时候使用

<p id="8TV8s8KqVdc1wZpi7kHLxk">

可以用于将远程计算机的端口映射到中继计算机，然后映射到自己主机

</p>

<p id="e98C2d6RWNehtMgukn6TKX">



</p>

<p id="3mv1PtCcPJ3dy2A2dRKHA9">

```JavaScript
ssh -L <local port>:<remote address>:<remote port> <username>@<relay address>
```


</p>

<p id="9jF3GpAKzRTCjt5XtwKxp3">

参数列表：

</p>

- `-p <number>`指定端口号，如果中继主机的 ssh 服务端口不是 22 时使用

- `-i <path>`指定私钥文件，在用户关闭了密码登录，使用私钥登录的时候使用

- `-N`不登录到中继主机

- `-R`反向操作，将本地计算机的端口映射到远程计算机

- `-f`后台运行

<p id="gixRg5q1tyFKpgfDFe7Gz9">

## `**dirname**`命令

</p>

<p id="qyUs2vRQE3QeQcbFwCnXNr">

返回一个文件所在的文件夹与当前路径的相对位置

</p>

<p id="xmvxJktScNtTEcXA9H8uQ3">

## `file`命令

</p>

<p id="wQGWH4B5zqfpZ9FpzW9Fne">

返回指定文件的类型

</p>

<p id="5zo2txoh6VgmFeuvG9d1Ru">

## `mkdir`命令

</p>

<p id="72FbUdZtFWTiJRiuSywx4P">



</p>

<p id="9uXPjXXfwp4QQ7MoVe7cht">

创建文件夹

</p>

<p id="4byR8LHSaZrcr1q6igDQ26">

参数列表

</p>

- `-p`需要创建的文件夹的父文件夹不存在时也会被创建

<p id="5Rukmbt8vkbEzDL34DE6Ne">

## `base64`命令

</p>

<p id="abXEpNquV4ynTV3VbaGG8x">

将输入的文件内容转换成`base64`进行输出

</p>

<p id="ep5catZVjxoB6eFdfiJCMQ">

参数列表

</p>

- `--input`输入参数

- `--output`输出参数

<p id="mvDx5cfLusch5d8MCRpuBx">

## `uname`命令

</p>

<p id="s5Bmw6MzLSubq2mqMRjZ3P">

可以显示`Linux`系统相关信息

</p>

<p id="sft42EuvGRnbt5wEyAXEQm">

```Bash
uname -r # 
```


</p>

<p id="whW5KtdK2JHaqaWr8Fw1xP">

## `lsof`命令

</p>

<p id="nPjoXKAGEiW8dcGYNNRU2b">

用于列出与选项相关的文件

</p>

<p id="fvMLLUoG29Lrbf2teEvuFa">

```Bash
lsof -i :5000 # 查看占用了 5000 端口的文件
```


</p>

<p id="kWEiA2wtuPnErZ6raM6g8h">



</p>

<p id="qFCG8yeQC4pFdgekj4vxVd">

## `**crontab -l**`命令

</p>

<p id="qKvXZ3qmcmBEDMn1R2osZg">

列出crontab计划任务列表

</p>

<p id="m71N258Nn55Gx2udy8K1i9">

```Bash
crontab -l
```


</p>

<p id="m1WEppBVaSto1xbAyveKq">

## `nslookup`通过主机名找到 IP

</p>

<p id="uaWdxPoh6qnb1HAvonYt8u">

```Bash
nslookup baidu.com

```


</p>

<p id="6NT3ErHsGJujquASH5tS1b">

结果会是

</p>

<p id="pyQtXzVihypa9DWSTRZs1L">

```Bash
Server:    100.109.16.5
Address:  100.109.16.5#53

Non-authoritative answer:
Name:  baidu.com
Address: 110.242.68.66
Name:  baidu.com
Address: 39.156.66.10
```


</p>

<p id="atTkjqeKzMz5dz35ZfATqp">

如果希望只获取到第一个`IP`并输出，可以配合`awk`命令

</p>

<p id="q9gGcXhGQwpCuGhGqwxAE8">

```Bash
nslookup baidu.com | awk -F': ' 'NR==6 { print $2 } '
```


</p>

<p id="aSELhAujgGjEZH5toHY62A">

结果会是

</p>

<p id="hVgSXJzpGXoj2hpNBuBSax">

```Bash
110.242.68.66
```


</p>

<p id="m1kgs1z1dkjFVZdCFVikxt">

在 Ubuntu 中安装此工具

</p>

<p id="fgUSeHSskEp8WGotrTH2wX">

```Bash
apt update && apt install dnsutils
```


</p>

<p id="3sZLkiPt6K2F3gpGgAqH2f">

## `ssh-copy-id`将指定的公钥复制到指定的机器上

</p>

<p id="ekdyXoRDK6bMwPfYSpWxMf">

```Bash
& ssh-copy-id -i <path> user@host
```


</p>

<p id="6TkEAdy5eoECosU6m6Sr6X">

## `kill`杀死进程

</p>

<p id="mEYKL1Pa6VKXVVgYL7okgo">

```Bash
& kill -9 87376 # 杀死 pid 为 87376 的进程
[1] + killed pnpm dev
```


</p>

<p id="8SDGWpDEGGaVdTpSf84CCZ">

## `fg`将后台进程恢复到前台

</p>

<p id="jb2fR4BZcKNwFHFDMYafLw">

```Bash
& fg %1
[1] + continued pnpm dev
```


</p>

<p id="ndzoGTmut1KYpmY8f4LugK">

## `jobs`查看后台进程

</p>

<p id="kd3Ct5DWk1Xah8kXawAc4e">

```Bash
& job -l
[1]  + 87376 suspended (tty input)  pnpm dev
```


</p>

<p id="aDujmUL2zddTkjszVLRoKq">



</p>

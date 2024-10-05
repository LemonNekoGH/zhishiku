# Unix Shell 通用命令
[小技巧](./%E5%B0%8F%E6%8A%80%E5%B7%A7/index.md)

## `source`

```Bash
source ~/.bash_profile # 使 .bash_profile 在当前终端会话中立即生效。


```


## `adduser`添加用户

```Bash
sudo adduser neko # 添加一个名为 neko 的用户

```


## `passwd`为用户设置密码

敲完命令后会像普通的密码输入场景一样，密码不显示

```Bash
sudo passwd neko # 请求设置 neko 用户的密码
```


## `su`切换用户

如果此用户拥有密码，会需要输入密码

```Bash
su neko # 切换到 neko 用户
```


## `awk`选择被输入的内容的某一列进行输出

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


## `chown`修改文件或文件夹的所有者

```Bash
sudo chown <用户名> <文件或文件夹名称>
```


## `tr`替换、删除输入中的字符

```Bash
echo 'test' | tr 's' 't' # 无选项，输出：tett
echo 'test' | tr -c 't' 's' # 反选，输出：sess
echo 'test' | tr -d 't' # 移除字符，输出：es

```


## `head`命令

用于获取输入的前第 n 行

```Bash
$ echo 'a\nb\nc' | head -n 1
# a
$ echo 'a\nb\nc' | head -n 2
# a
# b
```


## `tail`命令

与`head`命令相反，用于获取输入的最后第 n 行

```Bash

```


## `sed`命令<span style="color:#E91E2C;">待学习</span>

例子：把字符串中的 " 替换成 '

```Bash
echo 'ABCDE"EDCBA' | sed "s~\(['\"\/]\)~\\\\\1~g")
# ABCDE\"EDCBA
```


## `ssh`命令



可用于连接远程计算机，远程计算机中必须安装 ssh server 才能接受连接

```JavaScript
ssh <username>@<address>
```


参数列表：

- `-p <number>`指定端口号，如果远程计算机的 ssh 服务端口不是 22 时使用

- `-i <path>`指定私钥文件，在用户关闭了密码登录，使用私钥登录的时候使用

可以用于将远程计算机的端口映射到中继计算机，然后映射到自己主机



```JavaScript
ssh -L <local port>:<remote address>:<remote port> <username>@<relay address>
```


参数列表：

- `-p <number>`指定端口号，如果中继主机的 ssh 服务端口不是 22 时使用

- `-i <path>`指定私钥文件，在用户关闭了密码登录，使用私钥登录的时候使用

- `-N`不登录到中继主机

- `-R`反向操作，将本地计算机的端口映射到远程计算机

- `-f`后台运行

## `**dirname**`命令

返回一个文件所在的文件夹与当前路径的相对位置

## `file`命令

返回指定文件的类型

## `mkdir`命令



创建文件夹

参数列表

- `-p`需要创建的文件夹的父文件夹不存在时也会被创建

## `base64`命令

将输入的文件内容转换成`base64`进行输出

参数列表

- `--input`输入参数

- `--output`输出参数

## `uname`命令

可以显示`Linux`系统相关信息

```Bash
uname -r # 
```


## `lsof`命令

用于列出与选项相关的文件

```Bash
lsof -i :5000 # 查看占用了 5000 端口的文件
```




## `**crontab -l**`命令

列出crontab计划任务列表

```Bash
crontab -l
```


## `nslookup`通过主机名找到 IP

```Bash
nslookup baidu.com

```


结果会是

```Bash
Server:    100.109.16.5
Address:  100.109.16.5#53

Non-authoritative answer:
Name:  baidu.com
Address: 110.242.68.66
Name:  baidu.com
Address: 39.156.66.10
```


如果希望只获取到第一个`IP`并输出，可以配合`awk`命令

```Bash
nslookup baidu.com | awk -F': ' 'NR==6 { print $2 } '
```


结果会是

```Bash
110.242.68.66
```


在 Ubuntu 中安装此工具

```Bash
apt update && apt install dnsutils
```


## `ssh-copy-id`将指定的公钥复制到指定的机器上

```Bash
& ssh-copy-id -i <path> user@host
```


## `kill`杀死进程

```Bash
& kill -9 87376 # 杀死 pid 为 87376 的进程
[1] + killed pnpm dev
```


## `fg`将后台进程恢复到前台

```Bash
& fg %1
[1] + continued pnpm dev
```


## `jobs`查看后台进程

```Bash
& job -l
[1]  + 87376 suspended (tty input)  pnpm dev
```


## `trap`捕获信号并且执行命令

可以被用来在执行被中断时执行清理或回滚等操作。如下代码，它会每隔秒将 a 加 1 并输出 a 的值，同时在捕获到 SIGINT 的时候输出 CTRL+C

```Bash
#!/bin/bash

trap "echo CTRL+C" SIGINT

a=0

while [ $a -lt '10' ]; do
    echo $a
    sleep 1
    a=$(expr $a + 1)
done
```




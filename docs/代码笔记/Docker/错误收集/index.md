# 错误收集
<p id="69CmHXXmzobNt1VXTK8EUp">

## 找不到 Dockerfile

</p>


<p id="hMgFuoMUWqMTn1LmeZCy8L">

具体报错

</p>


<p id="6Mt6MEEAsp5epJtQAVxjvm">

```Bash
failed to solve with frontend dockerfile.v0: failed to read dockerfile: open /var/lib/docker/tmp/buildkit-mount687823450/Dockerfile: no such file or directory
```


</p>


<p id="mifvRNw9WWj4tyt34K4eu5">

请检查`Dockerfile`是否存在在指定的文件夹中，并且注意文件名大小写。

</p>


<p id="3bPpBGyxroHqYLvpySggSs">

## 运行命令时权限不足

</p>


<p id="3AH8LGTBCBmTYKNCpTc6yJ">

`docker version`命令除外，因为这个命令不会访问到`docker`组可以访问的东西

</p>


<p id="iGwd5aW2krm2z5voynK6AK">

可以使用下面方法将用户移动到`docker`组

</p>


<p id="2deAPNvEqV1tK618DhzbrC">

```plaintext
sudo usermod -aG docker ${USER} # 1. 把用户加入 docker 组
sudo systemctl restart docker   # 2. 重启 docker
# 3. 切换用户再切回来或重新登录，让环境生效
```


</p>


<p id="ecae19CRqotrXVaqpo7Rwy">

或全程用`sudo`运行`docker`命令，或者用`root`用户运行

</p>


<p id="pRxdSe45mt1FncY5gDAW7s">

## `Docker`引擎没有在运行

</p>


<p id="eskcrhsMHrrDaC5fwzQhNf">

```Bash
error during connect: This error may indicate that the docker daemon is not running.: Post "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/build?buildargs=%7B%7D&cachefrom=%5B%5D&cgroupparent=&cpuperiod=0&cpuquota=0&cpusetcpus=&cpusetmems=&cpushares=0&dockerfile=Dockerfile&labels=%7B%7D&memory=0&memswap=0&networkmode=default&rm=1&shmsize=0&t=vpn-sub&target=&ulimits=null&version=1": open //./pipe/docker_engine: The system cannot find the file specified.
```


</p>


<p id="tPQSfKr5Ze3ECqjUJbL2Bj">

请先运行`DockerDesktop`或者`OrbStack`

</p>


<p id="5DGBTMxGtyXbfcDKJjDQ8z">

## invalid mount config for type...

</p>


<p id="6VChwggSHbYfeumc1yJur3">

绑定驱动器和文件夹的时候，请绑定具体的文件到具体的文件，或具体的文件夹到具体的文件夹

</p>


<p id="4c1GQeDChvGg66UujyN4so">

## 在 DockerDesktop 上复制命令后直接运行，容器无法连接网络

</p>


<p id="fQHbXDCwPyWyMmzpXcNjEW">

因为复制的命令中带有 mac 地址参数和主机名参数，如果不修改或删除，就会和已经存在的容器冲突

</p>


<p id="9byP6ukL2PLzDTqzXrhhMB">

## EntryPoint 为 bash 的镜像运行后立刻退出

</p>


<p id="mnhYRY5uejPzvsAuBJpMrf">

请使用`-it`参数

</p>


<p id="fg8MWULipYNaLtyUhfXD4v">

```Bash
-i --interactive 表示可交互
-t --tty 表示为此容器提供一个独立的终端实例
```


</p>


<p id="9oMtfVJSLdhAwfddMRrSFo">



</p>


<p id="wcXdDZ8npm7eMHJSE6TXA9">



</p>



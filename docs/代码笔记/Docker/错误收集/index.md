# 错误收集
## 找不到 Dockerfile

具体报错

```text
failed to solve with frontend dockerfile.v0: failed to read dockerfile: open /var/lib/docker/tmp/buildkit-mount687823450/Dockerfile: no such file or directory
```


请检查`Dockerfile`是否存在在指定的文件夹中，并且注意文件名大小写。

## 运行命令时权限不足

`docker version`命令除外，因为这个命令不会访问到`docker`组可以访问的东西

可以使用下面方法将用户移动到`docker`组

```plaintext
sudo usermod -aG docker ${USER} # 1. 把用户加入 docker 组
newgrp docker # 2. 登录新docker组
sudo systemctl restart docker   # 3. 重启 docker
# 如果不起作用需要重启
```


或全程用`sudo`运行`docker`命令，或者用`root`用户运行

## `Docker`引擎没有在运行

```Docker
error during connect: This error may indicate that the docker daemon is not running.: Post "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/build?buildargs=%7B%7D&cachefrom=%5B%5D&cgroupparent=&cpuperiod=0&cpuquota=0&cpusetcpus=&cpusetmems=&cpushares=0&dockerfile=Dockerfile&labels=%7B%7D&memory=0&memswap=0&networkmode=default&rm=1&shmsize=0&t=vpn-sub&target=&ulimits=null&version=1": open //./pipe/docker_engine: The system cannot find the file specified.
```


请先运行`DockerDesktop`或者`OrbStack`

## invalid mount config for type...

绑定驱动器和文件夹的时候，请绑定具体的文件到具体的文件，或具体的文件夹到具体的文件夹

## 在 DockerDesktop 上复制命令后直接运行，容器无法连接网络

因为复制的命令中带有 mac 地址参数和主机名参数，如果不修改或删除，就会和已经存在的容器冲突

## EntryPoint 为 bash 的镜像运行后立刻退出

请使用`-it`参数

```Bash
-i --interactive 表示可交互
-t --tty 表示为此容器提供一个独立的终端实例
```






# Docker Swarm：docker 内置的集群方案
Docker 集群方案之一，是内置在 Docker 中的一部分

## 概念

### 全局模式和复制模式`global mode``replicas mode`

是容器集群的运行模式，在全局模式下，每个 docker 节点都会启动一个服务，而复制模式可以在单个 docker 节点中运行多个相同的服务（复制体）

## 命令集合

### `swarm init`

创建一个管理节点

```YAML
docker swarm init --advertise-addr <本节点的 IP>

```


如果是单节点的集群，可以省略`--advertise-addr`选项

创建完成后，会打印一个`token`用来让工作节点加入进来，示例输出：

```text
Swarm initialized: current node (dxn1zf6l61qsb1josjja83ngz) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \
    192.168.99.100:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```


### `swarm join`

以工作节点的身份加入一个集群

```Bash
docker swarm join \
  --token <创建管理节点时显示的 token> \
  <创建管理节点时使用的 IP>
```


### `swarm join-token`

显示加入该集群时需要使用的 token

```Bash
docker swarm join-token worker # 显示工作节点加入时使用的 token
docker swarm join-token manager # 显示管理节点加入时使用的 token
```


### `node ls`

列出当前集群中的所有节点

如果不在集群中，则会报错：

```Bash
Error response from daemon: This node is not a swarm manager. Use "docker swarm init" or "docker swarm join" to connect this node to swarm and try again.
```


### `service update`

更新服务，会导致服务重启

```Bash
docker service update --image <本地已经有的镜像 tag> <服务名称>
```


#### 选项集

```Bash
--force 就算更新之后没有任何变化，也要更新
--image <tag> 更新服务的镜像
```


### `service logs`

查看某服务的日志

```Bash
docker service logs test_service
```


参数集：

- `--tail <number>`可以只返回最末尾的指定数量的日志



### `service scale`

修改某个服务集群中的节点（复制体）数量

```Bash
docker service scale lemon_service=1 # 把名为 lemon_service 服务的节点数量改为 1，同时只有一个 lemon_service 在运行
```


如果只是想停下服务而不移除服务，可以将复制体数量设置为 0



### `service ps`

查看某服务的状态

```Bash
docker service ps lemon-service # 查看名为 lemon-service 的服务的状态
```


#### 选项集

```Bash
--no-trunc 显示完整的提示消息
```




# Docker Swarm：docker 内置的集群方案
<p id="vhmCC7VkLYDMRumkL1Qmch">

Docker 集群方案之一，是内置在 Docker 中的一部分

</p>


<p id="834tE7LmF4t5jKEqF3pJv">

## 概念

</p>


<p id="iE4CaTt7cZXA6JLVk82ZWK">

### 全局模式和复制模式`global mode``replicas mode`

</p>


<p id="hmsew7ZQjzYT8tBqmJ29od">

是容器集群的运行模式，在全局模式下，每个 docker 节点都会启动一个服务，而复制模式可以在单个 docker 节点中运行多个相同的服务（复制体）

</p>


<p id="kSmBtvdTmQP3KseQTg3By9">

## 命令集合

</p>


<p id="8FJzeqnMDGWJez8VCp7dFu">

### `swarm init`

</p>


<p id="jNSJMCnfZeWM9mbR4hPQ7e">

创建一个管理节点

</p>


<p id="pJiXo7iy2pKhS3HF9cfKaY">

```YAML
docker swarm init --advertise-addr <本节点的 IP>

```


</p>


<p id="wqMKKSYYTnXbHD7MwJNsP">

如果是单节点的集群，可以省略`--advertise-addr`选项

</p>


<p id="i6BaaZDovPzmJK9KQEvSHQ">

创建完成后，会打印一个`token`用来让工作节点加入进来，示例输出：

</p>


<p id="4AKM3UoHSdAUPNGJaEpCjf">

```text
Swarm initialized: current node (dxn1zf6l61qsb1josjja83ngz) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join \
    --token SWMTKN-1-49nj1cmql0jkz5s954yi3oex3nedyz0fb0xx14ie39trti4wxv-8vxv8rssmk743ojnwacrr2e7c \
    192.168.99.100:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
```


</p>


<p id="shNmLiCsTe5ehbNWMMjhWN">

### `swarm join`

</p>


<p id="qp45kVbaJoD6hoHSnEpgD9">

以工作节点的身份加入一个集群

</p>


<p id="kZJBjvWBJgFDVsRBLWuTxf">

```Bash
docker swarm join \
  --token <创建管理节点时显示的 token> \
  <创建管理节点时使用的 IP>
```


</p>


<p id="kE5y8NfyvD3FK2KXr8vU97">

### `swarm join-token`

</p>


<p id="jfp2yZQXEVbsw2ziZZjetr">

显示加入该集群时需要使用的 token

</p>


<p id="cZGBkz2oSkmQs9RdEZGKUR">

```Bash
docker swarm join-token worker # 显示工作节点加入时使用的 token
docker swarm join-token manager # 显示管理节点加入时使用的 token
```


</p>


<p id="bxHZaBskTDhh8DHnYwBd8U">

### `node ls`

</p>


<p id="2FseajQXeJt1YB6VaxGHn7">

列出当前集群中的所有节点

</p>


<p id="nzqphrijJUejCAx5NUENe7">

如果不在集群中，则会报错：

</p>


<p id="b1SZtzzisoaFNAfTiAHFL7">

```Bash
Error response from daemon: This node is not a swarm manager. Use "docker swarm init" or "docker swarm join" to connect this node to swarm and try again.
```


</p>


<p id="ttyUShUuEvAS8V6Agqdo1c">

### `service update`

</p>


<p id="pMGdZi3bCqWUqi5DEkxsgq">

更新服务，会导致服务重启

</p>


<p id="cpag2SCCdwMgezfuPETs4U">

```Bash
docker service update --image <本地已经有的镜像 tag> <服务名称>
```


</p>


<p id="nxBNggC6VTxTiG1DWzJnbq">

#### 选项集

</p>


<p id="uWZpPyLtjHdcAPzXZ4ehUG">

```Bash
--force 就算更新之后没有任何变化，也要更新
--image <tag> 更新服务的镜像
```


</p>


<p id="57gqnvBeEc6RCY4xvEkhgp">

### `service logs`

</p>


<p id="cz4GxL3jFMmvZz51UpYyw8">

查看某服务的日志

</p>


<p id="itdH281oPrJxUpgW4BQPLf">

```Bash
docker service logs test_service
```


</p>


<p id="fXJy5VX6FtpgqBzkCoUoyH">

参数集：

</p>


- `--tail <number>`可以只返回最末尾的指定数量的日志


<p id="2XFH8LzR42WhiUPm1SnAv7">



</p>


<p id="k9in335uDeohatE7LgiTdc">

### `service scale`

</p>


<p id="5voC1JtFMSGL1b6UxbR1uo">

修改某个服务集群中的节点（复制体）数量

</p>


<p id="whu9zKsjVPGb4XuBvrSGYp">

```Bash
docker service scale lemon_service=1 # 把名为 lemon_service 服务的节点数量改为 1，同时只有一个 lemon_service 在运行
```


</p>


<p id="bHbSSK6hp3VsDzMmHSFEdd">

如果只是想停下服务而不移除服务，可以将复制体数量设置为 0

</p>


<p id="xmM189Z2DH3EVgYrWxKZHK">



</p>


<p id="s4FgF9vyQx9QBjEPtMYzXa">

### `service ps`

</p>


<p id="4U6mBnyTyfmdSeAeSLF9xH">

查看某服务的状态

</p>


<p id="3yqX8zG6fLHZ5Lm8Bhgcta">

```Bash
docker service ps lemon-service # 查看名为 lemon-service 的服务的状态
```


</p>


<p id="4keMpCW4tqSvCMCu6R3qQF">

#### 选项集

</p>


<p id="4Mg9uFch376Ty6JDfB8exQ">

```Bash
--no-trunc 显示完整的提示消息
```


</p>


<p id="pVXhcrREVxaJyBccj5JNkw">



</p>



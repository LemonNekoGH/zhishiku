# Docker Stack
一个和 Docker Compose 很像的东西，使用 docker-compose.yml 作为配置文件

前提是本机需要是一个<a href="#6EUYnubgUimtLWq5PGTw3z" style="color:inherit;text-decoration:underline dashed;">Docker Swarm</a>管理节点

## 配置文件

`docker-compose.yml`以下是 mono 后端的示例

```YAML
version: "3"

services:
  mono-service:
    image: hub.mono.fun/mono/mono-service:latest-uat
    deploy:
      mode: replicated
      replicas: 2
    volumes:
      - './config:/etc/mono-service'
      - './logs:/app/mono-service/logs'
    ports:
      - 2100:2100

```


更新服务不会影响集群节点数量，已经改成 1 了之后更新服务了还是 1，不会因为配置里面写着 2 就变回 2

## 命令集合

### `stack deploy`部署新的服务

```YAML
docker stack deploy -c <docker-compsoe 配置文件> <服务名称>
```


如果是私有镜像仓库，需要先登录（`docker login`）然后带上`--with-registry-auth`选项

错误处理：

- no suitable node - unable to deploy image using docker service<br>可能是镜像使用的操作系统不匹配，比如在 macos 上构建的镜像无法在 Linux 上运行



# Docker Compose


## 选项

```Bash
-f # 指定 docker-compose 文件
```


## `up`启动容器组

```Bash
docker compose up --abort-on-container-exit # 一旦容器组中的某个容器停止运行，就停止所有容器运行
docker compose up --build # 启动容器组之前先按 build.context 和 build.dockerfile 构建一次镜像
docker compose up -d # 在后台启动容器组
```


## `down`关闭并删除容器组

## `stop`停止容器组

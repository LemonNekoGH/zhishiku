# Gitea：代码托管平台


## 适用场景

- 仅仅只需要从 GitHub 同步镜像

- 不需要运行 CI/CD（可能以后会支持）

- 资源较少

- 不想付费

## 安装

### 使用 Docker 安装

创建一个文件夹名为 gitea，这个文件夹将专门存放所有 gitea 的数据，包括配置、数据库、仓库

```Go
mkdir gitea
```


运行以下命令

```Go
docker run --name gitea --restart always -dit -p 3000:3000 gitea/gitea:1
```


跑起来之后就已经能在本地的 3000 端口访问管理页面了，第一次访问管理页面会提醒连接数据库和创建管理员账号

成功启动后，gitea 文件夹中应该包含以下文件夹：

- git

- gitea

- ssh

## 配置

通过在 gitea 中添加 custom/conf/app.ini 来实现自定义配置，每次配置修改后会需要重启才能生效

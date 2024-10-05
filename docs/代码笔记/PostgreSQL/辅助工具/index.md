# 辅助工具
## `pg_isready`检查数据库是否准备好接收连接

```Bash
pg_isready -h <hostname> -p <port>
```


如果已经准备好：

```Bash
$ pg_isready -h localhost -p 15432
  localhost:15432 - accepting connections
$ echo $?
  0
```


如果没有准备好：

```Bash
$ pg_isready -h localhost -p 5432
  localhost:5432 - no response
$ echo $?
  2
```


# 辅助工具
<p id="cXF4UGxWjMVJ4BiEUFqMTz">

## `pg_isready`检查数据库是否准备好接收连接

</p>


<p id="8VDjJ9QAEF9Wr43tDrvRMB">

```Bash
pg_isready -h <hostname> -p <port>
```


</p>


<p id="cxRoCGnUaBYrNDGFfT4RCt">

如果已经准备好：

</p>


<p id="9vBdFJkP8ix7WhHqqMDEiv">

```Bash
$ pg_isready -h localhost -p 15432
  localhost:15432 - accepting connections
$ echo $?
  0
```


</p>


<p id="xa5Hv19hzAx7gGPS794H7q">

如果没有准备好：

</p>


<p id="atvWFD6dYgVeshrR4VVzwx">

```Bash
$ pg_isready -h localhost -p 5432
  localhost:5432 - no response
$ echo $?
  2
```


</p>



# database/sql：SQL 数据库包的使用
<p id="wUXLB3UHjneznipgTyVV48">



</p>


<p id="pCbtZLrd4DoxGsQbzTqdLn">

### `sql.Open`只会创建数据库对象

</p>


<p id="k985Q5RAFjz5b6rgGN2reS">

文档中写了，`sql.open`只会检查传入的参数是否可以创建数据库对象

</p>


<p id="n4qvRKDv9NLoqGp532xpyv">

如果需要检查数据库连接，可以使用`db.Ping()`函数

</p>


<p id="1LSSfvEBJRryoCoonTVMRm">

```Go
import (
  "database/sql"
  _ "github.com/go-sql-driver/mysql"
)
func main() {
  db, err := sql.Open("mysql", "name:password@tcp(localhost:3306)/db")
  if err != nil {
    // 第二个参数有误
    return
  }
  err = db.Ping()
  if err != nil {
    // 连接测试失败
    return
  }
}
```


</p>



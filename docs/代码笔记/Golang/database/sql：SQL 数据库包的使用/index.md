# database/sql：SQL 数据库包的使用


### `sql.Open`只会创建数据库对象

文档中写了，`sql.open`只会检查传入的参数是否可以创建数据库对象

如果需要检查数据库连接，可以使用`db.Ping()`函数

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


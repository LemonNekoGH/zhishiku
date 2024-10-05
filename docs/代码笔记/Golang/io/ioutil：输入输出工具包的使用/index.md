# io/ioutil：输入输出工具包的使用
## 读取文件夹中的文件列表

```Go
package main

import (
    "fmt"
    "io/ioutil"
     "log"
)

func main() {
    files, err := ioutil.ReadDir("./")
    if err != nil {
        log.Fatal(err)
    }
 
    for _, f := range files {
            fmt.Println(f.Name())
    }
}
```




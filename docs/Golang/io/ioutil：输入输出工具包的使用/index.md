# io/ioutil：输入输出工具包的使用
<p id="cffvT9gxo4ytU22EBbaMa3">

## 读取文件夹中的文件列表

</p>

<p id="rKJXZQ91ktxPNS3723Kt8j">

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


</p>

<p id="qgwhsJQwGxmkpMAkgVx1La">



</p>

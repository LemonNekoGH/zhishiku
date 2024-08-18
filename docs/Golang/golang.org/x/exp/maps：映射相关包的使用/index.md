# golang.org/x/exp/maps：映射相关包的使用
<p id="gVeCJBEiFpGdWEjjiAzvLg">

## 合并两个 map

</p>

<p id="6ZnrEewMNs9MK6v2JPAFhb">

```Go
package main

import (
    "fmt"
    "io"

    "golang.org/x/exp/maps"
)

func main() {
    var src, dst map[io.Reader]int
    maps.Copy(dst, src)
    fmt.Println("src:", src)
    fmt.Println("dst:", dst)
}
```


</p>

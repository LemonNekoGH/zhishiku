
<p id="aWf4dayW3uzd4jiXC5Uiez">

## 计算文件 Hash

</p>

<p id="mQxoDPWUHAChvtv9JkiTFC">

```Go
package main

import (
  "crypto/sha256"
  "fmt"
  "io"
  "log"
  "os"
)

func main() {
  f, err := os.Open("file.txt")
  if err != nil {
    log.Fatal(err)
  }
  defer f.Close()

  h := sha256.New()
  if _, err := io.Copy(h, f); err != nil {
    log.Fatal(err)
  }

  fmt.Printf("%x", h.Sum(nil))
}
```


</p>

<p id="hBJjDY2rJKnagB9Jxfgbt9">



</p>

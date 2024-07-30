
<p id="okf1Khr22LwjeG6uWDesm4">

## `debug.PrintStack`

</p>

<p id="eHT6vw82a7h6kGCqCktwpE">

可以打印**当前**协程的堆栈信息，适合在可能发生`panic`的协程中使用，可以在这里尝试：[https://goplay.tools/snippet/rbDv6_l9sp3](<https://goplay.tools/snippet/rbDv6_l9sp3>)

</p>

<p id="sFR5DgMdM6LjMeYXBnG8dq">

```Go
package main

import (
  "fmt"
  "runtime/debug"
  "sync"
)

func main() {
  wg := sync.WaitGroup{}

  wg.Add(1)
  go func() {
    defer func() {
      if err := recover(); err != nil {
        fmt.Printf("panic recovered! err: %v\n", err)
        debug.PrintStack()
      }
    }()

    doSomethingWillPanic()

    wg.Done()
  }()

  wg.Wait()
}

func doSomethingWillPanic() {
  panic("😵")
}

```


</p>

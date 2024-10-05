# runtime/debug：调试包的使用
## `debug.PrintStack`

可以打印**当前**协程的堆栈信息，适合在可能发生`panic`的协程中使用，可以在这里尝试：[https://goplay.tools/snippet/rbDv6_l9sp3](<https://goplay.tools/snippet/rbDv6_l9sp3>)

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


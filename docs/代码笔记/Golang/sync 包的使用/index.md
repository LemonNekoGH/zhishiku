# sync 包的使用
<p id="mzaR6BePFMisAspn36UhLE">



</p>


<p id="11QQaJ1A1EuR9WLvoXEvtv">

sync 包是 go 语言内置的同步包，包括了 Mutex 互斥锁，和 RWMutex 读写锁两个类型

</p>


<p id="aihcNFvYe1VCwa1qxWHZMi">

## Mutex 互斥锁

</p>


<p id="kb1vkC4sCjQxHDMRyMauhy">

当存在并发数据写入情况时，为了保证数据正确，会需要将写入操作加锁，以防止同时有其它协程在进行写入

</p>


<p id="jkSKMWjuGps7KLLrYMG778">

适用于读操作后紧接着写操作，并且这种写入可能并发的情况

</p>


<p id="9a4hakVBGotJ93K7D3Lms2">

```Go
count := 0
loc := sync.Mutex{}

for i := 0; i < 1000; i++ {
  go func() {
    loc.Lock()
    count += 1
    loc.Unlock()
  }
}
```


</p>


<p id="gr7eBFcP2A1PrmNecHokix">

## RWMutex 读写锁

</p>


<p id="w9ZUpMGQCEHkja7U9sAKo1">

如果读操作比写操作多，而且并不希望读操作会阻塞写操作的情况时使用读写锁

</p>


<p id="3wnk1q9BLr5GNw2tDpwvqp">

### 误区：写入之前会读取所以也要加读锁

</p>


- 当存在读锁时，写锁也会阻塞


- 其它协程在操作时也会尝试加写锁，会被当前的读锁阻塞，所以不用担心其它协程在写之前的读操作不会阻塞



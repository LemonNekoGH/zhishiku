# io：输入输出包的使用
## 小提示

- 遇到实现了 Closer 接口的结构体，最好在使用完成之后关闭

## 函数

### `io.NopCloser(r io.Reader) ReadCloser`

将`io.Reader`转换成`io.ReadCloser`

当有些函数要求传入`io.ReadCloser`但你只有`io.Reader`时可以使用

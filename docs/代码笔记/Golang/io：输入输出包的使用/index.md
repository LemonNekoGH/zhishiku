# io：输入输出包的使用
<p id="6TTHBbt5dbCLsoBkn5ysAn">

## 小提示

</p>


- 遇到实现了 Closer 接口的结构体，最好在使用完成之后关闭


<p id="3WxXXpRTg7swqwb2KyGAU8">

## 函数

</p>


<p id="1w1GL4iZ3PcPG194FyQUn9">

### `io.NopCloser(r io.Reader) ReadCloser`

</p>


<p id="v8348MhPPVQFr7HQMBsQpY">

将`io.Reader`转换成`io.ReadCloser`

</p>


<p id="wAVNXaCEgKUaFFnEzoQhkf">

当有些函数要求传入`io.ReadCloser`但你只有`io.Reader`时可以使用

</p>



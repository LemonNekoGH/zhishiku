# template 块中引用的变量不存在
<p id="oK8NijAsi4GFY3fVcxVJ5G">

<img src="https://secure2.wostatic.cn/static/nT8KLNhFY26mX3A7izZ1ib/image.png?auth_key=1724216320-2tfuir61rcibvtvL2brHYK-0-21238633520d83a1fc61fbdb6a6b5c3e&download=image.png" width="760.000000" height="94.333768">

</p>

<p id="mufQVpfZErM685GgDnKj2B">

图片中报了个错：`undefinedVariable`变量不存在，但是在渲染的过程中引用到了这个变量，并且给出了位置，在App.vue

</p>

<p id="6pSd3M3zfJZz3bREQWwhYM">

解决方法：去到App.vue 中寻找`undefinedVariable`，最好直接用全文搜索，然后检查这个变量的拼写是否错误，检查Vue实例中有没有定义类似名称的变量，想想这个名称的变量以前叫什么（重命名后忘记修改引用的时候经常遇到）

</p>

<p id="919MG2XQ6xFqeg4EqtXtK8">

<img src="https://secure2.wostatic.cn/static/7ibcfogd9qByVjvUQMWYht/image.png?auth_key=1724216320-KN4xdohaN4zM4RKtF1X8y-0-7081a59b6bf3719070f5785673786532&download=image.png" width="760.000000" height="421.239330">

</p>

<p id="pAsV3J1HxKhcMcJRMiCyQa">

可以发现在第 5 行的“双括号表达式”中引用了`undefinedVariable`，而 Vue 实例中没有定义`undefinedVariable`，删除引用的代码即可

</p>

<p id="dSoac8FZ3NyLbVj18ecMZt">



</p>

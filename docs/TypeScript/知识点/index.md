# 知识点
<p id="fM7gruqskfidSF4P8v1jXV">

## "Uncaught TypeError: Cannot read properties of null"

</p>

<p id="mbnAKEDmzCtYZvCW6hYp2j">

出现 "Uncaught TypeError: Cannot read properties of null" 的错误通常意味着尝试在一个不存在的元素上添加事件监听器。这种情况通常发生在尝试获取页面元素，但该元素在代码执行时还未加载到DOM中。

</p>

<p id="vgmjCxrxjk2kaE6W5R22z1">

为了解决这个问题，你需要确保在添加事件监听器之前，页面上的元素已经加载完成。这可以通过将你的JavaScript或TypeScript代码放在HTML元素之后或者使用`DOMContentLoaded`事件来确保DOM完全加载后再执行代码。

</p>

<p id="mQ9FvFocPa4KGm9Wt1A2Ct">



</p>

<p id="jLrjN8c9sYh64b7wivV5P2">



</p>

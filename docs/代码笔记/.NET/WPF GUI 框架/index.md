# WPF GUI 框架
<p id="qfrD9dM1aefWC4s5Frz7uR">

## 问题解决

</p>




1. 在主线程监听其它线程的事件，并且将值设置到 Label 组件时无效，但在主线程可以打印出来它的值
	<p id="cmfFveLmc32bmT3nTvqHNh">
	
	实际上事件触发时代码并没有运行在主线程，而 WPF 无法进行跨线程通信，需要通过`Label.Dispacther.Invoke(Action a)`来告诉主线程值该更新了
	
	</p>


<p id="gdVNpsowuk27HR6NeQtJvz">



</p>



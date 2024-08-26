# 问题与错误收集
<p id="uHWWmkRfAa6rcYpT5W4wb1">

## `Array.prototype.fill()`

</p>












- 填充的对象地址相同，因此如果想要创建一个带默认值的指定长度数组
	<p id="2ujA3Da3gV5NShwdnYsu5X">
	
	在性能不敏感的情况使用：
	
	</p>
	<p id="tMM5oPnopdmjYSpgDA58j">
	
	```JavaScript
	Array().fill().map()
	```
	
	
	</p>
	<p id="tYNxnC923GJyGrAsMLcNch">
	
	在性能敏感的情况下使用普通的`for`循环：
	
	</p>
	<p id="a9PmCYc9rte9MQgqrn2V6X">
	
	```JavaScript
	const matrix = Array(5)
	for (let i = 0; i < 5; i++) {
	  const el = Array(5)
	  for (let j = 0; j < 5; j++) {
	    el[j] = 0
	  }
	  matrix[i] = el
	}
	```
	
	
	</p>
	<p id="Tmk4otJ3s3cvmkpdqXvzr">
	
	
	
	</p>


<p id="qhu6UTncGesgz5ouJtzsEe">



</p>


<p id="9VppooHX5qgw1WuMQakq9Y">



</p>



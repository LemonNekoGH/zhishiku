# 错误收集


1. 不知道加载后的字体的 FontFamily 是什么
	<p id="uqTQqmdn9GyRxuBNAKCpgx">
	
	加载完资源后，用资源 Alias 把资源拿出来，然后用 console.log 打出来看看
	
	</p>






1. 文本（Text）很糊
	<p id="24hJ1ukzy8Yt9p29GZ5Mo1">
	
	需要在应用初始化之前手动设置 pixi 使用的屏幕密度
	
	</p>
	<p id="35HwrxiZ2YR3iDSbqaGhNF">
	
	```JavaScript
	import { settings } from 'pixi.js'
	
	settings.RESOLUTION = window.devicePixelRatio
	
	```
	
	
	</p>


<p id="5P4Gdo29h2WWBd6Nj1PHcL">



</p>



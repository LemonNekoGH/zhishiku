# Input System：输入系统
<p id="fxEL4kJ8BF6VCdmK1R7rVr">

这是官方的输入系统包，但是需要手动安装

</p>


<p id="85g4Ut5qum74XM7wRwhTwi">

## 使用方式

</p>


<p id="4wo14dPPoqdrCxoc4jfzHJ">

有好几种使用方式，各有优劣

</p>






- 直接在脚本中查询某按键按下情况
	<p id="x9Wf5TQgwZ5bgLApaFXR61">
	
	这种可能在原型阶段更适合使用，因为它是硬编码在代码中的，对于程序来说会更方便，也适合没有专门的编辑人员时
	
	</p>
	<p id="1WijqwTNFQxLFNtZKv3JpB">
	
	
	
	</p>






- 在编辑器中暴露「输入动作」，让编辑器可以编辑具体的按键，然后在脚本中获取绑定的按键的行为
	<p id="j62MfkGMAY8XKGFnSM1MYj">
	
	这种可以更灵活的进行按键编辑，但缺点是当脚本重新挂载时绑定的按键会丢失，需要手动为动作添加事件监听
	
	</p>
	<p id="4HH9SeXgH2sgdgzQR85cHY">
	
	
	
	</p>






- 在编辑器中暴露「动作资产」，让编辑器可以把按键以及绑定用文件的形式保存起来，稍微麻烦一些，但如果脚本重新挂载，只会丢失资产对象，重新把文件扔进去即可
	<p id="kB51uyTajKXdXGMpCB4hB3">
	
	需要手动为动作添加事件监听
	
	</p>
	<p id="dbQdSknoqMyj459FDXn1FN">
	
	
	
	</p>






- 使用`Player Input Component`，让它来接收「动作资产」并且在动作触发时以事件的形式调用到脚本的函数
	<p id="maFcjjtMvwp27etA8KgVxu">
	
	这种对于编辑器使用者来说比较复杂，但对于程序方面来说比较简单，程序不需要手动添加事件监听了
	
	</p>
	<p id="o691UoqDqgD6qxdb9UiV3K">
	
	
	
	</p>


<p id="5d9A8jxNaGHxFoZGDn6iXJ">



</p>



# 包管理器 bundle
<p id="mBWtrgNToxnT8wNBhhreLB">

它只能在项目中使用，用于管理项目的`gems`版本

</p>


<p id="9z6bc1EzZHDMXNFyYhsxxf">

一个项目中会包含以下两个文件

</p>




- `Gemfile`
	<p id="maujSqrGZJ5vhdeNj9iHQE">
	
	用于描述当前项目中包含哪些`gems`并且标注了版本，它本身也是`ruby`程序，因此可以在里面写代码
	
	</p>




- `Gemfile.lock`
	<p id="o79fdBVDsq8FNpzJn3A1WM">
	
	用于锁定 gems 的版本，作用与`package-lock.json``go.sum`相同
	
	</p>


<p id="bH12rhTBDEmZebD7jnq9M1">

## 命令

</p>


<p id="vGf6GKK9JUMAJ3o6zqsQC5">

### `install`

</p>


<p id="cMrykCPw8sLQ9JkRnb3TAe">

为项目安装`Gemfile`中定义的包

</p>


<p id="tAJBZ41XZBBqjMCUc1zLha">

### `add`

</p>


<p id="piXzwb9kT1rnkUfMFzPQ34">

为`Gemfile`添加一个`gem`并且安装它

</p>



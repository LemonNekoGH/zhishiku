# 错误收集








- 在卸载`Godot`之后，运行`dotnet build`报错：
	<p id="jjE9fJf2Q7C6cHa7SJ8HdF">
	
	环境：
	
	</p>
	<p id="t1AnGLV8rVaKwmKugRu33W">
	
	```text
	error MSB4018: NuGet.Packaging.Core.PackagingException: 无法找到回退包文件夹“/Users/lemonneko/Library/Application Support/Godot/mono/GodotNuGetFallbackFolder”
	```
	
	
	</p>
	<p id="dzgbeKRViS11pzXWPxCpkN">
	
	解决办法：
	
	</p>
	<p id="dSUEWewigTVC3a7MX97vXF">
	
	前往`~/.nuget/NuGet/config/`目录，可以发现有一个配置文件`Godot.Offline.Config`在这个配置文件中，定义了离线包所在的文件夹。删除此文件即可。
	
	</p>










- 在`WPF`项目中，在`Linux`环境中运行`dotnet format`时报错
	<p id="kDrJt8qoZCRvZfjYGfBQyB">
	
	```text
	error NETSDK1100: To build a project targeting Windows on this operating system, set the EnableWindowsTargeting property to true
	```
	
	
	</p>
	<p id="gHVpgy4v2WfhcrXYM22v4Q">
	
	原因：`WPF`项目是`Windows`专有的，所以`restore`的时候需要添加`/p:EnableWindowsTargeting`
	
	</p>
	<p id="3DasmEN1vntjVwJpd56jv4">
	
	解决方法：
	
	</p>
	<p id="vDmUPdxNgWT5wMDsST5jgT">
	
	添加`--no-restore`参数，禁止命令执行时自动执行`dotnet restore`
	
	</p>


<p id="4F3iYhGiZGb5RwXkwmVcu7">



</p>



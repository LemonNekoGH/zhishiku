# 代码生成
请先参考<a href="#4oQt7rV17q6GhAuSh8vfBc" style="color:inherit;text-decoration:underline dashed;">进行代码生成：ISourceGenerator 接口与 Generator 属性</a>

只需要在 Godot 项目的描述文件 .csproj 中加入以下属性：

```XML
<PropertyGroup>
  <CompilerGeneratedFilesOutputPath>.generated</CompilerGeneratedFilesOutputPath>
</PropertyGroup>
```


告诉编译器把生成的代码文件放入项目中的`.generated`文件夹，否则需要在`.godot/mono/temp/obj/Debug/generated`中才能看到生成的代码。



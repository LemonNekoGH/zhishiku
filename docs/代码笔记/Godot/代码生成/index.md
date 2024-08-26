# 代码生成
<p id="aBfMSqwqeM5NU33qhBKUGP">

请先参考<a href="#4oQt7rV17q6GhAuSh8vfBc" style="color:inherit;text-decoration:underline dashed;">进行代码生成：ISourceGenerator 接口与 Generator 属性</a>

</p>


<p id="223aSCcvWbUsxsFWKQqsLR">

只需要在 Godot 项目的描述文件 .csproj 中加入以下属性：

</p>


<p id="4JZXXbdc5bVN7ur7E64Jp2">

```XML
<PropertyGroup>
  <CompilerGeneratedFilesOutputPath>.generated</CompilerGeneratedFilesOutputPath>
</PropertyGroup>
```


</p>


<p id="nctpnH2St1M3nt8xXBFmGC">

告诉编译器把生成的代码文件放入项目中的`.generated`文件夹，否则需要在`.godot/mono/temp/obj/Debug/generated`中才能看到生成的代码。

</p>


<p id="uZDfH76F84BUfL3vXAuDfK">



</p>



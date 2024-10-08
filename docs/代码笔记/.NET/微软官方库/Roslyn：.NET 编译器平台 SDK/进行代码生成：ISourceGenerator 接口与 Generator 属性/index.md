# 进行代码生成：ISourceGenerator 接口与 Generator 属性
有时候，会为了节省重复代码等等需求，编写代码生成器来生成这些代码，在编译时，这些代码就会被生成并且编译到目标程序中。

我们这次来实现一个生成器，它会帮目标程序的主程序实现一个加法函数。

## 初始化

假设这个项目名称是：`SourceGeneratorCode`

安装依赖：

```Bash
$ dotnet add package Microsoft.CodeAnalysis.CSharp
$ dotnet add package Microsoft.CodeAnalysis.Analyzers
```


安装完成后，项目描述文件`.csproj`中会有类似以下依赖：

```XML
<ItemGroup>
    <PackageReference Include="Microsoft.CodeAnalysis.CSharp" Version="4.8.0" PrivateAssets="all" />
    <PackageReference Include="Microsoft.CodeAnalysis.Analyzers" Version="3.3.4" PrivateAssets="all" />
</ItemGroup>
```


在项目描述文件中添加以下属性以启用代码分析扩展：

```XML
<PropertyGroup>
  <EnforceExtendedAnalyzerRules>true</EnforceExtendedAnalyzerRules>
</PropertyGroup>
```


假设另一个项目名称是：`SourceGeneratorPlayground`

在依赖中加入代码生成器：

```C#
<ItemGroup>
    <ProjectReference 
      Include="../SourceGeneratorCode" 
      PrivateAssets="all"
      OutputItemType="Analyzer"
      ReferenceOutputAssembly="false" />
</ItemGroup>
```


其中，`OutputItemType`用于指定依赖在编译时用于做什么，`ReferenceOutputAssembly`用于指定是否引用依赖的`Assembly`文件。

如果想要知道代码生成器到底生成了什么文件，可以在项目描述文件中加入属性：

```XML
<PropertyGroup>
    <EmitCompilerGeneratedFiles>true</EmitCompilerGeneratedFiles> <!-- 告诉编译器把生成的代码写入文件 -->
</PropertyGroup>
```


## 编写`SourceGeneratorPlayground`的主程序

文件：`Program.cs`

```C#
public static partial class Program { // partial 关键字很重要，表示在其它地方也有这个类的内容，有了这个关键字之后，生成的代码就可以在这个文件中使用
  public static void Main() {
    Console.WriteLine(Add(1, 2));
  }
  
  static partial void Add(int a, int b); // 此处的 partial 关键字表示这个函数会在其它文件中被实现
}
```


需要被实现的`Add(int a, int b)`函数不能被`public`修饰，因为另一个类也只能存在于相同的命名空间，因此`public`修饰符无意义，如果希望被其它命名空间的代码调用，可以写一个包装函数。

## 编写代码生成器

假设另一个项目名称是：`SourceGeneratorPlayground`

我们编写一个生成器，来实现`Add(int a, int b)`

```C#
namespace SourceGeneratorCode;

[Generator]
public class CustomSourceGenerator : ISourceGenerator {
    public void Execute(GeneratorExecutionContext context)
    {
        string source = $@"// <auto-generated/>
namespace SourceGeneratorPlayground;

public static partial class Program
{{
    static partial void Add(int a, int b) => a + b;
}}
";
        // 将代码加入到目标程序中
        context.AddSource($"Program.g.cs", source);
    }

    public void Initialize(GeneratorInitializationContext context) {}
}
```


请注意：

1. 在文件头部加入`// <auto-generated/>`或者类似注释，表示此代码是被生成的，不希望被修改。

1. 实现的`Add(int a, int b)`函数也需要被`partial`修饰，否则编译时会报错：`Add`函数已经被定义。

1. 生成的代码文件命名为`*.generted.cs`或者`*.g.cs`，这样也可以二次提醒这个文件是被生成的。

1. 这个示例不是通用的，只能为`SourceGeneratorPlayground`命名空间中的`Program`类中生成`Add(int a, int b)`的实现。

## 运行目标项目

```Bash
$ dotnet run
# output: 3
```


可以在`.generated`文件夹中发现`Program.g.cs`，内容就是刚刚写的：

```C#
// <auto-generated/>
namespace SourceGeneratorPlayground;

public static partial class Program
{
    static partial void Add(int a, int b) => a + b;
}
```


## 问题解决

- 修改生成器之后，生成的代码却是旧代码生成器的生成结果。

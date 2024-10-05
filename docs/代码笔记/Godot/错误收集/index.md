# 错误收集
## 无法加载`godot-git-plugin`找不到`dll`

具体是找不到`\path\to\your\project\addons\godot-git-plugin\win64\libgit_plugin.windows.editor.x86_64.dll`

原因是使用 msvc 编译出来的 libgit 会依赖 vc++ 运行时，如果没有安装这个运行时，这个动态库就会加载失败

## Viewport Texture must be set to use it.

有相关 issue，并且到现在还处于 Open 状态：[https://github.com/godotengine/godot/issues/66247](<https://github.com/godotengine/godot/issues/66247>)

目前的解决方法：[https://github.com/godotengine/godot/issues/66247#issuecomment-1427522158](<https://github.com/godotengine/godot/issues/66247#issuecomment-1427522158>)

## 无法访问已销毁的对象

原始错误：

```纯文本
System.ObjectDisposedException: Cannot access a disposed object.
```


可以使用`GodotObject.IsInstanceValid`函数检查对象是否可用

[https://forum.godotengine.org/t/c-cannot-access-a-disposed-object/24885](<https://forum.godotengine.org/t/c-cannot-access-a-disposed-object/24885>)

## C# 项目的编辑器中的 Build 按钮消失

当`csproj`项目文件的名称与`godot`项目文件中`project/assembly_name`不一致时，编辑器会认为此项目不是 C# 项目，所以 Build 按钮会消失

```纯文本
[dotnet]
project/assembly_name="NameSpace"

```


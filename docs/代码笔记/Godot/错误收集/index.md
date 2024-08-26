# 错误收集
<p id="5dbipvSgYpAp39iSCGYgzC">

## 无法加载`godot-git-plugin`找不到`dll`

</p>


<p id="3g3rrKH5tHjxogLBh4DeTZ">

具体是找不到`\path\to\your\project\addons\godot-git-plugin\win64\libgit_plugin.windows.editor.x86_64.dll`

</p>


<p id="fV8J7fYBET41C3wRdawKhL">

原因是使用 msvc 编译出来的 libgit 会依赖 vc++ 运行时，如果没有安装这个运行时，这个动态库就会加载失败

</p>


<p id="xbsT6srvu7iy7Xc1coDcFG">

## Viewport Texture must be set to use it.

</p>


<p id="ebyBqKeBkKGqmUk5afEssf">

有相关 issue，并且到现在还处于 Open 状态：[https://github.com/godotengine/godot/issues/66247](<https://github.com/godotengine/godot/issues/66247>)

</p>


<p id="popMmuv4tKipbnEWZiXwuw">

目前的解决方法：[https://github.com/godotengine/godot/issues/66247#issuecomment-1427522158](<https://github.com/godotengine/godot/issues/66247#issuecomment-1427522158>)

</p>


<p id="8wzyS3fUfJUh5cCwpuYtCE">

## 无法访问已销毁的对象

</p>


<p id="kGzNBMExkSpnSCwRUfKWoJ">

原始错误：

</p>


<p id="nE869JkxK5b7DrXuJU9sbP">

```纯文本
System.ObjectDisposedException: Cannot access a disposed object.
```


</p>


<p id="bfwRmmcKuFNHPyrtFLutN8">

可以使用`GodotObject.IsInstanceValid`函数检查对象是否可用

</p>


<p id="jDKPwwm8HPXScfvjWTvsUK">

[https://forum.godotengine.org/t/c-cannot-access-a-disposed-object/24885](<https://forum.godotengine.org/t/c-cannot-access-a-disposed-object/24885>)

</p>


<p id="mJ3bvjH9JY2zNisxqUjLxp">

## C# 项目的编辑器中的 Build 按钮消失

</p>


<p id="9D5yCQLoaoyNjYaydTGWBN">

当`csproj`项目文件的名称与`godot`项目文件中`project/assembly_name`不一致时，编辑器会认为此项目不是 C# 项目，所以 Build 按钮会消失

</p>


<p id="rRAsXKEW29X82UiXYFdZ2E">

```纯文本
[dotnet]
project/assembly_name="NameSpace"

```


</p>



# Unity 构建 WebGL 平台应用
## 注意事项

### Player Settings 改动

1. 如果要允许 WebGL1 运行，需要把 Color Space 改为 Gamma

1. 如果要允许 WebGL1 运行，需要把 Lightmap Encoding改为 NormalQuality 或以下

## 问题与解决方法

### 添加与 JS 的互操作代码后，构建时出现 gbkc 编码错误，仅限 Windows

macOS 没有此问题，已切换至 macOS 继续开发。

### 导出时使用了 Convert.ToBase64String() 来把数据转成 Base64 但是在 JS 步骤使用了 atob 来转回去

可能因为两种 base64 方式不一样，导致导出之后的数据无法重新导入

## 与 JS 交互

需要使用 UTF8ToString 来读取 C# 传递过来的字符串

### async 函数

C# 不会等待 Promise 完成。

请通过 SendMessage 函数调用游戏对象的方法，需要将脚本挂到游戏对象上，然后才能调用。

## 导出数据到本地

1. C#：把数据序列化到内存

1. C#：把序列化后的数据转为 base64（System.Convert）

1. C#：把 base64 传递给 JS

1. JS：用传递过来的 base64 新建 blob

1. JS：新建 blob下载链接

1. JS：新建 a 标签，并且把 blob 下载链接设置为 href

1. JS：手动触发 a 标签的点击事件

1. JS：收回 blob 下载链接

1. JS：移除 a 标签

## 从本地上传数据

### JS 读取文件并转成 base64

<a href="#2bDG3J1Qg67CdseGQgUksz" style="color:inherit;text-decoration:underline dashed;">点击非 Input 元素时打开文件选择框并读取文件并转成 Base64</a>

1. JS：读取文件并转为 Base64

1. JS：调用 SendMessage，将数据交给 C#

1. C#：将参数转换成字节数组

1. C#：将字节数组作为参数新建内存流

1. C#：反序列化数据

1. C#：应用数据

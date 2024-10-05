# Git LFS
## 将现有文件加入`Git LFS`

在你的`.gitattributes`文件中加入你的文件

```text
src/assets/**/*.png filter=lfs diff=lfs merge=lfs -text

```


然后执行命令让`LFS`跟踪你的文件，请使用`""`引号将自己想要跟踪的文件`glob`包裹起来，否则 shell 会解析这个`glob`然后帮你把所有文件列出来了，除非你不介意每次新增二进制文件的时候手动添加具体文件路径

```Bash
git lfs track "src/assets/**/*.png"
```


删除`git`缓存

```Bash
git rm --cached src/assets/**/*.png
```


提交

```text
git commit -m 'Add files to Git LFS'
```




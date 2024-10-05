# 终端录制工具 svg-term-cli 和 asciinema
使用 svg-term-cli 录制命令行执行过程，并输出成动图，适合做命令行工具执行结果演示。

先用asciinema录好再转换可能更好

1. `brew install asciinema`安装依赖

1. `npm install -g svg-term-cli`安装工具

1. `asciinema rec out.cast`开始录制

1. `svg-term -—in out.cast > out.svg`将录制结果转成动态 svg

1. 使用 chrome 打开 out.svg 就是一张包含了终端运行过程的动图

某些地方不支持直接预览 svg 动画（比如 tg），就需要转换成 MP4 等格式来使用，使用[`timecut`](<https://github.com/tungs/timecut>)

1. 安装依赖`brew install ffmpeg`

1. 安装工具`pnpm add -g timecut`

1. `timecut <file>`完成后会在同目录生成`.mp4`文件

1. timecut 有几个参数需要注意：

# 小米 2
## 因分区表丢失或错误导致使用`fastboot`刷固件时失败

具体错误信息。

```PowerShell
Failed: remote: partition table doesn't exist
```


如果你的线刷包文件中包含`gpt_both0.bin`，就可以尝试救回来，在`cmd`中输入，也可以直接添加在`flash_all.bat`文件第一行。

```PowerShell
fastboot %* flash partition "%~dp0images\gpt_both0.bin" || @echo "Flash partition" && exit /B 1
```


相关链接：[https://blog.indexyz.me/xiaomi-miflash-error/](<https://blog.indexyz.me/xiaomi-miflash-error/>)

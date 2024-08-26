# 选择下次启动的引导
<p id="cKdVnpGMCQAuuo5ERZgs6y">

```Bash
sudo efibootmgr
# 输出
BootCurrent: 0002
Timeout: 1 seconds
BootOrder: 0002,0004
Boot0002* debian
Boot0004* Windows Boot Manager


```


</p>


<p id="7JEkvoJ2XtmBwxWN6K8FyA">

可以看到默认引导是 0002 也就是debian，如果下次开机想引导到windows，那么就选择0004，命令如下所示

</p>


<p id="bhn3LmjJkTH9bdCbTWeZbB">

```Bash
 sudo efibootmgr --bootnext 0004 
```


</p>


<p id="uH8H3SCSjXWF5B3QrBmPfZ">

使用`sudo reboot`重启

</p>


<p id="hNBkeBJwuLKj87qLLsSp5t">

结果：会引导到windows

</p>



# 获取小米手环 6 的心率数据
在蓝牙标准服务列表中存在心率数据服务，但可能出于数据泄露风险等原因，需要使用手环中的 Auth Token 来验证数据获取者的身份。

## 前置要求

- 在小米运动中将手环的“蓝牙广播”功能打开

- 在小米运动中将手环的“健康数据广播”功能打开

- 根据需要，在小米运动中，设置心率检测频率

## 通过破解的“小米运动”获取到手环的 Auth Token

上链接：[https://www.freemyband.com/2019/08/mi-band-4-auth-key.html](<https://www.freemyband.com/2019/08/mi-band-4-auth-key.html>)

寻找到`MiFit 5.3.1`，下载 APK 并且安装到手机，进行一次设备绑定之后，APP 就会自动在`/sdcard/freemyband/miband-<mac-address>.txt`中存入获取到的`Auth Token`，文件内容示例：

```纯文本
1A:2B:3C:4D:5E:6F;60155760263180457179310605729792
----------------- --------------------------------
|_ mac 地址        |_ Auth Token 会是 32 长度的字符串
```


## 使用 Auth Token 伪造受手环信任的身份

::: tip ⚠️
此方法仅在小米手环固件版本为`v1.0.0.34`时可用，其它版本请自行尝试。
:::

1. 寻找`ID`为`0xFEE1`的服务，在其中找到

## 开始获取心率数据

## 相关文章

[https://github.red/miband-heart-rate/comment-page-1](<https://github.red/miband-heart-rate/comment-page-1/>)

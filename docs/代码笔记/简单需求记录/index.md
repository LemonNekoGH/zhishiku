# 简单需求记录
## 为`JWT`生成`Secret Key`

要求：已安装`openssl`

```Bash
echo -n "somevalue" | openssl sha512 -hmac "somekey"
```


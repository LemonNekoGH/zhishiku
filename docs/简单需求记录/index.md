
<p id="bHp3fngpJinhDD1aGaFUK7">

## 为`JWT`生成`Secret Key`

</p>

<p id="pDZkgFnPXLbetXDG3xLFPV">

要求：已安装`openssl`

</p>

<p id="dQLSEazKq4ikSRBEN81E1e">

```Bash
echo -n "somevalue" | openssl sha512 -hmac "somekey"
```


</p>

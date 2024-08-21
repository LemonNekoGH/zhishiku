# 错误收集
<p id="tZxpNJjaKprDyogjchbMP2">

## 物体的位置被改变，但物体依然保持原位

</p>

<p id="4bwXJub4sHH1idGyFLaL93">

前往检查器中查看物体是否勾选了`static`属性，取消勾选即可正常看到物体被移动

</p>

<p id="4bg1S79Wi7w4SDMZhdMbvq">

<img src="https://secure2.wostatic.cn/static/ufPHmzrarjEaB7jS5fhNaf/image.png?auth_key=1724216311-oriXkZzV7naK8xRYXJFh9s-0-ac581ae9f045991ac789e9b72e28fdd2&download=image.png" width="513.000000" height="128.000000">

</p>

<p id="ufnRWzQGyhRcXTZvdQ6n8J">

## UI Toolkit 提供的 ListView 的子项目高度与项目真正高度不一致

</p>

<p id="xAcMnqVsxKvnPDsuiVhJcW">

<img src="https://secure2.wostatic.cn/static/eyrmtti5xJWy9xmfbwjzhF/image.png?auth_key=1724216311-cpYk2p8mr4YB327mYfpbkr-0-12cd662e604377a73878fb444bffa4a9&download=image.png" width="287.000000" height="136.000000">

</p>

<p id="m3EVpjXX6NLmWAhAKqqNWx">

像这样，项目高度为 100，但在列表中高度仅为 30

</p>

<p id="tBR44RJ2eyfccvvFEs55yQ">

<img src="https://secure2.wostatic.cn/static/h9HSWeTsnxbGBM6hQdrTxt/image.png?auth_key=1724216311-5DHCDMz5E531VEVN4XwU8A-0-9d5456bb4de95e276772cd0ab19a067b&download=image.png" width="344.000000" height="123.000000">

</p>

<p id="opc11W1Upke28baCuVC4yA">

因为 ListView 的 Virtualization Method 默认为 Fixed Height，就会按照上面的 Fixed Item Height 字段来设置高度，忽略子项目真正的高度，需要设置成 Dynamic Height

</p>

<p id="6DLPAi1T151uf9VbpjXiwH">

## 用 RenderTexture 渲染 UI 时，UI 的透明背景并不能应用到 Texture 中去

</p>

<p id="8JKiuiQEbcKqXk1tDCQvmY">

需要到 UI 对应的 PanelSettings 里面设置

</p>

<p id="3H738UpLtGiNEcDMBkKxxd">

<img src="https://secure2.wostatic.cn/static/nJuK1Q3r9QVzK2smuFDfZm/image.png?auth_key=1724216311-pt7CmNmpRXH6oxLuJWEbYV-0-89ceafb2bb7d0bc3b55c8136292a1519&download=image.png" width="758.000000" height="136.861111">

</p>

<p id="h2cSGdQTu7Y8FgbZyLM5yD">

Clear Color ☑️<br>Color Clear Value #00000000

</p>

<p id="vcRJwHUzKTXwQGjzMyHoYH">



</p>

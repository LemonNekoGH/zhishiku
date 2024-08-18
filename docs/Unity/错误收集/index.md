# 错误收集
<p id="tZxpNJjaKprDyogjchbMP2">

## 物体的位置被改变，但物体依然保持原位

</p>

<p id="4bwXJub4sHH1idGyFLaL93">

前往检查器中查看物体是否勾选了`static`属性，取消勾选即可正常看到物体被移动

</p>

<p id="4bg1S79Wi7w4SDMZhdMbvq">

<img src="https://secure2.wostatic.cn/static/ufPHmzrarjEaB7jS5fhNaf/image.png?auth_key=1723970774-77mkH1qht6pf15eSFDizob-0-d6a4a241ea3088345fd9b2817a64840d&download=image.png" width="513.000000" height="128.000000">

</p>

<p id="ufnRWzQGyhRcXTZvdQ6n8J">

## UI Toolkit 提供的 ListView 的子项目高度与项目真正高度不一致

</p>

<p id="xAcMnqVsxKvnPDsuiVhJcW">

<img src="https://secure2.wostatic.cn/static/eyrmtti5xJWy9xmfbwjzhF/image.png?auth_key=1723970774-eHCiMfYz6JfWzUP9guKXTd-0-74eb3c1373b3a740ba53359c64e54652&download=image.png" width="287.000000" height="136.000000">

</p>

<p id="m3EVpjXX6NLmWAhAKqqNWx">

像这样，项目高度为 100，但在列表中高度仅为 30

</p>

<p id="tBR44RJ2eyfccvvFEs55yQ">

<img src="https://secure2.wostatic.cn/static/h9HSWeTsnxbGBM6hQdrTxt/image.png?auth_key=1723970774-nRfEzFxgzHByXnWTbvoVUg-0-11e6bced400a7d00402ba1ae8cd34478&download=image.png" width="344.000000" height="123.000000">

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

<img src="https://secure2.wostatic.cn/static/nJuK1Q3r9QVzK2smuFDfZm/image.png?auth_key=1723970774-gESiGpAw2kf2McWieXAT6J-0-81c1f7dc83bafabd0eab8e8ce4d63e1f&download=image.png" width="758.000000" height="136.861111">

</p>

<p id="h2cSGdQTu7Y8FgbZyLM5yD">

Clear Color ☑️<br>Color Clear Value #00000000

</p>

<p id="vcRJwHUzKTXwQGjzMyHoYH">



</p>


<p id="tZxpNJjaKprDyogjchbMP2">

## 物体的位置被改变，但物体依然保持原位

</p>

<p id="4bwXJub4sHH1idGyFLaL93">

前往检查器中查看物体是否勾选了`static`属性，取消勾选即可正常看到物体被移动

</p>

<p id="4bg1S79Wi7w4SDMZhdMbvq">

<img src="https://secure2.wostatic.cn/static/ufPHmzrarjEaB7jS5fhNaf/image.png?auth_key=1722323814-raDCB4X9jVKaqsHycxi8Pg-0-0314b663f3a93e7d5c3b0d39add671cc&download=image.png" width="513.000000" height="128.000000">

</p>

<p id="ufnRWzQGyhRcXTZvdQ6n8J">

## UI Toolkit 提供的 ListView 的子项目高度与项目真正高度不一致

</p>

<p id="xAcMnqVsxKvnPDsuiVhJcW">

<img src="https://secure2.wostatic.cn/static/eyrmtti5xJWy9xmfbwjzhF/image.png?auth_key=1722323814-pgSkCSUC3ARNfHH5399CCX-0-cd20b0c891e34a0926689a8e7223ae18&download=image.png" width="287.000000" height="136.000000">

</p>

<p id="m3EVpjXX6NLmWAhAKqqNWx">

像这样，项目高度为 100，但在列表中高度仅为 30

</p>

<p id="tBR44RJ2eyfccvvFEs55yQ">

<img src="https://secure2.wostatic.cn/static/h9HSWeTsnxbGBM6hQdrTxt/image.png?auth_key=1722323814-vhH5jxJBdE75BWZsEDqgjh-0-ba89299ee52ae7b984585f291286f03b&download=image.png" width="344.000000" height="123.000000">

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

<img src="https://secure2.wostatic.cn/static/nJuK1Q3r9QVzK2smuFDfZm/image.png?auth_key=1722323814-iyA7mshvcsXkScxYJyRute-0-03d7eaa71d083bed28c407f1831c54fc&download=image.png" width="758.000000" height="136.861111">

</p>

<p id="h2cSGdQTu7Y8FgbZyLM5yD">

Clear Color ☑️<br>Color Clear Value #00000000

</p>

<p id="vcRJwHUzKTXwQGjzMyHoYH">



</p>

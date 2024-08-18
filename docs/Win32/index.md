# Win32
<p id="ut1oXKFrhq7U7E56kL6uwU">

## `SetWindowsExW`vs`SetWindowsExA`

</p>

<p id="orzGq3LobiMxv38of2dh54">



</p>

<p id="rRqqNQMdFN2ynkHCws6sFe">

`SetWindowsExA`返回的值的编码会根据当前操作系统的编码而改变，如果是简体中文，会是`GBK`

</p>

<p id="dSEx3oB46RsyBaHeMAjxys">

`SetWindowsExW`返回的值总是`UTF-16`

</p>

<p id="ojESN7KZQ6fRNhEvWcj9qs">



</p>

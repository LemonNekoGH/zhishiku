# Win32
## `SetWindowsExW`vs`SetWindowsExA`



`SetWindowsExA`返回的值的编码会根据当前操作系统的编码而改变，如果是简体中文，会是`GBK`

`SetWindowsExW`返回的值总是`UTF-16`



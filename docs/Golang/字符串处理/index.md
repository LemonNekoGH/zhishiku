
<p id="5zfup1xV3LuE26Qe1hW9CR">

## 正确的获取 unicode 字符串的长度

</p>

<p id="ohP57H5dvXgpjaXGiWHjBy">

请勿直接使用内置的 len 来取得字符串的长度，不一定会得到正确的结果

</p>

<p id="bmq6EePwxarvoKUCJAKY8z">

```SQL
fmt.Printf("len: length of 柠喵：%d\n", len("柠喵"))
// output: 6
fmt.Printf("len of []rune: length of 柠喵：%d\n", len([]rune("柠喵")))
// output: 2
fmt.Printf("utf8.RuneCountInString: length of 柠喵：%d\n", utf8.RuneCountInString("柠喵"))
// output: 2
```


</p>

<p id="q5ciu1fvNprqdLWv1G66cn">

同样的，当需要取子字符串时，请不要直接使用切片语法

</p>

<p id="d16YfXtYWGogZNbvFv54Lj">

```SQL
str := "可爱猫猫"
fmt.Println(str[:2])
// output: ��
fmt.Println(string([]rune(str)[:2])) // 先转成字符切片之后再使用切片语法，切好之后再转回去
// output: 可爱
```


</p>

<p id="8XL58cFZL8hBR6anQfuB2G">



</p>

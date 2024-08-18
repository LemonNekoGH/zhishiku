# 自带工具
<p id="4uBsAN8i4mgVAaTiqotzc4">

## `irb`

</p>

<p id="2DHUix6pjMRFcmkU8z2Har">

可以直接在命令行中输入`Ruby`代码并执行

</p>

<p id="dPZRJCKftSP6gcz8urnEui">

```text
lemonneko@LemonBookPro ~ % irb
3.2.2 :001 > def invokeFun
3.2.2 :002 >   yield
3.2.2 :003 > end
 => :invokeFun
3.2.2 :004 > invokeFun do
3.2.2 :005 >   puts "hello"
3.2.2 :006 > end
hello
 => nil
3.2.2 :007 >
```


</p>

<p id="yzRbdQXKduNP8CQf411Ui">

## `rake`

</p>

<p id="MTaVB2NdhqZ58fWiGhh9d">

可以执行`Rakefile`中定义的任务，可以看做是与`make`、`gradle`、`gulp.js`类似的东西，它使用`Ruby`语言，因此所有`Ruby`标准库都可以使用

</p>

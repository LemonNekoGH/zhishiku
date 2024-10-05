# 自带工具
## `irb`

一种`Ruby REPL`：可以直接在命令行中输入`Ruby`代码并执行

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


## `rake`

可以执行`Rakefile`中定义的任务，可以看做是与`make`、`gradle`、`gulp.js`类似的东西，它使用`Ruby`语言，因此所有`Ruby`标准库都可以使用

# 小技巧
<p id="hQ1HpW2BJ8aGdsRbyEWG49">

# 在命令后添加`&`可以将进程放入后台

</p>


<p id="6SDVhipaK2mgB8jypvvyrd">

例子：

</p>


<p id="s8T1dsrimqBaLqPkQwQUUa">

```Bash
& pnpm dev &
# 会输出 pid
[1] 87376

# 命令的输出依然在 stdout
  VITE v5.2.12  ready in 438 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  Vue DevTools: Open http://localhost:5173/__devtools__/ as a separate window
  ➜  Vue DevTools: Press Option(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools

  ➜  press h + enter to show help

p
# 在输入任意其它字符后进程被挂起
[1]  + suspended (tty input)  pnpm dev
& pnpm dev
# 由于上一个 vite 依然在运行，所以端口被占用
Port 5173 is in use, trying another one...

  VITE v5.2.12  ready in 569 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  Vue DevTools: Open http://localhost:5174/__devtools__/ as a separate window
  ➜  Vue DevTools: Press Option(⌥)+Shift(⇧)+D in App to toggle the Vue DevTools

  ➜  press h + enter to show help
  
Ctrl+C
& kill -9 87376 # 为了解除占用，需要杀死上一个 vite
[1]  + killed pnpm dev

```


</p>


<p id="hyDLA3hvcEr5ZXrQgQRRkj">



</p>



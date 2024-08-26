# 零碎知识问答
<p id="b8RyBPyRLBguMK3q5iRwAH">

## 为什么 UI 线程必须是主线程？

</p>


<p id="cBmXCfTMPUcSvV5goHgfa9">

因为用户只能看到 UI，所以 UI 卡死了用户就以为软件卡死了，操作系统就需要判断 UI 线程是否卡死，如果 UI 线程不是主线程，系统无法进行判断。

</p>


<p id="4PzYY9oKFa72bYBo6vTxB9">

## 为什么 UI 线程里面不能做阻塞操作？

</p>


<p id="hQ5uMYgjbDxJK6t6cdXmam">

因为这样 UI 线程就不会有响应。用户会以为软件卡死了。

</p>


<p id="f87Kp2bbGZPSNCP8P3pjAD">

## REPL 是什么？

</p>


<p id="dyei9AutXv6Eycr3wnz8kq">



</p>



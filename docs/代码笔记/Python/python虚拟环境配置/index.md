# python虚拟环境配置
<p id="uHZ73k4XFdZxz3MBYU5bG6">

从Python 3.11开始，Debian鼓励用户创建单独的Python虚拟环境来安装Python包。

</p>


<p id="nVTuvmMViFxnRv3gFmL1si">

因此，最佳方法是创建一个虚拟环境，例如`MyEnv`，并在其中安装软件包：

</p>


<p id="kTCv2BcCR66xCaTUvKiEfT">

这将创建一个`$HOME/.venvs/MyEnv`包含配置文件的目录`pyvenv.cfg`，其中包含该虚拟环境的一些详细信息，例如 Python 可执行文件和 Python 版本。

</p>


<p id="wwEzH3grRdKGqgsfhga6Af">

验证虚拟环境中Python的版本：

</p>


<p id="raR1LxXpEmTS6Wj47aDJd">

创建的虚拟环境的可执行文件位于`$HOME/.venvs/MyEnv/bin`.

</p>


<p id="4bLiUeUwLzGSZTwkrE2eUZ">

要将软件包安装到虚拟环境中，请使用

</p>


<p id="cLKPt7SkoMnRH1xiSeScdd">

要“激活”虚拟环境，即将其配置变量添加到 shell 环境中，请使用

</p>


<p id="igU11Yy3PdmiwTMVJc9YHe">

[请参阅https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments](<https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments>)`virtualenv`上`pip`的Python 指南。

</p>


<p id="o4iGqaAZZWG2C4HLrmC16U">



</p>



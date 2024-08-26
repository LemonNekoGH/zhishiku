# 用 GitHub Actions 构建 Unity 应用
<p id="niwQK8ffioxDpyS9dWyNTL">

## 参考文档

</p>


<p id="nagcq6o81r7QYo82HMpoyN">



</p>


<p id="pqhSpviHeUwu2ZpCcPakRr">

## 获取许可：个人免费版

</p>


<p id="bkStWvpU5dN4EhPxE8ZZe6">

编写以下工作流文件，并在 GitHub Actions 手动触发执行，因为许可文件会使用机器唯一标识符，所以无法在本地操作。

</p>


<p id="14H48VV8LfTBzBwEt94wCf">

获取许可的过程中使用到的 Action

</p>


<p id="v9YcNddtWKS3VTV3nQTaJ2">

```YAML
name: Acquire activation file
on:
  workflow_dispatch: {}
jobs:
  activation:
    name: Request manual activation file 🔑
    runs-on: ubuntu-latest
    steps:
      # Request manual activation file
      - name: Request manual activation file
        id: getManualLicenseFile
        uses: game-ci/unity-request-activation-file@v2
      # Upload artifact (Unity_v20XX.X.XXXX.alf)
      - name: Expose as artifact
        uses: actions/upload-artifact@v2
        with:
          name: ${{ steps.getManualLicenseFile.outputs.filePath }}
          path: ${{ steps.getManualLicenseFile.outputs.filePath }}
```


</p>


<p id="jbw4q2LTmLjjnViEQqTK1k">

完成后，还需要以下步骤才能让你的其它 GitHub Actions 工作流使用到许可文件。

</p>


1. 手动运行此工作流


1. 下载产物


1. 访问[license.unity3d.com](<https://license.unity3d.com/manual>)并上传产物


1. 根据提示下载许可文件


1. 设置以下仓库机密（你也可以使用自定义的机密名称）
	- `UNITY_LICENSE`- 复制许可文件内容
	- `UNITY_EMAIL`- 用来登录 Unity 官网的电子邮件地址
	- `UNITY_PASSWORD`- 用来登录 Unity 官网的密码


<p id="oEiEhj1zkmwvEMn8XPUHFm">

## 构建：WebGL

</p>


<p id="sEP8iLbQm8YQnNk5uU7rnb">

构建时使用到以下 Action

</p>


<p id="1LhXFdmVQHxADEtp3RtLsR">

完整实例

</p>


<p id="8R3CZsNWvMkmJzE9Gx9gqq">

```YAML
# WebGL 版本：构建并部署
name: 'WebGL: Build and deploy'
on:
  push:
    branches:
      - main
jobs:
  buildAndDeploy:
    permissions:
      contents: read
      deployments: write
    runs-on: ubuntu-20.04
    steps:
      # 代码检出
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          lfs: true

      # 缓存一些文件夹，加速构建
      - uses: actions/cache@v2
        with:
          path: Library
          key: Library-${{ hashFiles('Assets/**', 'Packages/**', 'ProjectSettings/**') }}
          restore-keys: |
            Library-

      # 构建项目
      - name: Build project
        uses: game-ci/unity-builder@v2
        env:
          UNITY_LICENSE: ${{ secrets.UNITY_LICENSE }}
          UNITY_EMAIL: ${{ secrets.UNITY_EMAIL }}
          UNITY_PASSWORD: ${{ secrets.UNITY_PASSWORD }}
        with:
          targetPlatform: WebGL

      # 上传产物
      - uses: actions/upload-artifact@v2
        with:
          name: Build
          path: build

```


</p>


<p id="ncjvnpFwVfw6V3Q54Bp2bw">

## 部署：WebGL

</p>


1. 以 gz 结尾的资源响应头中应当包含`Content-Encoding: gzip`


1. 以 wasm 结尾的资源响应头中应当包含`Content-Type: application/wasm`




1. WebGL 中使用了 Arial 字体的文本在遇到 Unicode 字符时无法自动切换，需要直接指定为支持的字体
	<p id="j4krkUFkoQSN8h3aAXuZcr">
	
	
	
	</p>


<p id="9G38cq64XGyDFcXdAoy17X">

### 在部署到 Cloudflare Pages 上时遇到的问题

</p>


<p id="7tBknh7zxHWkQnvkpPX9be">

Cloudflare Pages 上传产物时支持的最大单个文件体积为 25MB，对于一个 Unity 应用来说太小了，因此无法使用 Cloudflare Pages 部署 Unity 应用

</p>


<p id="g863hLMEqzHEQhiLPSt8Ab">

<span style="color:#8C8C8C;">*如果能想办法分割产物中的 wasm 文件也许还有救*</span>

</p>


<p id="jbpZJTGC2XWDvoEoed3Jim">



</p>


<p id="n8Qsc6iBUSRTRzWVpJXtWw">

## 构建：Windows

</p>


<p id="6NKboFmTZN8kFxU6Rii6mh">

只需要把构建目标改成`StandaloneWindows64`就可以了

</p>


<p id="3oXZWuAe4FncXDMgiziqxz">

## 构建：Android

</p>


<p id="7bHdn1yoWtArXg9vdCogDv">

构建目标改为 Android，同时需要提供 Base64 之后的密钥库，密钥库密码，密钥名称，密钥密码

</p>


<p id="fkj7JVdB8LiED353E9DPB9">

## 构建：iOS

</p>


<p id="tiR14amJGykdpup43Z7NYe">

构建目标改为 iOS，构建产物是 XCode 工程，需要使用 macOS 执行者执行二次构建

</p>


<p id="wEq1PVD4STtxFzvwEbzGEq">

## 构建：macOS

</p>


<p id="dZ6EX9RYF4tcFRa3pXpSpb">

构建目标改为 macOS，构建完成之后需要使用 macOS 执行者和证书进行签名

</p>



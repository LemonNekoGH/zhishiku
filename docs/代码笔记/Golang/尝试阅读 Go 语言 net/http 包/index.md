# 尝试阅读 Go 语言 net/http 包
<p id="xhin1rNSfhEoT3wjkTmk8q">

## 发送一次`GET`请求到`https://baidu.com`

</p>




- `main()`
	- `net/http.Get("https://baidu.com")`
		- `net/http.DefaultClient.Get("https://baidu.com")`
			- `net/http.NewRequest("GET", "https://baidu.com", nil)`
				- `net/http.NewRequestWithContext(context.Background(), "GET", "https://baidu.com", nil)`创建新的请求结构体
					- `net/http.validMethod("GET")`校验请求方法
						- `strings.IndexFunc("GET", net/http.isNotToken)`
							- `net/http.isNotToken(?)`
								- `net/http.IsTokenRune(?)`
					- `net/url.Parse("https://baidu.com")`
						- `strings.Cut("https://baidu.com")`切掉 '#' 之后的部分，因为不应当发送到服务器
							- `strings.Index("https://baidu.com", "#")`
						- `net/url.parse("https://baidu.com", false)`
							- `net/url.stringContainsCTLByte("https://baidu.com")`检查`URL`中是否包含`ASCII`控制字符，参考[`https://www.asciitable.com/`](<https://www.asciitable.com/>)
							- `net/url.getScheme("https://baidu.com")`获取`URL`的协议
							- `strings.ToLower("https")`将协议字符串转成小写
							- `strings.HasSuffix("","?") && strings.Count("","?")`检查 URL 剩余部分是否包含问号但没有查询参数
							- `strings.HasPrefix("//baidu.com", "/")`检查`URL`剩余部分是否以`/`作为前缀
							- `url.Scheme != "" || !viaRequest && !strings.HasPrefix("//baidu.com", "///")) && strings.HasPrefix("//baidu.com", "//")`
							- `net/url.parseAuthority("baidu.com")`获取`URL`中的用户名和密码
								- `strings.LastIndex(authority, "@")`获取到`@`符的位置
									- `net/url.parseHost("baidu.com")`解析 IP 地址和端口号
							- `net/url.URL.setPath("")`设置`URL`路径
					- `net/http.removeEmptyPort("baidu.com")`移除空白的端口号
					- 构造`net/http.request`结构体实例
		- `net/http.Client.Do`发送请求
			- `net/http.Client.do`发送请求
				- 
		<p id="p64tverdK1yfzk6LxK5fus">
		
		
		
		</p>



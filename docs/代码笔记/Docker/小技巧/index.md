# 小技巧


- 在基于`Debian/Ubuntu`的镜像中使用`APT`安装包之后可以使用以下命令来缩减镜像大小
	<p id="wivL4qYFTxop5i9idnGz69">
	
	```Bash
	rm -rf /var/lib/apt/lists/*
	```
	
	
	</p>




- Docker 构建时具有缓存机制，当执行的命令不变时会缓存此步骤，并且要求此前的步骤也是被缓存的
	<p id="sEsm8iMQheVRPF2CkDdomS">
	
	`COPY . .`指令在`Docker`看来是不可预测的，无法进行缓存，应当最先将`package.json`等依赖描述文件复制到镜像中，安装好依赖，再将其它文件复制进来，因为如果`package.json`等依赖描述文件如果没有发生变动，这部分就会被认为是已经缓存的，因此依赖的安装也会被缓存好，可以加快构建速度
	
	</p>




- 清空构建缓存
	<p id="isEJ3uNxScmo1RjXBBQaTn">
	
	```Bash
	docker builder prune
	```
	
	
	</p>




- 构建时输出每个命令的原始输出而不是隐藏起来
	<p id="vB3nZy9bkf8BYk1e3ybeJH">
	
	```Bash
	docker build . -t test --progress plain
	```
	
	
	</p>



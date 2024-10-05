# Open WebUI
无法连接到ollama：

把docker 容器的 网络 改成 —host

```Bash
docker run --rm \
  -e OLLAMA_API_BASE_URL=http://127.0.0.1:11434/api \
  --add-host=127.0.0.1:host-gateway \
  --net=host \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```


单用户模式：`WEBUI_AUTH`false



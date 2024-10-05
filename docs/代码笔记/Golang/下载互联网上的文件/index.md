# 下载互联网上的文件
```Go
  for url, fileName := range result.Images {
    fmt.Println("downloading image: " + url) //输出正在下载的url

    resp, err2 := http.Get(url) //使用http.Get方法获取url内容
    if err2 != nil { //如果错误不为空
      fmt.Println("failed to download image: " + url + ", " + err2.Error()) //输出url加错误信息
      os.Exit(exitCodeOutputError) //停止
    }
    contentType := resp.Header.Get("Content-Type") //获取http.harder
    fileExtension, err2 := mime.ExtensionsByType(contentType) //ExtensionsByType 返回已知与 MIME 类型 contentType 关联的扩展名,返回的扩展名均以一个前导点开头，例如“.html”
    if err2 != nil {
      fmt.Println("failed to get extension of image: " + url + ", " + err2.Error())
      os.Exit(exitCodeOutputError)
    }
    if fileExtension == nil { //如果fileExtension是空
      fmt.Println("no file extension associated with content type: " + contentType) //输出提示没有contentType
    }

    defer resp.Body.Close() //结束resp，防止内存泄漏

    err2 = os.MkdirAll(outputDirWithTitle+"/assets/", 0755) //补充之前路径并创建assets文件夹且赋予读写操作权限
    if err2 != nil {
      fmt.Println("failed to create convert result to: " + outputDir + "/" + pageTitle)
      os.Exit(exitCodeOutputError)
    }

    crefile, err2 := os.Create(outputDirWithTitle + "/assets/" + fileName + fileExtension[0]) //补齐路径，创建图片文件
    if err2 != nil {
      fmt.Println("failed to create image file: " + outputDir + "/" + pageTitle + "/assets/" + fileName + ", error: " + err2.Error())
      os.Exit(exitCodeOutputError)
    }
    defer crefile.Close()

    _, err2 = io.Copy(crefile, resp.Body) //将文件内容拷贝到创建好的文件中
    if err2 != nil {
      fmt.Println("failed to write image file: " + outputDir + "/" + pageTitle + "/assets/" + fileName + ", error: " + err2.Error())
      os.Exit(exitCodeOutputError)
    }

    result.Result = strings.ReplaceAll(result.Result, "["+fileName+"]", "./assets/"+fileName+fileExtension[0]) //使用strings.ReplaceAll进行字符串替换，将result.Result中的"["+fileName+"]"替换成"./assets/"+fileName+fileExte nsion[0]
  }
```




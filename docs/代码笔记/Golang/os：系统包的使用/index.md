# os：系统包的使用
### 判断一个文件或文件夹是否存在

```Go
// IsFileOrDirExists
// 判断文件或文件夹是否存在
// 存在：返回 nil
// 存在，但是不是文件 / 文件夹：返回 error
// 不存在：返回 error
// 无法确定：返回 error
func IsFileOrDirExists(path string, isDir bool) error {
  desc := ""
  if isDir {
    desc = "文件夹"
  } else {
    desc = "文件"
  }
  if fileInfo, err := os.Stat(path); err == nil {
    // 文件或文件夹存在
    if fileInfo.IsDir() != isDir {
      return errors.New("项目存在，但不是" + desc + ":" + path)
    }
  } else if errors.Is(err, os.ErrNotExist) {
    // 文件或文件夹不存在
    return errors.New(desc + "不存在:" + path)
  } else {
    return errors.New("无法确定" + desc + "存不存在:" + path)
  }
  return nil
}

```


# 特性
## 自动加载

可以在`config/application.rb`中配置需要在启动时启动加载的`Ruby`文件路径

比如创建项目时默认创建的`lib`文件夹并不会被加载，所以需要进行配置

```Ruby
module Example
  class Application < Rails::Application
    config.eager_autoload_paths << Rails.root.join('lib')
  end
end
```


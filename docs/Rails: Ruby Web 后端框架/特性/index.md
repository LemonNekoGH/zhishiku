# 特性
<p id="qa6DuGN9uVmDtdE38zM3TS">

## 自动加载

</p>

<p id="iSjF7bVgNEXxfyhkxvWAX7">

可以在`config/application.rb`中配置需要在启动时启动加载的`Ruby`文件路径

</p>

<p id="4KuwPhYoDME97menEeyKzQ">

比如创建项目时默认创建的`lib`文件夹并不会被加载，所以需要进行配置

</p>

<p id="jxLqLa13A6W3ymaYNB5oWh">

```Ruby
module Example
  class Application < Rails::Application
    config.eager_autoload_paths << Rails.root.join('lib')
  end
end
```


</p>

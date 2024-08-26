# 命令
<p id="mTXjNS2Aqm3sy5yUg6iHUn">

当你创建好项目后，如果你调用

</p>


<p id="ie739S8on7V15qJnrcx9jc">

```Bash
./bin/rails --help
```


</p>


<p id="6bAMs9XzmraVVsyQ3kWTwX">

的时候可以发现有一堆操作可以进行

</p>


<p id="g5fbbkBBgnSRfUe9wdaE3C">

```text
The most common rails commands are:
 generate     Generate new code (short-cut alias: "g")
 console      Start the Rails console (short-cut alias: "c")
 server       Start the Rails server (short-cut alias: "s")
 test         Run tests except system tests (short-cut alias: "t")
 test:system  Run system tests
 dbconsole    Start a console for the database specified in config/database.yml
              (short-cut alias: "db")
 new          Create a new Rails application. "rails new my_app" creates a
              new application called MyApp in "./my_app"
 plugin new   Create a new Rails railtie or engine

All commands can be run with -h (or --help) for more information.
In addition to those commands, there are:

  about
  action_mailbox:ingress:exim
  action_mailbox:ingress:postfix
  action_mailbox:ingress:qmail
  action_mailbox:install
  action_mailbox:install:migrations
  action_text:install
  action_text:install:migrations
  active_storage:install
  app:template
  app:update
  credentials:diff
  credentials:edit
  credentials:show
  db:create
  db:drop
  db:encryption:init
  db:environment:set
  db:fixtures:load
  db:migrate
  db:migrate:down
  db:migrate:redo
  db:migrate:status
  db:migrate:up
  db:prepare
  db:reset
  db:rollback
  db:schema:cache:clear
  db:schema:cache:dump
  db:schema:dump
  db:schema:load
  db:seed
  db:seed:replant
  db:setup
  db:system:change
  db:version
  destroy
  dev:cache
  encrypted:edit
  encrypted:show
  initializers
  kredis:install
  lattice_engine:install:migrations
  log:clear
  middleware
  notes
  restart
  routes
  runner
  secret
  secrets:edit
  secrets:setup
  secrets:show
  stats
  test:all
  test:db
  time:zones[country_or_offset]
  tmp:clear
  tmp:create
  version
  yarn:install
  zeitwerk:check
```


</p>


<p id="44rMCWm7JZYqWQisiCKKvJ">

这底下的所有命令都可以使用`--help`来查看用法

</p>


<p id="kYU33oF3msyc8zxohFW81S">

## 值得单独拿出来记录的命令

</p>


<p id="dmDAbpk62opf4Hxq5A5Yuw">

### `rails c / rails console`

</p>


<p id="gfEUJy6xpKQWMDMwEiTDNo">

用它可以开启一个`Ruby REPL`但是拥有`Rails`环境，你可以在里面访问你的`Rails`代码

</p>


<p id="kDe1XFQYd2vy6RiZwt1CRf">

比如你有一个`Action Mailer`

</p>


<p id="8rQgaa3a8STEQu8GgPEzQM">

```Ruby
class MyMailer < ApplicationMailer
  def mailer
    mail to: somebody@example.com, subject: 'example mail'
  end
end
```


</p>


<p id="jSdGxpFWQg3BzrNWEVQaoQ">

你就能在`rails console`里面直接调用它

</p>


<p id="9VSfQXdpVw3EhN4VVRTzum">

```Ruby
Loading development environment (Rails 7.0.7)
3.2.2 :001 > MyMailer.mailer.deliver_now
```


</p>



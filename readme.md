## FattyAPI
### 项目说明
* 在大量后端JAVA/PHP/C#等语言被web端使用ajax请求的过程中，导致后端服务器地址暴露并且受到攻击的背景下，增加了一个嫁接在web端已经后端接口的中间层。
* 项目主要架构为 View层 ViewModel层 DAO层
    * View层 前台web项目含APP
        * 在Version_1.3 增加对于View层的支持，如果只想使用纯ViewModel层的框架，可以直接拉取分支Version_1.2版本
    * ViewModel层 主要用于请求控制及转换和做获取数据后的分析以及重组
    * DAO层 数据层嫁接在各种后台接口之上
* 从而做到后端最终地址不被暴露，从而受到恶意攻击

### 分支说明
* Version_1.3 含有View层，整体框架为VVM框架
* Version_1.2 不含有View层，只包含 ViewModel层，在该项目中分为controller和service

### 目录说明
* app 应用文件层
    * common 公共方法文件脚本目录
    * config 配置文件脚本目录
    * controller 控制器目录
    * route 路由脚本目录
    * service 调用后台接口api目录
* var 工具目录
    * logs 日志目录

### 版本说明
#### version 1.3
* 为了小伙伴们方便增加了View层 直接成为VVM层框架
* 新增文件夹 public
    * 里面含有js/img/css 三个文件夹放入对应公用资源
* 新增文件夹 Views 里面存放对应的Html页面元素
    * 访问示例: http://localhost:17150/list

#### version 1.2
* 引入request-promise 模块
* 解决version 1.1 controller层 bug及问题
    * 现阶段service层接受到返回数据后可以在.then里面直接操作及分析数据

#### version 1.1
* 增加DEMO 获取文件列表 localhost:17150/file/list
* common/common.js 增加公共调用接口方法
    * 并且增加请求日志
* config/config.js 中配置请求接口地址
* 增加controller层
    * 目前contorller 尚有问题，暂时屏蔽下个版本更新处理

#### version 1.0 
* 初始化ResultAPI项目
    * 直接在根目录执行 pm2 start pm2.config.json
    * 如果没有安装pm2 请先执行 npm install pm2 -g 或者 cnpm install pm2 -g
* pm2.config.json说明
    * apps:json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
    * name:应用程序名称
    * cwd:应用程序所在的目录
    * script:应用程序的脚本路径
    * error_file:自定义应用程序的错误日志文件
    * out_file:自定义应用程序日志文件
    * pid_file:自定义应用程序的pid文件
    * instances:启用多少个实例，可用于负载均衡。如果-i 0或者-i max，则根据当前机器核数确定实例数目。
    * min_uptime:最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
    * max_restarts:设置应用程序异常退出重启的次数，默认15次（从0开始计数）
    * cron_restart:定时启动，解决重启能解决的问题
    * watch:是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
    * merge_logs:日志
    * exec_interpreter:应用程序的脚本类型，这里使用的shell，默认是nodejs
    * exec_mode:应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
    * autorestart:启用/禁用应用程序崩溃或退出时自动重启
    * vizion:启用/禁用vizion特性(版本控制)




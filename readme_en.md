### FattyAPI
#### Project Description
* In the process of a large number of back-end JAVA/PHP/C# being requested by front-end via AJAX, the back end server address is exposed and attacked. This project is an intermediate layer grafted between the back-end and front-end interface to prevent the previous mentioned problem.
* The main structure of the project is consisted of View layer, ViewModel layer and DAO layer.
    * View layer: front-end web project with APP
        * added support for View layer in Version_1.3. If you only want to use pure ViewModel layer framework, you can pull Version_1.2           branch directly.
    * ViewModel layer: mainly used for requests control and conversion, analysis and reorganization after obtaining data.
    * DAO layer data layer is integrated on all kinds of back-end interfaces.
* End address of back-end is not exposed, which prevents back-end from being attacked maliciously.

#### Branch Info
* Version_1.3 contains View layer, and the overall framework is VVM.
* Version_1.2 contains only ViewModel layer divided into controller and service in the project.

#### Catalog
* app: application file layer. App folder contains the following sub-directories:
   * common: Directory contains all the comomon method scripts.
   * config: Directory contains all the configurations.
   * controller: Directory contains all the controllers.
   * route: Directory contains all the router scripts.
   * service: Directory contains the background interface API calls.
* var: tool directory. Var folder contains the following sub-directories.
   * logs: Directory contains all the log files.
* public: static resource directory. Public folder contains the foloowing sub-directories.
   * img: Directory contains all pictures.
   * CSS: Directory contains CSS style files.
   * JS: Directory contains javascript scripts.
* views: Directory contrins all the page files.

#### Version description
##### Version 1.3
* View layer is added for user convenience, used directly as the VVM layer framework.
* New Folder: Public
   * This folder contains js/img/css sub-folders, relating to the corresponding public resources.
* New Folder: Views 
   * This fold is to store corresponding Html page elements.
   * access sample: http://localhost:17150/list

##### Version 1.2
* Request-promise module is introduced.
* Fixed the bugs and problems in controller layer from version 1.1
   * Current service layer can manipulate and analyze data directly in .then after receiving the returned data.

##### Version 1.1
* Added DEMO: Get file list: localhost:17150/file/list
* common/common.js 
   * Added common call interface method
   * Added request log
* Updated the request interface address in config/config.js
* Added the controller layer
   * Contorller is temporary hidden due to known problems. The problem will be fixed in next update.

##### Version 1.0
* initializing the ResultAPI project
   * execute PM2 start pm2.config.json directly in the root directory.
   * If PM2 is not installed, please execute:
      * npm install PM2 -g or
      * cnpm install PM2 -g first.
* pm2.config.json description
   * apps:json structure, apps is an array, and each array element is corresponding to an application running in PM2.
   * name: application name
   * cwd: application directory
   * script: script directory of the application
   * error_file: error log file for custom application
   * out_file: log file of custom application
   * pid_file:  PID file of custom application
   * instances: number of instances to be initiated, which can be used for load balancing.
      * If -i 0 or -i max, the number of instances is determined by the number of current cores of the machine.
   * min_uptime: minimum run time. Default value is 60s.
      * If the application exits within 60s, PM2 will think that the program exits exceptionally and trigger max_restarts             settings
   * max_restarts: the number of application restarts triggered by exceptions. Default value is 15 times (counting from 0).
   * cron_restart: restart timer.
      * Used to solve the problems that can be solved by restart.
   * watch: monitoring mode. Default value is false. PM2 automatically reloads by application changes if the value is true. 
      * Users can set the files to monitor.
   * merge_logs: logs
   * exec_interpreter: the script type of application. Default is Node.js. Here uses Shell.
   * exec_mode: application startup mode. Default is fork. Here sets to cluster_mode (cluster).
   * autorestart: enable/disable auto restart when application crashes or exits.
   * vizion: enable/disable vizion features (version control tool)

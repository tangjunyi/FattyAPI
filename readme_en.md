### FattyAPI
#### Project Description
* In the process of a large number of back-end JAVA/PHP/C# being request by front-end via AJAX, the back end server address is exposed and attacked. This project is an intermediate layer grafted between the back-end and front-end interface to prevent the previous mentioned problem.
* The main structure of the project is consisted of View level, ViewModel layer and DAO layer.
    * View layer: front-end web project with APP
        * added support for View layer in Version_1.3. If you only want to use pure ViewModel layer framework, you can pull Version_1.2           branch directly.
    * ViewModel layer: mainly used for requests control and conversion, analysis and reorganization after obtaining data.
    * DAO layer data layer is integrated on all kinds of back-end interfaces.
* End address of back-end is not exposed, which prevents back-end from being attacked maliciously.

#### A branch explanation
* Version_1.3 contains View layer, and the overall framework is VVM framework.
* Version_1.2 does not contain View layer, contains only ViewModel layer, and is divided into controller and service in the project.

#### A description of the catalogue
* app application file layer
* common common method file script directory
* config configuration file script directory
* controller controller directory
* route routing script directory
* service calls the background interface API directory
* var tool directory
* logs log directory
* public static resource directory
* img picture
* CSS Style
* JS script
* views page file directory

#### A version of the version
##### Version 1.3
* for the convenience of small partners, the View layer is added directly to the VVM layer framework.
* New Folder Public
* contains js/img/css three folders into the corresponding public resources.
* add new folder Views to store corresponding Html page elements.
* access sample: http://localhost:17150/list

##### Version 1.2
* introducing the request-promise module
* solve the version 1.1 controller layer bug and the problem
* at this stage, the service layer can directly manipulate and analyze data in.Then after receiving the returned data.

##### Version 1.1
* add DEMO to get file list localhost:17150/file/list
* common/common.js increases the common call interface method
* and increase the request log
* configuring the request interface address in config/config.js
* increase the controller layer
* there is still a problem with contorller, temporarily shielding the next version of the update.

##### Version 1
* initializing the ResultAPI project
* execute PM2 start pm2.config.json directly in the root directory.
* if PM2 is not installed, please execute NPM install PM2 -g or cnpm install PM2 -g first.
* pm2.config.json description
* apps:json structure, apps is an array, and each array member is corresponding to an application running in PM2.
* name: application name
* the directory where the cwd: application is located
* the script path of the script: application
* error_file: custom application error log file
* out_file: custom application log file
* pid_file: custom application's PID file
* how many instances can be enabled by instances: for load balancing? If -i 0 or -i max, the number of instances is determined according to the number of current machine cores.
* min_uptime: minimum run time, which is set here 60s that if the application exits within 60s, PM2 will think that the program exits exceptionally, and the number of max_restarts settings is triggered at this time.
* max_restarts: sets the number of application exceptions to restart and defaults 15 times (counting from 0).
* cron_restart: starts regularly to solve the problems that can be solved by restart.
* whether watch: enables monitoring mode, and the default is false. If set to true, PM2 automatically reloads when the application changes. You can also set up the files that you want to monitor.
* merge_logs: log
* the script type of the exec_interpreter: application. The shell used here is nodejs by default.
* exec_mode: application startup mode, where cluster_mode (cluster) is set, and fork is the default.
* autorestart: enable / disable auto restart when application collapses or exits.
* vizion: enable / disable vizion features (version control)
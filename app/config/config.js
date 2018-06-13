'use strict';
const path = require('path');

module.exports = function() {
    let appBaseDir = __dirname + '/../';
    return {
        appName: 'FattyAPI',
        appBaseDir: appBaseDir,
        viewBaseDir: path.join(appBaseDir, '../views/'),
        publicBaseDir: path.join(appBaseDir, '../public/'),
        openapi: "http://test.tangjunyi.net/index.php/api/",
        port: 17150,
        log4js: {
            appenders: {
                console: {
                    type: 'console',
                    layout: {
                        'type': 'pattern',
                        'pattern': '%d{[yyyy-MM-dd hh:mm:ss.SSS]}[%p][FattyAPI] - %m'
                    }
                },
                dateFileAuto: {
                    type: 'dateFile',
                    filename: './var/logs/access',
                    alwaysIncludePattern: true,
                    pattern: "_yyyy-MM-dd.log",
                    maxLogSize: 20480,
                    category: "log_date",
                    category: 'normal',
                    level: 'auto',
                    layout: {
                        'type': 'pattern',
                        'pattern': '%d{[yyyy-MM-dd hh:mm:ss.SSS]}[%p][FattyAPI] - %m'
                    }
                }
            },
            replaceConsole: true,
            categories: {
                default: { appenders: ['dateFileAuto', 'console'], level: 'info' }
            }
        }
    }
}
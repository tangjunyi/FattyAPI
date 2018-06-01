'use strict';

module.exports = function() {
    let appBaseDir = __dirname + '/../';
    return {
        appName: 'FattyAPI',
        appBaseDir: appBaseDir,
        openapi: "api地址",
        port: 17150,
        cookies: {
            secretKey: 'loveyourlife'
        },
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
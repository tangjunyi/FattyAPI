const request = require('request');
const FileService = importService('service/file');

module.exports = {
    filelist: function(req, res) {
        FileService.filelist(req.params,res);
    }
}
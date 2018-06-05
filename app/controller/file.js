const FileService = importService('service/file');

module.exports = {
    filelist: function(req, res) {
        FileService.filelist(req.params,res);
    }
}
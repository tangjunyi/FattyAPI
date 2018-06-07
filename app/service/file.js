class FileService {
    filelist(params,res) {
        __Ajax("port/fileList",params,res)
            .then(response => {
                res.send(response);
            });
    }
}

module.exports = FileService;
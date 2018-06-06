class FileService {
    filelist(params,res) {
        return __Ajax("port/fileList",params,res);
    }
}

module.exports = FileService;
class FileService {
    filelist(params,res) {
        __Ajax("port/fileList",params,res);
    }
}

module.exports = FileService;
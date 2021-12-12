
const multer = require('multer');
const path = require('path');

class Upload {
    static uploader = (name, uploadPath, extentions = [], fileSize = 1024 * 1024 * 10, isMutiple = false, fileCount = 1) => {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, path.join(__dirname, `../../public/images/${uploadPath}`))
            },
            filename: function (req, file, cb) {
                cb(null, file.originalname)
            }
        })

        const multerUpload = multer({
            storage: storage,

            limits: {
                fileSize: fileSize
            },

            fileFilter: function (req, file, cb) {
                if (extentions.length) {
                    if (extentions.includes(file.mimetype)) {
                        const ext = path.extname(file.originalname);

                        return cb(null, fileName ? `${fileName}.${ext}` : file.originalname)
                    }

                    return cb(new Error(`Invalid file type. File types can be like this list [${extentions.join(',')}]`))
                }

                return cb(null, file.originalname)
            }
        })

        if (isMutiple) {
            return multerUpload.array(name, fileCount)
        }

        return multerUpload.single(name)
    }
}

module.exports = { Upload }
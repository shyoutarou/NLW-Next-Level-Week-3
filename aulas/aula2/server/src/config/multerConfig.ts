import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const filenName = `${Date.now()}-${file.originalname}`;
            cb(null, filenName);
        },
    }),
    limits: {
        fileSize: 2*1024*1024
    },
    filefilter: function(req: any, file: any, cb:any) {
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/png",
            "image/gif"
        ]

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type."));
        }
    }
};
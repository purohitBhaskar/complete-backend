import multer from "multer";


//multer is used to have option of using the file 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname)
    }
  })
  
  export const upload = multer({ storage: storage })
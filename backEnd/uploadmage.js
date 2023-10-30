const multer  = require('multer')

module.exports = (multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/img')
          },
      
          filename: function (req, file, cb) {
              const uniqueSuffix = Date.now() 
              cb(null, uniqueSuffix + file.originalname)
            },
      
            
            fileFilter: (req, file, cd) => {
              const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg'].find
                   (formatoAceito => formatoAceito == file.mimetype);
                   if (extensaoImg) {
                      return cb(null, true);
                   } 
      
                   return cb(null, false);
            }
    })
}))


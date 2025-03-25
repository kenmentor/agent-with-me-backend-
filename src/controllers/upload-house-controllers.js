
const {upload_house_service} = require("../service")
async function upload_house_controller(res,req){
   const { files, body } = req;
   const data = upload_house_service(files, body )
   res.json({working:true})
    

}
module.exports = upload_house_controller

const {upload_house_service} = require("../service")
async function upload_house_controller(res,req){
   const { files, body } = res;
   console.log("files",files)
   console.log("body",body)
   const data = upload_house_service(files, body )
  
}
module.exports = upload_house_controller
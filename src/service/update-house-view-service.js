const {crudRepositoryExtra} = require("../repositories/index")
const {resourceDB} = require("../modules")
async function update_house_view_service(id){
    try {

 
    const newcrudRepositoryExtra = new crudRepositoryExtra(resourceDB)
    const data = await newcrudRepositoryExtra.update(id)
    return {view:data.view}
}catch(err){
    console.log("erro while updating -service ")
}
}
module.exports = update_house_view_service
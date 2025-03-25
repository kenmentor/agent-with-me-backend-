const {get_house_details_repositories} = require ("../repositories")
const {resourceDB} = require("../modules")
const {crudRepositoryExtra} = require("../repositories")
const {connectDB} = require("../utility")
async function get_house_details(id){
    console.log("get-details-service ")
   
    connectDB()
    
    const newcrudRepositoryExtra = new crudRepositoryExtra(resourceDB)
    try{
        const data = await newcrudRepositoryExtra.getDetail(id)
       
    return data
    }
    catch(err){
    console.log("error happen at service get house",err)
    }
}
module.exports = get_house_details
const {get_house_repositories} = require("../repositories")
const {resourceDB}= require("../modules")
const {crudRepositoryExtra} = require("../repositories")
const {connectDB} = require("../utility")
async function get_all_houses (){
   
    const newcrudRepositoryExtra = new crudRepositoryExtra(resourceDB)
    return newcrudRepositoryExtra.findAll()
}
module.exports = get_all_houses

const {resourceDB} = require("../modules")
const {crudRepositoryExtra} = require("../repositories")
const {connectDB} = require("../utility")
async function find_house(type,keyword){
    connectDB()
    const newcrudRepositoryExtra = new crudRepositoryExtra(resourceDB)
   return  newcrudRepositoryExtra.find(type,keyword)
}
module.exports = find_house
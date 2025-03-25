const {update_house_view_service}= require("../service")
async function update_house_view_controller(res,req){
    const id = await req.body.id
try{
    const data = await update_house_view_service(id)
    res.json(data)
}
catch(erro){
    res.json({erro:"server erro -controller"})
console.log("erro happen while updating view -controller")
throw erro
}
}
module.exports = update_house_view_controller
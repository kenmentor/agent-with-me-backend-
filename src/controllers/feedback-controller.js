const {feedback_service} = require("../service")
const {response} = require("../utility")

async function create_feedback(req,res){
try {
    
    const {feedback} = await req.body
    feedback_service.create_feedback(feedback) 
    res.json(response.goodResponse.message = "thanks for your feedback")
}catch(err){
   
    res.json(response.badResponse)
    throw err
}
}
async function get_feedback(req,res) {
    try{
        const data = await feedback_service.get_feedback()
        res.json(response.goodResponse.data = data)
    }catch(err){
       
        res.json(response.badResponse)
        throw err
    }
}
module.exports = {
    create_feedback,
    get_feedback,
}
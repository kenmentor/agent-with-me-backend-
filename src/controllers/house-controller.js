const { house_service } = require("../service");
const {response} = require("../utility")

const get_house_detail = async (req, res) => {
  try {
    const { id } = req.params; 
    if (!id) {
      const responseData = response.badResponse
      responseData.message = "ID required"
      return res.json(responseData).status(200);
    }
console.log(id,"this id jbfyfyuf by")
    const data = await house_service.get_details(id); // ✅ Pass correct ID
    const responseData = response.goodResponse
        responseData.data = data
        res.json(responseData).status(200) 
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).json({ error: "Failed to fetch resource" }); // ✅ Send error response
  }
};




async function get_house (req, res) {
    const { type,min,max,category,location,limit,bardge} = req.query;
    console.log(req.query);
    
    
    try{
      
            const data = await house_service.find_house(type,parseInt(min),parseInt(max),category,location,parseInt(limit),parseInt(bardge))
            const responseData = response.goodResponse
            responseData.data = data
            return res.json(responseData).status(200)
            
       
      

      
       
    
    }
    catch (error) {
      const responseData = response.badResponse
      console.error("Error fetching data from DB:", error);
      res.status(500).json(responseData)
    }
}

async function update_house_view(res,req){
    const id = await req.body.id
try{
    const data = await house_service.update_house_view(id)
    const responseData = response.goodResponse
    responseData.data = data
    res.json(responseData)
}
catch(erro){
  const responseData = response.badResponse
  res.json(responseData)
console.log("erro happen while updating view ")
throw erro
}
}


async function upload_house(res,req){
   const { files, body } = res;
   console.log("files",files)
   console.log("body",body)
   const data = house_service.upload_house(files, body )
   const responseData = response.goodResponse
    res.json(responseData)
  
}

module.exports = {
 upload_house,
 update_house_view,
 get_house,
 get_house_detail,
}




const { house_service } = require("../service");

const get_house_detail = async (req, res) => {
  try {
    const { id } = req.params; // ✅ Get ID correctly
    console.log("Extracted ID:",  req.params);

    if (!id) {
      return res.status(400).json({ error: "ID is required" });
    }

    const data = await house_service.get_house_details(id); // ✅ Pass correct ID
    res.json(data); // ✅ Send the data to client
  } catch (error) {
    console.error("Error fetching resource:", error);
    res.status(500).json({ error: "Failed to fetch resource" }); // ✅ Send error response
  }
};




async function get_house (req, res) {
    const { keyword, type } = req.query;
    console.log(req.query);
    
    
    try{
        if(keyword||type ){
            const data = await house_service.find_house(keyword, type)
            return res.status(200).json(data)
            
       }
      

      
        const data = await house_service.get_all_houses()
        res.status(200).json(data)
       
    
    }
    catch (error) {
      console.error("Error fetching data from DB:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}

async function update_house_view(res,req){
    const id = await req.body.id
try{
    const data = await house_service.update_house_view(id)
    res.json(data)
}
catch(erro){
    res.json({erro:"server erro "})
console.log("erro happen while updating view ")
throw erro
}
}


async function upload_house(res,req){
   const { files, body } = res;
   console.log("files",files)
   console.log("body",body)
   const data = house_service.upload_house(files, body )
  
}

module.exports = {
 upload_house,
 update_house_view,
 get_house,
 get_house_detail,
}




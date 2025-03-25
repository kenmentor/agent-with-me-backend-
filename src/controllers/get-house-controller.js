
const {find_house_service,get_all_houses_service} = require("../service")

async function get_house_controller (req, res) {
    const { keyword, type } = req.query;
    console.log(req.query);
    
    
    try{
        if(keyword||type ){
            const data = await find_house_service(keyword, type)
            return res.status(200).json(data)
            
       }
      

      
        const data = await get_all_houses_service()
        res.status(200).json(data)
       
    
    }
    catch (error) {
      console.error("Error fetching data from DB:", error);
      res.status(500).json({ error: "Internal server error" });
    }
}
module.exports = get_house_controller
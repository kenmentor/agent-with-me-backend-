const mongoose = require("mongoose")
const fuzzysort = require('fuzzysort');
class crudRepositoryExtra {
    constructor(module){
        this.module = module;
        this.connectDB = require("../utility/connectDb")
        this.connectDB()
        console.log("get-details-constructor ")
        
    }
   
    async updateAny(object){
      try{

     
      const verifiedUser = await this.module.findOneUpdate(object)
      return verifiedUser
      }
      catch (error) {
        console.error("Error fetching data from DB:", error);
        
      }
    }
    async  find(type,keyword){
       
    
        try {
          let query = {};
      
          if (keyword) {
            query.title = { $regex: keyword, $options: "i" }; // Case-insensitive search
          }
      
          if (type) {
            query.type = { $in: Array.isArray(type) ? type : [type] }; // Ensure type is an array
          }
      
          const data = await this.module.find(query); 
          return data
      
          
        } catch (error) {
          console.error("Error fetching data from DB:", error);
          ;
        }
      
    }
    
    async  findAll(){
       
       try{
      
          const data = await this.module.find(); 
          return data
        } catch (error) {
          console.error("Error fetching data from DB:", error);
          
        }
      
    }
    async  update(id){
       
      try{
     
         const data = await this.module.findByIdAndUpdate(id,{$inc: {view:1}},{new:true}); 
         return data
       } catch (error) {
         console.error("Error fetching data from DB:update -id");
         
       }
     
   }

    
    async getDetail(id) {
      console.log("get-details-crud ");
    
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error("id is not valid ");
      }
    
      try {
        const data = await this.module.findById(id);
    
        if (!data) {
          throw new Error("Resource not found");
        }
    
        return data; 
      } catch (error) {
        console.error("Error fetching resource:", error);
        throw new Error("Failed to fetch resource"); 
      }
    }
    
        
        
            async  create (object){
              try{

                const newmodule = new this.module(object);
                  const resource = await newmodule.save();
                  return resource ;
              }catch(err){
                console.log("error while creating data -crud")
                throw err 
                  }
            }
            

            async filter(filter) {
        try {
            let query = {};
            if (filter.keyword) {
                const regex = new RegExp(filter.location, "i");
                query.location = regex
            }
            
            if (filter.min) query.price = { $gte: filter.min };
            if (filter.max) query.price = { ...query.price, $lte: filter.max };

            return await this.module.find(query)
                .limit(filter.limit)
                .skip((filter.limit * (filter.bardge || 1)) - filter.limit)
                .sort({ createdAt: -1 });
        } catch (error) {
          console.error("Error filtering data:", error);
          throw error
            
        }
    }


            
            
          async losefilter (filter){

            function queryBuilder(filter){
            let query = { $or:[

            ]}

          
          }
          this.module.find(queryBuilder(filter))
          .limit(filter.limit)
          .skip((filter.limit*filter.bardge)-1)
          .exec((err,house)=>{
            return house
          })
        }
          
}
module.exports = crudRepositoryExtra
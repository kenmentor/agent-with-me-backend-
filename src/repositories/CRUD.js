const mongoose = require("mongoose")
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
    
        return data; // ✅ Return actual data from DB
      } catch (error) {
        console.error("Error fetching resource:", error);
        throw new Error("Failed to fetch resource"); // ✅ Rethrow for better error handling
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
            async filter (filter){

              function queryBuilder(filter){
              let query = {}
              if(filter.keyword) query.title = new RegExp(filter.keyword,"i")
              if(filter.keyword) query.description = new RegExp(filter.keyword,"i")
              if(filter.min) query.price = {$gte:filter.min}
              if(filter.max) query.price = {...filter.price,$lte:filter.max}
              if(filter.category) query.category = new RegExp(filter.category,"i")
              if(filter.type) query.type = new RegExp(filter.type,"i")
              if(filter.location) query.location = new RegExp(filter.location,"i")
              return query
            }
            this.module.find(queryBuilder(filter))
            .limit(filter.limit)
            .skip((filter.limit*filter.bardge)-1)
            .exec((err,house)=>{
              return house
            })
          }
          async losefilter (filter){

            function queryBuilder(filter){
            let query = { $or:[

            ]}

            if(filter.keyword) query.$or.push({new RegExp(filter.keyword,"i")})
            if(filter.keyword) query.$or.push({new RegExp(filter.keyword,"i")})
            if(filter.min) query.$or.push( {$gte:filter.min})
            if(filter.max) query.$or.push(  {...filter.price,$lte:filter.max})
            if(filter.category) query.$or.push({new RegExp(filter.category,"i")})
            if(filter.type) query.$or.push({ new RegExp(filter.type,"i")})
            if(filter.location) query.$or.push({ new RegExp(filter.location,"i")})
            return query
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
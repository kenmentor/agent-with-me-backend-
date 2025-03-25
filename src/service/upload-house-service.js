const {crudRepositoryExtra} = require("../repositories")
const {resourceDB}= require("../modules")
const { v2: cloudinary } = require("cloudinary");
const {connectDB } =  require("../utility");
require('dotenv').config();






async function upload_house_service(files, body ){

    console.log("Cloudinary Config:", {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET ? "***" : null, // Hide secret in log
      });
    // Configure Cloudinary using your environment variables
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    
        
        console.log(body)
        await connectDB();
        try {
          // Helper function to upload a file buffer to Cloudinary
          const uploadBufferToCloudinary = (fileBuffer, folder = "default") => {
            return new Promise((resolve, reject) => {
              const stream = cloudinary.uploader.upload_stream(
                { folder, resource_type: "auto" }, // "auto" handles images, PDFs, audio, etc.
                (error, result) => {
                  if (result) {
                    resolve(result);
                  } else {
                    reject(error);
                  }
                }
              );
              stream.end(fileBuffer);
            });
          };
    
          // Process thumbnail upload (if provided)
          let thumbnailUrl = "";
          if (files.thumbnail && files.thumbnail.length > 0) {
            const thumbnailUploadResult = await uploadBufferToCloudinary(
              files.thumbnail[0].buffer,
              "thumbnails"
            );
            thumbnailUrl = thumbnailUploadResult.secure_url;
          }
    
          // Process general files upload (if provided)
        
          if (files.files && files.files.length > 0) {
            // Upload all files concurrently using Promise.all
            resources= await Promise.all(
              files.files.map((file) =>
                uploadBufferToCloudinary(file.buffer, "resources").then(
                 
                  (result) => ({url:result.secure_url,type:result.mimetype})
                ).then(()=> console.log(file))
              )
            );
          }
          const newcrudRepositoryExtra =  new crudRepositoryExtra(resourceDB)
          const data  = crudRepositoryExtra.create(body)
          return data
    
    
        } catch (error) {
          console.error("Error handling upload:", error);
          throw error
        }
      }
      module.exports = upload_house_service
    
    
    

   


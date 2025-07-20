// routes/resource.js (or wherever your route file is located)

require('dotenv').config();


console.log("Cloudinary Config:", {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET ? "***" : null, // Hide secret in log
});
const express = require("express");
const multer = require("multer");
const { v2: cloudinary } = require("cloudinary");
const router = express.Router();
const Resource = require("./modules/resource");
const connectDB = require("./utility/connectDb");

// Configure Cloudinary using your environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use memory storage to get file buffers instead of saving files locally
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST /upload endpoint that processes two fields: "files" and "thumbnail"
router.post(
  "/upload",
  upload.fields([{ name: "files" }, { name: "thumbnail" }]),
  async (req, res) => {
    // Ensure DB connection (adjust this if your connectDB returns a promise)
    
    

    const { files, body } = req;
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


      const newResource = new Resource({
        header: body.title,
        description: body.description,
        type: body.type ,
        thumbnail: thumbnailUrl,
        gallery:resources, 
        views: 0,
        state:body.state,
        adress:body.adress,
        landmark:body.adress,
      });
      

      const resource = await newResource.save();
      console.log("Uploaded resource:", resource);
      res
        .status(200)
        .json({ message: "Resource uploaded successfully!", resource });
    } catch (error) {
      console.error("Error handling upload:", error);
      res
        .status(500)
        .json({ message: "Failed to upload resource.", error: error.message });
    }
  }
);


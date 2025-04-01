const { resourceDB } = require("../modules");
const { crudRepositoryExtra } = require("../repositories");
const { connectDB } = require("../utility");
const { v2: cloudinary } = require("cloudinary");

require("dotenv").config();

const newcrudRepositoryExtra = new crudRepositoryExtra(resourceDB);

async function find_house(type, keyword,min,max,category,type,location,limit,bardge) {
  await connectDB();
  return newcrudRepositoryExtra.filter(type, keyword,min,max,category,location,limit,bardge);
}

async function get_all_houses() {
  await connectDB();
  return newcrudRepositoryExtra.findAll();
}

async function update_house_view(id) {
  try {
    const data = await newcrudRepositoryExtra.update(id);
    return { view: data.view };
  } catch (err) {
    console.error("Error while updating house view:", err);
    throw err;
  }
}

async function upload_house(files, body) {
  console.log("Cloudinary Config:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET ? "***" : null, // Hide secret in log
  });

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  console.log(body);
  await connectDB();

  try {
    const uploadBufferToCloudinary = (fileBuffer, folder = "default") => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder, resource_type: "auto" },
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

    // Upload Thumbnail
    let thumbnailUrl = "";
    if (files.thumbnail && files.thumbnail.length > 0) {
      const thumbnailUploadResult = await uploadBufferToCloudinary(
        files.thumbnail[0].buffer,
        "thumbnails"
      );
      thumbnailUrl = thumbnailUploadResult.secure_url;
    }

    // Upload Other Files
    let resources = [];
    if (files.files && files.files.length > 0) {
      resources = await Promise.all(
        files.files.map((file) =>
          uploadBufferToCloudinary(file.buffer, "resources").then((result) => ({
            url: result.secure_url,
            type: file.mimetype,
          }))
        )
      );
    }

    // 🔴 **Fix: Attach `thumbnailUrl` to `body`**
    body.thumbnail = thumbnailUrl;
    body.resources = resources; // Also save resources in MongoDB

    const newcrudRepositoryExtra = new crudRepositoryExtra(resourceDB);
    const data = await newcrudRepositoryExtra.create(body); // Fix: Add await
    return data;
  } catch (error) {
    console.error("Error handling upload:", error);
    throw error;
  }
}

module.exports = {
  find_house,
  update_house_view,
  upload_house,
  get_all_houses,
};

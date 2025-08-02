const { resourceDB } = require("../modules");
const { house_repository } = require("../repositories");
const { connectDB } = require("../utility");
const { v2: cloudinary } = require("cloudinary");

require("dotenv").config();

const newcrudRepositoryExtra = new house_repository(resourceDB);

async function find_house(object) {
  await connectDB();
  return newcrudRepositoryExtra.filter(object);
}

async function update_house(object) {
  return newnewcrudRepositoryExtra.update(object);
}

async function get_details(id) {
  await connectDB();
  return newcrudRepositoryExtra.getDetail(id);
}

async function update_house_view(id) {
  try {
    const data = await newcrudRepositoryExtra.update(
      id,
      { $inc: { view: 1 } },
      { new: true }
    );
    return { views: data };
  } catch (err) {
    console.error("Error while updating house view:", err);
    throw err;
  }
}

// const cloudinary = require("cloudinary").v2;
// const crudRepositoryExtra = require("../utils/crudRepositoryExtra");
// const resourceDB = require("../models/resource");
// const connectDB = require("../config/db");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function upload_house(files, body, user) {
  await connectDB();
  console.log("UPLOAD SERVICE ")
  console.log(files)
  console.log(body)
  const uploadBufferToCloudinary = (fileBuffer, folder = "default") => {

    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder, resource_type: "auto" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      stream.end(fileBuffer);
    });
  };

  let thumbnailUrl = "";
  if (files.thumbnail?.length > 0) {
    const result = await uploadBufferToCloudinary(files.thumbnail[0].buffer, "thumbnails");
    thumbnailUrl = result.secure_url;
  }

  let gallery = [];
  if (files.files?.length > 0) {
    gallery = await Promise.all(
      files.files.map((file) =>
        uploadBufferToCloudinary(file.buffer, "gallery").then((result) => ({
          url: result.secure_url,
          type: file.mimetype,
        }))
      )
    );
  }

  body.thumbnail = thumbnailUrl;
  body.gallery = gallery;
  body.electricity = Number(body.electricity);
  body.price = Number(body.price);
  body.waterSuply = Boolean(body.waterSuply);

  const repo = new crudRepositoryExtra(resourceDB);
  const data = await repo.create(body);
  return data;
}




module.exports = {
  find_house,
  update_house_view,
  upload_house,
  get_details,
  update_house,
};

const express = require("express");
const router = express.Router();
const { user_controller } = require("../../controllers");
const { house_controller } = require("../../controllers");
const { user_middleware } = require("../../middle-ware");
/**
 * delet user
 * get all user
 * delete post
 * get all post
 *
 */
router.delete(
  "/user",
  user_middleware.user_delete,
  user_controller.delete_user
);
router.put("/users", user_controller.edit_user_detail);
// router.get("/users", user_controller.get_users);
//v1/admin/house
router.get("/houses", house_controller.get_house);
router.get("/houses/:id", house_controller.get_house_detail);
router.delete("/houses", house_controller.delete_house);
router.post("");

module.exports = router;

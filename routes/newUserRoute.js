const express = require("express");
let router = express.Router();

const {
  getUsers,
  register,
  updateUserByCity,
  updateUserByValue,
  userDelete,
} = require("../controllers/userController"); //taking refrence of the file

// path of the url

router.route("/newUsers").get(getUsers);
router.route("/register").post(register);
router.route("/updateUserByCity").put(updateUserByCity);
router.route("/updateUserByValue").put(updateUserByValue);
router.route("/userDelete").delete(userDelete);
module.exports = router;

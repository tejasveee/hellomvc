var users = require("../utils/userData");

const getUsers = (req, res) => {
  res.json({ call: "Hello router", msg: "Success", users: users });
};

const register = (request, res) => {
  const user = request.body;
  users.push(user);
  res.json({ call: "Hello post", msg: "Success", users: users });
};

const updateUserByCity = (req, res) => {
  const userId = req.query.userId;
  const tempuserId = users.findIndex((user) => user.id == userId);
  const newCity = req.body.city;
  users[tempuserId].city = newCity;
  const updatedUser = users[tempuserId];
  res.json({
    call: "Hello updateUserByCity",
    msg: "Success",
    user: updatedUser,
  });
};

const updateUserByValue = (req, res) => {
  const userId = req.query.userId;
  console.log(userId);
  console.log(req.body);
  const tempuserId = users.findIndex((user) => user.id == userId);
  const newName = req.body.name;
  users[tempuserId].name = newName;
  const newCity = req.body.city;
  users[tempuserId].city = newCity;
  const updatedUser = users[tempuserId];
  res.json({
    call: "Hello updateUserByValue",
    msg: "Success",
    user: updatedUser,
  });
};

const userDelete = (req, res) => {
  const index = req.query.index;
  users.splice(index, 1);
  res.json({ call: "Hello delete", msg: "Success", users: users });
};

module.exports = {
  getUsers,
  register,
  updateUserByCity,
  updateUserByValue,
  userDelete,
};

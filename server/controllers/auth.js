const jwt = require("jsonwebtoken");
const User = require("../models").users;

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      username,
      password
    }
  }).then(user => {
    if (user) {
      const token = jwt.sign({ id: user.id }, "thisismysecretkey");
      res.send({
        user,
        token
      });
    } else {
      res.send({
        message: "Invalid login!"
      });
    }
  });
};

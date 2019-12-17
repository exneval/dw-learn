const Articles = require("../models").articles;
const Accounts = require("../models").accounts;

const dataM = data => {
  const newData = data.map(item => {
    let newItem = {
      title: item.title,
      accountId: item.account_id,
      email: item.user.email,
      username: item.user.username
    };
    return newItem;
  });
  return newData;
};

exports.getArticle = (req, res) => {
  const { account_id } = req.params;

  Articles.findAll({
    include: [
      {
        model: Accounts,
        as: "user",
        where: {
          id: account_id
        }
      }
    ]
  }).then(data => {
    res.send(dataM(data));
  });
};

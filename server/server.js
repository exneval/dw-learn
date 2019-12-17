require("express-group-routes");

//Instantiate Express
const express = require("express");
//Cors Policy
const cors = require("cors");
//Use express variable in app
const app = express();
//Define port to listen from server
const port = 5000;

//Cross origin policy
app.use(cors());

//Use body parser
app.use(express.json());

//Controllers
const AccountController = require("./controllers/account");
const ArticleController = require("./controllers/article");
const AuthController = require("./controllers/auth");

//Middleware
const { auth, authorized } = require("./middleware");

//Create get Response
app.get("/", (req, res) => {
  //Give response to client
  res.send("<h1>Hello Express</h1>");
});

app.group("/api/v1", router => {
  //GET all accounts
  router.get("/accounts", AccountController.index);
  //GET detail route
  router.get("/account/:id", AccountController.show);
  //POST new account
  router.post("/account", AccountController.create);
  //PATCH(update) an account
  router.patch("/account/:id", AccountController.update);
  //DELETE an account
  router.delete("/account/:id", AccountController.delete);
  //GET ARTICLE by account_id
  router.get(
    "/article/:account_id",
    auth,
    authorized,
    ArticleController.getArticle
  );

  //POST-LOGIN
  router.post("/login", AuthController.login);
});

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ message: "You are not authorized." });
  } else {
    next(err);
  }
});

//Server must to listen to port
app.listen(port, () => console.log(`Server is listening to Port: ${port}`));

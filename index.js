const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const settings = require("./config/settings");
const db = settings.mongoURL;
const userRouter = require("./routes/api/user");

mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/user/api", userRouter);

app.listen(port, () => {
  console.log(`App running at PORT ${port}`);
});

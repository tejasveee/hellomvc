const express = require("express");

const app = express();
const port = 3001;
app.use(express.json());

const newUserRoute = require("./routes/newUserRoute");
app.use("/api", newUserRoute); // declaring route

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

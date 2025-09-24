const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
  console.log(`First Line of the page  `);
  res.send(`<p>Hello this is the home page of my project</p>
    <a href="/user/about">About Page</a></a>`);
});


app.use(userRouter);
app.get("/", (req, res, next) => {
  console.log(`First Line `);
  res.send("<p> ERROR 404 not found </p>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

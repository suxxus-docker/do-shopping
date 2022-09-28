const express = require("express");
const path = require("path");
const axios = require("axios").default;
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", function (_, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/products", (_, res) => {
  axios
    .get("https://dummyjson.com/products/")
    .then(function ({ data }) {
      res.send(data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
});

app.get("/products/:productId", (req, res) => {
  const productId = req.params?.productId ?? "";
  axios
    .get(`https://dummyjson.com/products/${productId}`)
    .then(function ({ data }) {
      res.send(data);
    })
    .catch(function (error) {
      const msg = error?.response?.data ?? "0";
      res.send(msg);
    })
    .then(function () {});
});

app.listen(3000, () => {
  console.log("Express started on port 3000");
});

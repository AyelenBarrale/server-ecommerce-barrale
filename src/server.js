const express = require("express");
const emoji = require("node-emoji");
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(require("./server/routes/routerProductos"));
app.use(require("./server/routes/routerCarrito"));

app.listen(8080, () =>
  console.log(emoji.get("computer"), "Server started on 8080")
);

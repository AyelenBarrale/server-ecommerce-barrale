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

/* {
  "nombre": "teclado mecánico k12",
  "codigo": "TECK12",
  "descripcion": "Teclado mecánico switch red 60%",
  "precio": "20000",
  "foto": "https://www.eloquentclicks.com/wp-content/uploads/2021/07/dual.jpg",
  "stock": "56"
},
{
  "nombre": "iphone 11",
  "codigo": "IPHONE11",
  "descripcion": "capacidad 128gb",
  "precio": "183000",
  "foto": "https://i.blogs.es/187a45/iphone-11-pro-02/450_1000.jpg",
  "stock": "90"
},
{
  "nombre": "macbook air 2018",
  "codigo": "MACAIR18",
  "descripcion": "intel A5, 13 pulgadas",
  "precio": "200000",
  "foto": "https://www.ventasrosario.com.ar/wp-content/uploads/2021/01/AUaDk6VmkFriSBiQJHrx4V.jpg",
  "stock": "84"
} */

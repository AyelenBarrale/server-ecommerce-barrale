const { Router } = require("express");
const routerProd = Router();
const {
  getProducts,
  getProductById,
  postProduct,
  updateProductById,
  DeleteProductById,
} = require("../controller/prodController");

//Middlewares
//const isAdmin = require("../middlewares/adminMiddlewares");

routerProd.get("/api/productos", getProducts);
routerProd.get("/api/productos/:id?", getProductById);
routerProd.post("/api/productos", /* isAdmin, */ postProduct);
routerProd.put("/api/productos/:id", /* isAdmin, */ updateProductById);
routerProd.delete("/api/productos/:id", /* isAdmin, */ DeleteProductById);

module.exports = routerProd;

const { Router } = require("express");
const routerCart = Router();

const {
  getProdsCart,
  postCart,
  deleteCartById,
  //deleteProdInCart,
  postProdinCart,
} = require("../controller/cartController");

routerCart.get("/api/carrito/:id/productos", getProdsCart);
routerCart.post("/api/carrito", postCart);
routerCart.delete("/api/carrito/:id", deleteCartById);
routerCart.post("api/carrito/:id/productos", postProdinCart);
//routerCart.delete("api/carrito/:id/productos/:id_prod", deleteProdInCart);

module.exports = routerCart;

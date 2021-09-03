const { contProductos } = require("../controller/prodController");

//Clase contenedora
const Contenedor = require("../services/contenedor");
let contCarrito = new Contenedor("./src/server/database/carrito.json");

// CARRITO
const postCart = async (req, res) => {
  const cart = req.body;
  await contCarrito.saveNuevoProd(cart);
  try {
    res.status(200).send(cart.id);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteCartById = async (req, res) => {
  const {
    params: { id },
  } = req;

  await contCarrito.deleteById(id);
  try {
    res.status(200).send("Carrito Eliminado");
  } catch (error) {
    res.status(400).send(error);
  }
};

////////duda/////////
const postProdinCart = async (req, res) => {
  const {
    params: { id },
  } = req;
  const producto = await contProductos.getById(id);
  if (producto) {
    await contCarrito.saveNuevoProd(producto);
  }

  try {
    res.status(200).send(producto);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProdsCart = async (req, res) => {
  const carrito = await contCarrito.getAll();
  try {
    if (carrito) {
      res.status(200).send(carrito);
    } else {
      res.status(404).send("carrito vacío");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

////////duda/////////
/* const deleteProdInCart = async (req, res) => {
  const {
    params: { id, id_prod },
  } = req;

  const carrito = await contCarrito.getAll(id);
  const carritoUpdate = await carrito.deleteById(id_prod);

  try {
    res.status(200).send(carritoUpdate);
  } catch (error) {
    res.status(400).json({ error: "Mensaje" });
  }
}; */

module.exports = {
  postCart,
  getProdsCart,
  deleteCartById,
  postProdinCart,
  //deleteProdInCart,
};
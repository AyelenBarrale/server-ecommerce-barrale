//Clase contenedora
const Contenedor = require("../services/contenedor");
let contProductos = new Contenedor("./src/server/database/productos.json");

//PRODUCTOS
const getProducts = async (req, res) => {
  const productos = await contProductos.getAll();
  try {
    if (productos) {
      res.status(200).send(productos);
    } else {
      res.status(404).send("No hay productos en stock");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const producto = await contProductos.getById(id);
  try {
    if (producto) {
      res.status(200).send(producto);
    } else {
      res.status(404).send("El producto buscado no existe");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const postProduct = async (req, res) => {
  const { body } = req;
  await contProductos.saveNuevoProd(body);
  try {
    res.status(200).send(body);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateProductById = async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const anterior = await contProductos.getById(id);
  const nuevo = await contProductos.updateById(id, body);

  try {
    if (anterior) {
      res.status(200).send({ anterior, nuevo });
    } else {
      res.status(404).send("El producto buscado no existe");
    }
  } catch (error) {
    res.status(400).json({ error: "Mensaje" });
  }
};

const DeleteProductById = async (req, res) => {
  const {
    params: { id },
  } = req;

  const productoEliminado = await contProductos.deleteById(id);
  try {
    res.status(200).send(productoEliminado);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  updateProductById,
  DeleteProductById,
  contProductos,
};

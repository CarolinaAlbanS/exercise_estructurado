const express = require("express");
const librosRoutes = express.Router();
const {
  getLibros,
  createlibros,
  deletelibros,
  updatelibros,
} = require("../controllers/libros.controllers");
const { isAuth } = require("../middlewares/auth.middleware");

librosRoutes.get("/", getLibros);
librosRoutes.post("/", [isAuth], createlibros);
librosRoutes.put("/:id", [isAuth], updatelibros);
librosRoutes.delete("/", deletelibros);

module.exports = librosRoutes;

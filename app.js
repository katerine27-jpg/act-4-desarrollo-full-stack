const express = require("express");
const productsRoutes = require("./routes/Products.routes");
const usersRoutes = require("./routes/users.routes");

const app = express();

// Middleware para leer JSON
app.use(express.json());

// Health check (opcional pero útil)
app.get("/", (req, res) => {
  res.json({ ok: true, message: "API Inventario corriendo" });
});

// Rutas
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);

// 404 (opcional)
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

module.exports = app;

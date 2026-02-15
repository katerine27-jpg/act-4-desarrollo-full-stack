const path = require("path");

// Cargar .env que está en la raíz (backend-db/.env)
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const app = require("./app");             // ✅ antes estaba mal si ponías ./src/app
const connectDB = require("./config/db"); // ✅ ruta correcta desde src

// (Opcional) verificación
console.log("JWT_SECRET cargado?:", !!process.env.JWT_SECRET);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});

const express = require("express");
const app = express();
const db = require("./models");
require("dotenv").config();
const authRoutes = require("./routes/auth.route");
const barangRoutes = require("./routes/barang.route");

app.use(express.json());

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => console.log("Server and database are running"));
});

app.use("/api/v1", barangRoutes);
app.use("/api/v1", authRoutes);

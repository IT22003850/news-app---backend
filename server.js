const express = require("express");
const dotenv = require('dotenv').config();
const newsRoutes = require('./routes/newsRoutes')

const PORT = process.env.PORT || 8000;

const app = express();

app.use("/api/news", newsRoutes);

app.listen(PORT, () => {
  console.log(`Server is Listening to Port ${PORT}`);
});

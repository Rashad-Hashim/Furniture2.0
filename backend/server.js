const dotenv = require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT;
// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/inventory", require("./routes/inventoryRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

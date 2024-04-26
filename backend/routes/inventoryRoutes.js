const express = require("express");
const router = express.Router();
const {
  getInventory,
  setInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

router.get("/", getInventory);

router.post("/", setInventory);

router.put("/:id", updateInventory);

router.delete("/:id", deleteInventory);

module.exports = router;

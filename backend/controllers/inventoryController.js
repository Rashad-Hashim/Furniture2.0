const asyncHandler = require("express-async-handler");

// @description Get inventory
// @router GET /api/inventory
// access Private
const getInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get inventory" });
});

// @description Set inventory
// @route POST /api/inventory
// @access Private
const setInventory = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please make sure all fields are added");
  }
  res.status(200).json({ message: "Set inventory" });
});

// @description Update goal
// @router PUT /api/inventory/:id
// @access Private
const updateInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update inventory ${req.params.id}` });
});

// @description Delete goal
// @route DELETE /api/inventory/:id
// @access Private
const deleteInventory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete inventory ${req.params.id}` });
});

module.exports = {
  getInventory,
  setInventory,
  updateInventory,
  deleteInventory,
};

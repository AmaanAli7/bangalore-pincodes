const express = require("express");

const {
  getAllPincodesController,
  getPincodeController,
  searchPincodeController,
} = require("../controllers/pincode.controller");

const router = express.Router();


// Get all pincodes
router.get("/", getAllPincodesController);


// Search by area or pincode
router.get("/search", searchPincodeController);


// Get a specific pincode
router.get("/:pincode", getPincodeController);


module.exports = router;
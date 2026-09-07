const pincodes = require("../data/pincodes.json");


// Get all pincodes
const getAllPincodesController = (req, res) => {
  return res.status(200).json({
    success: true,
    count: pincodes.length,
    data: pincodes,
  });
};


// Get pincode by exact pincode
const getPincodeController = (req, res) => {
  const { pincode } = req.params;

  const result = pincodes.find(
    (item) => item.pincode === pincode
  );

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Pincode not found",
    });
  }

  return res.status(200).json({
    success: true,
    data: result,
  });
};


// Search by pincode or area
const searchPincodeController = (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      success: false,
      message: "Please provide a search query",
    });
  }

  const searchTerm = q.toLowerCase().trim();

  const results = pincodes.filter((item) => {
    return (
      item.pincode.includes(searchTerm) ||
      item.area.toLowerCase().includes(searchTerm)
    );
  });

  return res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  });
};


module.exports = {
  getAllPincodesController,
  getPincodeController,
  searchPincodeController,
};
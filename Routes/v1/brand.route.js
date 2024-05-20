const express = require('express');
const router = express.Router();
const BrandController = require("../../controllers/brand.controller")

router.route("/").post(BrandController.createBrandController);

module.exports = router;
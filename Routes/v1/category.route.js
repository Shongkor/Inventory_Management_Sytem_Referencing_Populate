const express = require('express');
const router = express.Router();
const categoryController = require("../../controllers/category.controller")

router.route("/").post(categoryController.createCategoryController);

module.exports = router;
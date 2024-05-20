const Category = require("../models/Category")

exports.createCategoryServices = async (categoryInfo) => {
    const result = await Category.create(categoryInfo);
    return result;
};
const Brand = require("../models/Brand")

exports.createBrandServices = async (brandInfo) => {
    const brand = await Brand.create(brandInfo);
    return brand;
};
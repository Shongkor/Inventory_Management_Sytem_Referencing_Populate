const Brand = require("../models/Brand");
const Product = require("../models/Product")

exports.createProductServices = async (product) => {
    const createProduct = await Product.create(product)
    const {
        _id: productId,
        brand
    } = createProduct;
    await Brand.updateOne({
        _id: brand.id
    }, {
        $push: {
            products: productId
        }
    })
    return createProduct;
}
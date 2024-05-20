const {
    createProductServices
} = require("../Services/Product.services")

exports.createProduct = async (req, res, next) => {
    try {
        const body = req.body;
        const product = await createProductServices(body);

        res.status(200).json({
            status: 'success',
            data: product
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }
}
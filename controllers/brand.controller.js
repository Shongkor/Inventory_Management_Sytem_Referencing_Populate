const {
    createBrandServices
} = require("../Services/brand.services");

exports.createBrandController = async (req, res, next) => {
    try {
        const brandDetails = req.body;
        const brand = await createBrandServices(brandDetails);
        res.status(200).json({
            status: "success",
            message: "Brand created successfully",
            data: brand
        })
    } catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "Can't created brand",
            error: err.message
        })
    }
};
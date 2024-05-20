const {
    createCategoryServices
} = require("../Services/category.services");


exports.createCategoryController = async (req, res, next) => {
    try {
        const body = req.body;
        const category = await createCategoryServices(body);
        res.status(200).json({
            status: 'success',
            data: category
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error: error.message
        })
    }
}
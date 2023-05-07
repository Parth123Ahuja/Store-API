const productSchema = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const allProducts = await productSchema.find({}) 
    res.status(200).json({allProducts,nbHits : allProducts.length})
};

const getAllProducts = async (req, res) => {
    const {featured,company} = req.query
    const queryObject = {}
    if(featured){
      queryObject.featured = featured === "true" ? true : false  
    }
    if(company){
      queryObject.company = company
    }

    const allProducts = await productSchema.find(queryObject) 
    res.status(200).json({allProducts,nbHits : allProducts.length})
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};




const getAllProductsStatic = async (req,res) =>{
  
    res.status(200).send({
        "msg" : " here is your testing data"
    }
    )
}

const getAllProducts = async (req,res) =>{
    res.status(200).send({
        "msg" : " here is your data"
    }
    )
}


module.exports = {
    getAllProductsStatic,
    getAllProducts
}
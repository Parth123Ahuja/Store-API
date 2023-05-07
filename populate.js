require('dotenv').config()

const connectDB = require('./db/connect')
const products = require('./products.json')

const productSchema = require('./models/product')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await productSchema.deleteMany()
        await productSchema.create(products)
        console.log('success!!');
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

start()
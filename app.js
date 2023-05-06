require('dotenv').config()
require('express-async-errors')

const express = require('express');
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const router = require('./routes/products')
const port = process.env.PORT || 3000
const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/v1/products',router)

app.use(notFound)
app.use(errorHandler)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log('server listening on port ');
        })
    } catch (error) {
     console.log('error found');   
    }
}

start()







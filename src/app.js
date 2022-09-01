const express =  require('express')
const conn = require('./DB/conn')
const app = express()
const port = process.env.PORT || 3000
const router = require('./Routers')

app.use(express.json())
app.use(router);


app.listen(port,()=>{
    console.log(`The app is listening at ${port}`)
})



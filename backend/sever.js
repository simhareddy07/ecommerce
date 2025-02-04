const app=require('./app')
const connectDb=require("./db/db")

process.on('uncaughtException',(error)=>{
    console.log(`server down $ {error.message}`)
    process.exit(0)
})




if(process.env.NODE_ENV !== 'PRODUCTION')
    require('dotenv').config({path:'config/.env'})


connectDb()


app.listen(process.env.PORT,()=>{
console.log(`serve successfully  listen a port http://localhost:${process.env.port}`)
})

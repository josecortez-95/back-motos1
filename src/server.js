const app=require("./app")
require("dotenv").config()
const { db }=require("./database/config")

db.authenticate()
    .then(()=>console.log("base de datos autenticado"))
    .catch((err)=>console.log(err)) 

db.sync()
    .then(()=>console.log("base de datos sincronizada"))
    .catch((err)=>console.log(err))




const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`server run in port ${PORT}....😀`)
})







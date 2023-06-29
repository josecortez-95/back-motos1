const express = require("express")
const userRouter=require("./routes/user.route")
const repairRouter=require("./routes/repairs.route")

const app =express()

app.use(express.json())

app.use("/api/v1/users",userRouter)
app.use("/api/v1/repairs",repairRouter)


module.exports=app
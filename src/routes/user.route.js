const express =require("express")
const controllerUser=require("./../controller/user.controller")


const router= express.Router()


router.get("/",controllerUser.getAllUsers)
router.post("/",controllerUser.createUser)
router.patch("/:id",controllerUser.updateUser)
router.get("/:id",controllerUser.buscarUser)
router.delete("/:id",controllerUser.deleteUser)

module.exports=router
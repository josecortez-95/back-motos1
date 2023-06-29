const express =require("express")
const controllerRepairs=require("./../controller/repair.controller")


const router= express.Router()


router.get("/",controllerRepairs.getPendientes)
router.post("/",controllerRepairs.crearCita)
router.patch("/:id",controllerRepairs.updateReparacion)
router.get("/:id",controllerRepairs.getPendiente)
router.delete("/:id",controllerRepairs.deleteReparacion)

module.exports=router
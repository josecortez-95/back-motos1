const Repair = require("../models/repair.models")

exports.getPendientes= async(req,res)=>{
    try {
         const user = await Repair.findAll({
            where:{
                status:"pendiente"
            }
         })

        return res.status(200).json({
            status:"refiricado....😉",
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            message:"algo salio mal.....🫠"
        })
    }
}

exports.crearCita= async(req,res)=>{
    try {
        const {data,userId} = req.body;
        const user = await Repair.create({data,userId})

        return res.status(200).json({
            status:"refiricado....😉",
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            message:"algo salio mal.....🫠"
        })
    }
}
exports.getPendiente= async(req,res)=>{
    try {
        const {id}=req.params;
        const user = await Repair.findOne({
            where:{
                id,
                status:"pendiente"
            }
        })
        if(!user){
          return res.status(404).json({
            status:"fail",
            message:`no existe el id ${id}`
          })
        }
        return res.status(200).json({
            status:"refiricado....😉",
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            message:"algo salio mal.....🫠"
        })
    }
}

exports.updateReparacion= async(req,res)=>{
    try {
        const {id}= req.params
        const {status}= req.body
        const user =await Repair.findOne({
            where:{
                id,
                status:"pendiente"
            }
        })
        if(!user){
             return res.status(404).json({
                status:"fail",
                message:`no exite id ${id} no se encontraron resultados`
             })
        }
      await  user.update({status})
        return res.status(200).json({
            status:"refiricado....😉"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            message:"algo salio mal.....🫠"
        })
    }
}
exports.deleteReparacion=async(req,res)=>{
    try {
        const {id}= req.params
        const user = await Repair.findOne({
            where:{
                id,
                status:"pendiente"
            }
        })
        if(!user){
         return res.status(404).json({
            status:"falil",
            message:`no se encontro el id ${id} `
         })
        }
       await  user.update({status:"cancelado"})
        return res.status(200).json({
            status:"refiricado....😉",
            message:"reapracion eliminada "
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            message:"algo salio mal.....🫠"
        })
    }
}
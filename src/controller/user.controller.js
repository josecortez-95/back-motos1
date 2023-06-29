const User = require("../models/user.model")

exports.getAllUsers = async(req,res)=>{
      try {
        const user = await User.findAll({
            where:{
              status:"available",
            },
        })
        return res.status(200).json({
            status:"verificado...😉",
            user,
        })
      } catch (error) {
        console.log(error)
        return res.status(500).json({
             status:"fail",
             messaege:"algo salio mal.....🫠"
        })
      }
}
exports.createUser = async(req,res)=>{
    try {
      const{name,password,role,email}=req.body

      const user = await User.create({name,password,role,email})
      
        return res.status(200).json({
            status:"verificado...😉",
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
             status:"fail",
             messaege:"algo salio mal.....🫠"
        })
      
    }

}
exports.buscarUser= async (req,res)=>{
    try {
        const {id}=req.params;
        const userId=  await User.findOne({
            where:{
              id,
              status:"available"
            }         
        })
        if(!userId){
          return res.status(404).json({
            ststaus:"error",
            messaege: `Usuario no encontrado ${id}`
          })
        }
        return res.status(200).json({
            status:"verificado....😉",
            userId,
            
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            messaege:"algo salio mal .....🫠"
        })
    }
}
exports.updateUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const {name, email} = req.body;

        const user = await User.findOne({
            id,
            status:"available"
        })
        if(!user){
            return res.status(404).json({
                stattus:"fallido",
                messaege:`no se encontro el el usuario con id :${id} `
            })
        }
       await user.update({name,email})

        return res.status(200).json({
            status:"verificado....😉",
            messaege:"user actualizado",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            messaege:"algo salio mal......🫠"
        })
    }
}

exports.deleteUser= async(req,res)=>{

    try {
        const {id} = req.params 
        const user = await User.findOne({
            where:{
                status:"available"
            }
        })
        if(!user){
            return res.stattus(404).json({
                stattus:"fail",
                message:`el susuario con id  ${id} no se a encontrado`
            })
        }
       await user .update({status:"disabled"})

        return res.status(200).json({
            status:"verificado......😉",
            messaege:"susurario eliminado "
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            status:"fail",
            messaege:"algo salio mal .......🫠"
        })
    }
}
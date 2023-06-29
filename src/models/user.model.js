const {DataTypes}=require("sequelize")
const {db}=require("./../database/config")


const User = db.define("motosusers", {
   id:{
    primaryKey:true,
    autoIncrement:true,
    allowNull:false,
    type:DataTypes.INTEGER,
   },
   name:{
      type:DataTypes.STRING,
      allowNull:false,
   },
   email:{
       type:DataTypes.STRING,
       unique:true,
       allowNull:false,
   },
   password:{
      type:DataTypes.STRING,
      allowNull:false,

   },
   role:{
      type:DataTypes.ENUM("client","employee"),
      allowNull:false,
      defaultValue:"client"
   },
   status:{
      type:DataTypes.ENUM("available","disabled"),
      defaultValue:"available",
   },
})


module.exports=User
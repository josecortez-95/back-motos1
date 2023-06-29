const {Sequelize} = require("sequelize")

const db= new Sequelize({
    dialect:"postgres",
    host: "localhost",
    username:"postgres",
    password: "6570",
    database:"dbmotos",
    loggin: false,

})
module.exports={db}
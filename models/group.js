const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Group =sequelize.define('groups',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    members:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:false
    }
    
});
module.exports=Group;
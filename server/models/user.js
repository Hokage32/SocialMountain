const {sequelize} = require("../util/database")
const {DataTypes} = require("sequelize")


module.exports = {

    User:  
        sequelize.define('user',{
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            username: DataTypes.STRING,
            hashedPass: DataTypes.STRING
        })
    
}
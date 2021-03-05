let Model = require('./model')
const Sequelize = require("sequelize");
const sequelize = new Sequelize("ucode_web", "root", "5627990asd", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
});

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
module.exports = User
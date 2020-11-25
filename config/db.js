const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodejs_express_basic', 'root', 'Bemyself!99', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = sequelize;
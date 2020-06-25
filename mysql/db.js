const Sequelize = require('sequelize');

module.exports = new Sequelize('pokedex', 'root', '286445', {
    host: "localhost",
    dialect: 'mysql'
})


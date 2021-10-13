const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('favorites', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}
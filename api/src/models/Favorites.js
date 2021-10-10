const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('favorites', {
        identitity: {
            type: DataTypes.STRING        
        },
    })
}
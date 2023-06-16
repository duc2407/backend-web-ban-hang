'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sizeproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sizeproduct.init({
    id_size: DataTypes.INTEGER,
    name: DataTypes.STRING,
    size: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sizeproduct',
  });
  return Sizeproduct;
};

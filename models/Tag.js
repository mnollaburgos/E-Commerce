const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    tag_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tag_name:{
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
//“dependencies”: {
  //“dotenv”: “^8.2.0”,
  //“express”: “^4.17.1”,
  //“mysql2": “^2.1.0”,
  //“sequelize”: “^5.21.7”
//},
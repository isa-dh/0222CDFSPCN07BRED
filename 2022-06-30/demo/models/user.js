'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.associate = function (models) {
    // Relacionado com a empresa
    User.belongsTo(models.Company, { foreignKey: 'companyId', as: 'company' });

    // Relacionado a tabela de join
    User.belongsToMany(models.WorkingDay, {
      through: 'UsersWorkingDay',
      foreignKey: 'userId',
      as: 'days',
    });
  };
  return User;
};

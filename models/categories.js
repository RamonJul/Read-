module.exports = function(sequelize, DataTypes) {
  var categories = sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return categories;
};

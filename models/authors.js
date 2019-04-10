module.exports = function(sequelize, DataTypes) {
  var Authors = sequelize.define("Authors", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profilepic: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userNAME: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Authors;
};

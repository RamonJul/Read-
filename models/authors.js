module.exports = function(sequelize, DataTypes) {
  var Authors = sequelize.define("Authors", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    githubId:{
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    profilepic: DataTypes.STRING,
    userNAME: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Authors;
};
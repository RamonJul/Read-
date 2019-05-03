module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    post: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {// states in which specific genre this comment will be in and will say it is a comment
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "comment"
    }, 
    postId: {// identifies what posts a comment falls under in
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    parentId: DataTypes.INTEGER,
    //parent id of where this comment will be
    image: {
      type: DataTypes.TEXT,
    },
  });
  return Comments;
};

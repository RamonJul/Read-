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
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }, // states in which specific genre this comment will be in
    ifComment: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }, // diffrentiates if this is a comment or a post
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    parentId: DataTypes.INTEGER
    //parent id of where this comment will be
  });
  return Comments;
};

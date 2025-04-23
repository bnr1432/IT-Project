module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
      content: DataTypes.TEXT
    });
    return Task;
  };
  
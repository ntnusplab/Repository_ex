module.exports = (sequelize, DataTypes) => {
    const NewModel = sequelize.define('new_model', {  // ✅ 與 Repository 呼叫名稱一致
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      tableName: 'new_model',  // ✅ 確認資料表名稱一致
      timestamps: false
    });
  
    return NewModel;
  };
  
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('server_ex', 'postgres', '77343488', {
    host: '127.0.0.1',  // 確保這裡與 psql 測試一致
    dialect: 'postgres',
    port: 5432,
    logging: false // 選擇性：用來關閉日誌輸出
});

module.exports = sequelize;

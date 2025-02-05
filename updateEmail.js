const Repository = require('./Repository');  // 引用 Repository 類別
const sequelize = require('./models').sequelize; // 引用 Sequelize 連線

// 初始化 Repository，指定模型名稱
const userRepo = new Repository('User');  // 模型名稱需與 models 中一致

(async () => {
    try {
        // 測試資料庫連線
        await sequelize.authenticate();
        console.log('✅ 成功連接到 PostgreSQL!');

        // 更新第一筆資料 (假設 id 為 1)
        const userId = 1;
        const newEmail = 'sudopeko@example.com';

        const result = await userRepo.updateKeyEqual('id', userId, 'email', newEmail);

        if (result[0] === 1) {
            console.log(`✅ 使用者 ID: ${userId} 的 Email 已成功更新為 ${newEmail}`);
        } else {
            console.log(`⚠️ 找不到 ID 為 ${userId} 的使用者或資料未變更`);
        }

    } catch (error) {
        console.error('❌ 更新失敗：', error);
    } finally {
        await sequelize.close();  // 關閉資料庫連線
    }
})();

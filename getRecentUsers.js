const Repository = require('./Repository');  // 引用 Repository 類別
const sequelize = require('./models').sequelize; // 引用 Sequelize 連線

// 初始化 Repository，指定模型名稱
const userRepo = new Repository('User');  // 模型名稱需與 models 中一致

(async () => {
    try {
        // 測試資料庫連線
        await sequelize.authenticate();
        console.log('✅ 成功連接到 PostgreSQL!');

        // 查詢最近 5 分鐘更新的資料
        const key = 'updatedAt'; // 依據 updatedAt 欄位判斷
        const value = '';        // 不需要額外條件，可以留空或不使用

        const recentUsers = await userRepo.getKeyEqualLast5Min(key, value);

        if (recentUsers.length > 0) {
            console.log('📋 近 5 分鐘內更新的使用者資料：');
            console.table(recentUsers);
        } else {
            console.log('⚠️ 近 5 分鐘內沒有更新的資料。');
        }

    } catch (error) {
        console.error('❌ 查詢失敗：', error);
    } finally {
        await sequelize.close();  // 關閉資料庫連線
    }
})();

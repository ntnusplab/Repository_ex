const Repository = require('./Repository');
const sequelize = require('./models').sequelize;  // ✅ 載入 sequelize 連線

const myRepo = new Repository('User');  // ✅ 模型名稱需與 user.js 中的 modelName: 'User' 一致

(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ 成功連接到 PostgreSQL!');

        await sequelize.sync({ force: false });
        console.log('✅ 資料表同步成功！');

        await addData();
        await getAllData();

    } catch (error) {
        console.error('❌ 無法連接到 PostgreSQL:', error);
    }
})();

async function addData() {
    try {
        await myRepo.create({ firstName: "WE0", lastName: "AAO", email: "WE0@example.com" });
        console.log("✅ 資料新增成功！");
    } catch (error) {
        console.error("❌ 新增資料失敗：", error);
    }
}

async function getAllData() {
    try {
        const data = await myRepo.getAll();
        console.log("📋 取得資料：", data);
    } catch (error) {
        console.error("❌ 取得資料失敗：", error);
    }
}

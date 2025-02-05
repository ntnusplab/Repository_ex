const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require('./models');  // ✅ 載入 models 資料夾中的 index.js

class Repository {
    Model = null;
    constructor(model) {
        this.Model = db[model];  // ✅ 直接從 db 取得模型
    }

    create = async (data) => {
        return await this.Model.create(data);
    }

    getAll = async () => {
        return await this.Model.findAll({ raw: true });
    }

    getKeyEqual = async (key, value) => {
        return await this.Model.findAll({
            where: {
                [key]: value
            },
            raw: true
        });
    }

    getKeyEqualLast5Min = async (key, value) => {
        return await this.Model.findAll({
            where: {
                [key]: value,
                updatedAt: {
                    [Op.gte]: new Date().getTime() - 5 * 60 * 1000
                }
            },
            raw: true
        });
    }

    getKeyBetween = async (key, start, end) => {
        return await this.Model.findAll({
            where: {
                [key]: {
                    [Op.between]: [start, end]
                }
            },
            raw: true
        });
    }

    updateKeyEqual = async (key, value, element, num) => {
        return await this.Model.update({ [element]: num }, {
            where: {
                [key]: value
            }
        });
    }

    deleteKeyEqual = async (key, value) => {
        return await this.Model.destroy({
            where: {
                [key]: value
            }
        });
    }
}

module.exports = Repository;

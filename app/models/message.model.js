module.exports = (db) => {
    const { sequelize, Sequelize } = db;

    const Message = sequelize.define("message", {
        message: {
            type: Sequelize.STRING
        },
        toNumber: {
            type: Sequelize.STRING
        },
    }, {
        freezeTableName: true
    });

    return Message;
};
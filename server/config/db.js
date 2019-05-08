const Sequelize = require('sequelize');

// 使用 url 形式连接数据库
const theDb = new Sequelize('mysql://root:123@localhost/my_test_db', {
    define: {
        timestamps: false // 取消Sequelzie自动给数据表添加的 createdAt 和 updatedAt 两个时间戳字段
    }
})

const dbConfig = {
    database: 'koademo',
    username: 'root',
    password: '123',
    host: '127.0.0.1',
    dialect: 'mysql', // 'mysql'|'sqlite'|'postgres'|'mssql'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    // 设置时区
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
});

module.exports = {
    theDb
}
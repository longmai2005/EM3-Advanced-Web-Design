const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'shopdb',
    'root',
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        port: 3307,
        dialect: 'mysql',
        logging: false
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('✅ Database connected');
    })
    .catch((err) => {
        console.error('❌ DB error:', err);
    });

module.exports = sequelize;
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Shop = require('./database_models/shop')(sequelize, Sequelize.DataTypes);
require('./database_models/user')(sequelize, Sequelize.DataTypes);
require('./database_models/inventory')(sequelize, Sequelize.DataTypes);
require('./database_models/loans')(sequelize, Sequelize.DataTypes);

sequelize.sync(false).then(async () => {
	const shop = [ Shop.upsert({ itemName: 'Bronze', itemCost: 50, itemPoints: 65 }),
		             Shop.upsert({ itemName: 'Silver', itemCost: 150, itemPoints: 210 }),
		             Shop.upsert({ itemName: 'Gold', itemCost: 500, itemPoints: 750 }), ];
	await Promise.all(shop);
	console.log('Sync complete.');
	sequelize.close();
}).catch(console.error);

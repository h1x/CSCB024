const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const User = require('./database_models/user')(sequelize, Sequelize.DataTypes);
const Shop = require('./database_models/shop')(sequelize, Sequelize.DataTypes);
const Inventory = require('./database_models/inventory')(sequelize, Sequelize.DataTypes);
const Loans = require('./database_models/loans')(sequelize, Sequelize.DataTypes);

Inventory.belongsTo(Shop, { foreignKey: 'itemID', as: 'itemName' });


User.prototype.addItem = async function(item) {
	const useritem = await Inventory.findOne({
		where: { userID: this.userID, itemID: item.id },
	});

	if (useritem) {
		useritem.quantity += 1;
		return useritem.save();
	}

	return Inventory.create({ userID: this.userID, itemID: item.id, quantity: 1 });
};

User.prototype.getItems = function() {
	return Inventory.findAll({
		where: { userID: this.userID },
		include: ['itemName'],
	});
};


module.exports = { User, Shop, Inventory, Loans };

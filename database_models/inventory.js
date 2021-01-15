module.exports = (sequelize, DataTypes) => {
	return sequelize.define('inventory', {
		userID: DataTypes.STRING,
		itemID: DataTypes.STRING,
		quantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			'default': 0,
		},
	}, {
		timestamps: false,
	});
};

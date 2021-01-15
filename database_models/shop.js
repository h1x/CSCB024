module.exports = (sequelize, DataTypes) => {
	return sequelize.define('shop', {
		itemName: {
			type: DataTypes.STRING,
			unique: true,
		},
		itemCost: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		itemPoints: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
	}, {
		timestamps: false,
	});
};

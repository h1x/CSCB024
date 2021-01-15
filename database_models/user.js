module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		userID: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		userBalance: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
		userPoints: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
		},
	}, {
		timestamps: false,
	});
};

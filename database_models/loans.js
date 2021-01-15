module.exports = (sequelize, DataTypes) => {
	return sequelize.define('loans', {
		userID: DataTypes.STRING,
		loanSize: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
    payments: DataTypes.INTEGER,
		interestPercent: DataTypes.FLOAT,
		left: DataTypes.FLOAT,
	}, {
		timestamps: false,
	});
};

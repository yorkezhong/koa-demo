/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('writer', {
			id: {
					type: DataTypes.INTEGER(11),
					allowNull: false,
					primaryKey: true,
					autoIncrement: true
			},
			text: {
					type: DataTypes.STRING,
					allowNull: false
			},
		
	}, {
			tableName: 'writer'
	});
};

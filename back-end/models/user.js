module.exports = (sequelize, DataTypes) => (
    sequelize.define('user', {
        id: {
            type: DataTypes.STRING(40),
            primaryKey: true,
            unique: true
        },
        nick: {
            type: DataTypes.STRING(15),
        },
        password: {
            type: DataTypes.STRING(100),
        },
        profile: {
            type: DataTypes.STRING(100)
        },
        rate: {
            type: DataTypes.STRING(20),
            defaultValue: 'USER'
        }
    }, {
            timestamps: true,
        })
);
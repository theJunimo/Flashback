module.exports = (sequelize, DataTypes) => (
    sequelize.define('album', {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING(40)
        },
        member: {
            
        }
    })
)
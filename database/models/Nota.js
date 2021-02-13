module.exports = function (sequelize, dataTypes){
    let alias = "Notas";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        titulo: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        texto: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {
        tableName: "notas",
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    let Notas = sequelize.define(alias, cols, config);

    return Notas
}
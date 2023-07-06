import { Sequelize, DataTypes } from 'sequelize';
import newSeq from '../config/connection.js'

const Details = newSeq.define("user_details", {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Users",
            key: "id"
        }
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_telp: {
        type: DataTypes.INTEGER(16),
    },

}, {
    Sequelize,
    timestamps: false, // Menonaktifkan pembuatan kolom createdAt dan updatedAt
    tableName: 'users_details'
})

newSeq.sync().then(() => {
    console.log('user_details tabel passed sync');
}).catch((err) => {
    console.log("sync error", err);
})

export default Details
import { Sequelize, DataTypes } from 'sequelize';
import { define, sync } from '../config/connection.js';

const Details = define("user_details", {
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
        type: DataTypes.INTEGER,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sync().then(() => {
    console.log('user_details tabel passed sync');
}).catch((err) => {
    console.log("sync error", err);
})

export default Details
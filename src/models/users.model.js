import { Sequelize, DataTypes } from 'sequelize';
import newSeq from '../config/connection.js'

const Users = newSeq.define(`users`, {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },
    no_telp: {
        type: DataTypes.INTEGER,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "User",
    }
},
    {
        Sequelize,
        timestamps: false, // Menonaktifkan pembuatan kolom createdAt dan updatedAt
        tableName: 'users'
    })

newSeq.sync().then(() => {
    console.log('users tabel passed sync');
}).catch((err) => {
    console.log("sync error", err);
})

// export const createUsers = ((namaPrm, emailPrm, no_telpPrm, passwordPrm, rolePrm) => {
//     const create = Users.create({
//         nama: namaPrm,
//         email: emailPrm,
//         no_telp: no_telpPrm,
//         password: passwordPrm,
//         role: rolePrm
//     })
//     console.log("user" + create.id + "success");
//     return create
// })

export default Users
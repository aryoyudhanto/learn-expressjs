import Users from "../models/users.model.js";
import { Op } from 'sequelize';
// import { createUsers } from "../models/users.model.js";

export const postUsers = async (req, res) => {

  // const resModel = createUsers(nama, email, no_telp, password, role)
  try {
    const { nama, email, no_telp, password, role } = req.body;

    const resModel = await Users.create({
      id: null,
      nama,
      email,
      no_telp,
      password,
      role
    });
    res.status(201).json({
      msg: "User Created",
      User: resModel
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
  // if(!(nama&&email&&no_telp&&password)){
  //     return res.status(400).json({
  //         meta: "01-200",
  //         message: "Failed add new user"
  //     })
  // }

  // return res.status(200).json({
  //     meta: {
  //         code: "01-200",
  //         message: "Success add new user"
  //     },
  //     data: {
  //         id: resModel
  //     }
  // })

};

export const getAllUsers = async (req, res) => {
  try {
    const response = await Users.findAll({
      where: {
        id: {
          [Op.ne]: 1
        }
      }
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'ID harus berupa angka, misalnya 1-100.' });
    }

    const response = await Users.findOne({
      where: {
        id: userId,
      },
    });

    if (!response) {
      return res.status(400).json({ error: 'Pengguna dengan ID tersebut tidak ditemukan.' });
    }


    res.status(201).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const userId = req.params.id;

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'ID harus berupa angka, misalnya 1-100.' });
    }

    if (userId === '1') {
      return res.status(400).json({ error: 'Tidak dapat menghapus pengguna dengan ID 1.' });
    }

    const deletedUser = await Users.destroy({
      where: {
        id: userId
      }
    });

    if (deletedUser === 0) {
      return res.status(404).json({ error: 'Pengguna dengan ID tersebut tidak ditemukan.' });
    }

    res.status(200).json({ message: 'Penghapusan berhasil' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};


import Users from "../models/users.model.js";
import { Op } from 'sequelize';

export const postUsers = async (req, res) => {
  try {
    const resModel = await Users.create(req.body)

    res.status(201).json({
      msg: "User Created",
      User: resModel
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }

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

    if (response === 0) {
      return res.status(400).json({ error: 'Pengguna dengan ID tersebut tidak dapat ditemukan.' });
    }
    else {
      if (response === 1) {
        return res.status(400).json({ error: 'Pengguna dengan ID tersebut tidak dapat dilihat' });
      }
      else {
        res.status(201).json(response);
      }
    }

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

    const deletedUser = await Users.destroy({
      where: {
        id: userId
      }
    });

    if (deletedUser === 0) {
      return res.status(404).json({ error: 'Pengguna dengan ID tersebut tidak ditemukan.' });
    }else {
      if (deletedUser === 1) {
        return res.status(400).json({ error: 'Tidak dapat menghapus pengguna dengan ID 1.' });
      }
      else {
        res.status(201).json({ message: 'Penghapusan berhasil' });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { nama, email, no_telp, password, role } = req.body;

    if (isNaN(userId)) {
      return res.status(400).json({ error: 'ID pengguna harus berupa angka.' });
    }

    if (userId === "1") {
      return res.status(400).json({ error: 'ID 1 tidak dapat diubah' });
    }

    const user = await Users.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'Pengguna dengan ID tersebut tidak ditemukan.' });
    }

    // Memperbarui data pengguna
    user.nama = nama;
    user.email = email;
    user.no_telp = no_telp;
    user.password = password;
    user.role = role;

    await user.save(); // Menyimpan perubahan data pengguna ke database

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Terjadi kesalahan server' });
  }
};

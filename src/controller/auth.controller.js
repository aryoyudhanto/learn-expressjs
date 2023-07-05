import Users from "../models/users.model.js";
import jwtController from "jsonwebtoken"

export const loginAuth = async (req, res) => {
    const { email, password } = req.body

    if (!(email && password)) {
        return res.status(400).json({
            meta: {
                code: "01-100",
                message: "Validation error"
            },
            data: {}
        })
    }

    const user = await Users.findOne({
        where: {
            email: email,
        },
    })

    if (!user) {
        return res.status(404).json({
            meta: {
                code: "00-404",
                message: "Email not found"
            },
            data: {}
        })
    }

    if (user.password == password) {
        const token = jwtController.sign({
            Id: user.id,
            nama: user.nama,
            email: user.email
        },
        "masukaja",
        {
            expiresIn: "2d"
        })

        return res.status(200).json({
            meta: {
                code: "00-200",
                message: "Success login"
            },
            data: {
                token: token
            }
        })
    }
    return res.status(404).json({
        meta: {
            code: "00-404",
            message: "Invalid password"
        },
        data: {}
    })
}
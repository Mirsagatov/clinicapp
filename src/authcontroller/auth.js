const model = require("../modules/Auth/auth")

const jwt = require("jsonwebtoken")

const { secretKey } = require("../config")

module.exports = {
    REGISTER: async(req, res) => {
        try {
            const user = await model.userRegister(req.body)
            if(user) {
                const token = jwt.sign(user, secretKey)
                res.status(302).json({ token, message: "You authed in" })
            } else {
                res.status(401).json({ message: "You are not authed in, please try again!" })
            }
        } catch (error) {
            return error.message
        }
    },
    LOGIN: async(req, res) => {
        try {
            const user = await model.userLogin(req.body)
            if(user) {
                const token = jwt.sign(user, secretKey)
                res.status(302).json({ token, message: "You logged in!" });
            } else {
                    res.status(401).json({ message: "You are not logged in, please try again" })
            }
        } catch (error) {
            return error.message
        }
    }
}
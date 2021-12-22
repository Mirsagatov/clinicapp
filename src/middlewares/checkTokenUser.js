const { verify } = require("../lib/jwt");
const { secretKey } = require("../config");
const model = require("../modules/auth/auth");

module.exports = {
  CHECK_TOKEN: async (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
      res
        .status(401)
        .json({ message: "You are not logged in, please try again!" });
    } else {
      try {
        const payload = verify(token, secretKey);
        const client = await model.getUserByID(payload.user_id);

        if (!client.isAdmin) {
          next();
        } else {
          res
            .status(401)
            .json({ message: "You are not logged in, please try again!" });
        }
      } catch (error) {
        res
          .status(401)
          .json({ message: "Invalid token. Please, log in again!" });
        throw error;
      }
    }
  },
};

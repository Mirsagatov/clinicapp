const { fetch } = require("../../lib/postgres");

const userRegister = async (args) => {
  try {
    console.log(args);
    const data = await fetch(
      `
                INSERT INTO users (
                    user_name, 
                    user_email,
                    user_password
                ) VALUES (
                    $1, $2, $3
                ) RETURNING user_id
            `,
      args.userName,
      args.email,
      args.password
    );
    return data;
  } catch (error) {
    throw new Error(`authRepository, [userRegister]: ${error}`);
  }
};

const userLogin = async (args) => {
    try {
        const data = await fetch(
            `
                SELECT 
                    user_id
                FROM
                    users
                WHERE 
                    user_name = $1 and user_password = $2
            `,
            args.userName,
            args.password
        );
        return data;
    } catch (error) {
        throw new Error(`authRepository, [userLogin]: ${error}`);
    }
};

const getUserByID = async(id) => {
    try {
        const data = await fetch(
            `
                SELECT
                    isAdmin
                FROM
                    users
                WHERE
                    user_id = $1
            `,
            id
        );
        return data
    } catch (error) {
        throw new Error(`authRepository, [getUserByID]: ${error}`);
    }
}

module.exports = {
  userRegister,
  userLogin,
  getUserByID
};


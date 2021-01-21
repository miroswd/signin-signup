const User = require('../../models/User');

/**
 * @param {*} req
 * @param {*} res
 * @returns {Promise<Object>}
 */

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

    // phones: [
    //   {
    //     number: {
    //       type: Number,
    //       required: true,
    //       unique: true,
    //     },
    //     ddd: {
    //       type: Number,
    //       required: true,
    //     },
    //   },
    // ],

    const user = await User.create(req.body);

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

module.exports = createUser;

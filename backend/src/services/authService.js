const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const registerUser = async ({ username, email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    return newUser;
};

const loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
    throw new Error('Invalid credentials');
};

module.exports = {
    registerUser,
    loginUser
};

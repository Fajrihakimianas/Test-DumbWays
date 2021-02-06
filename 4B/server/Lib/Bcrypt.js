const bcrypt = require('bcrypt');
const encryptConfig = require('../Config/Encrypt');

exports.Encrypt = (password) => {
    return bcrypt.hashSync(password, encryptConfig.salt);
};
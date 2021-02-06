const connection = require('../Config/Db');
const bcrypt = require('../Lib/Bcrypt');
const jwt = require('jsonwebtoken');

// REGISTER
exports.registerUser = function(req, res){
    const password = req.body.password;
    const encryptPassword = bcrypt.Encrypt(password);

    userRegister = {
        name: req.body.name,
        email: req.body.email,
        password: encryptPassword
    }

    // Cek Double email
    var get = 'SELECT * FROM user WHERE email = ?';
    connection.query(get, [userRegister.email], function(err, data){
        if(err) throw err

        if(data.length > 0){
            res.send({
                message: "Email was already exist!"
            });
        }
        else {
            // Kalau tidak ada, Insert Data User ke database User
            var input = 'INSERT INTO user SET ?';
            connection.query(input, donaturRegister, function(err, user){
                if(err) throw err
            });
            res.send({
                message: "Register Success!"
            });
        }
    })
}

// LOGIN
exports.userLogin = function(req, res){

    var password = req.body.password;
    const encryptPassword = bcrypt.Encrypt(password);

    loginUser = {
        name: req.body.name,
        email: req.body.email,
        password: encryptPassword
    }

    var login = "SELECT * FROM user WHERE email = ? AND password = ?";
    connection.query(login, [loginUser.email, loginUser.password], function(err, user){
        if(err) throw err;

        if(user.length > 0){
            jwt.sign({ id: user[0].id, email: user[0].email}, '123abc', (err, token) => {
                try {
                    if(err) throw err;

                    res.send({
                        message: "Login Successfully!",
                        token: token
                    })
                } 
                catch (error) {
                    res.send({
                        error: true,
                        message: error.message
                    })
                }
            })
        }
        else {
            res.send({
                message: "EMAIL / PASSWORD Does Not Match!"
            })
        }
    })
}

const bkfd2Password = require('pbkdf2-password');
const hasher = bkfd2Password();

module.exports = async (password) => {
    return new Promise((resolve, reject) => {
        return hasher({ password: password, salt: 'blogApi' }, (err, pass, salt, hash) => {
            // console.log("err:  ", err);
            // console.log("pass: ", pass);
            // console.log("salt: ", salt);
            // console.log("hash: ", hash);

            resolve(hash);
        })
    })
}
const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashPassword){
        return bcrypt.compareSync(this.password, hashPassword);
    }

    async addUser() {
        try {
            const response = await db.one(
                `INSERT INTO users (user_name, email, password)
                VALUES ($1, $2, $3) RETURNING id;`,[this.name, this.email, this.password]);
            return response;
        } catch (err) {
            return err;
        }
    }

    async logInUser() {
        try {
            const response = await db.one(`SELECT id, user_name, password FROM users WHERE email = $1;`,[this.email]);
            console.log(response);
            const isValid = this.checkPassword(response.password);
            if (!!isValid){
                console.log('login success', isValid);
            }else{
                console.log('go away', isValid);
            }
        } catch (err) {
            console.log('error: ', err)
            return err;
        }
    }
}

module.exports = User;
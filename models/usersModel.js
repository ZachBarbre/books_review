const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, name, email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    async addUser() {
        try {
            
        } catch (err) {
            return err;
        }
    }

    async logInUser() {
        console.log('logging in user');
    }
}

module.exports = User;
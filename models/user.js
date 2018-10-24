const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {
    Schema
} = mongoose;

const userSchema = new Schema({
        // name: {
        //     type: String,
        //     required: true
        // },
        // username: {
        //     type: String,
        //     index: true,
        //     unique: true,
        //     required: true
        // },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            required: true
        },
        password: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model('User', userSchema);
// hash password before saving to db
module.exports.hashPassword = async password => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Hashing failed ', error);
    }
}
// compare password in db and user password input (login)
module.exports.comparePassword = async (inputPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
        throw new Error('comparing failed', error);
    }
}
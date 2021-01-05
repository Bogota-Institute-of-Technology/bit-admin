const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    code: { type: Number, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    position: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema)
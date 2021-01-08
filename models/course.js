/* Modelo para los cursos */
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    code: { type: Number, required: true, unique: true },
    name: { type: String, required: true, unique: true }
})

module.exports = mongoose.model('Course', courseSchema)
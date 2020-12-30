module.exports = (app) => {
    const course = require('../controllers/courseController')

    app.post('/course/create', course.create)

}
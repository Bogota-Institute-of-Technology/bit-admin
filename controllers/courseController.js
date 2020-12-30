const Course = require('../models/course')

/**
 * Method to create the courses.
 * @param {*} req => Allows to get all the parameters that come to request.
 * @param {*} res => Allow to return a response.
 */

exports.create = (req, res) => {
    const nCourse = new Course({
        code: req.body.code,
        name: req.body.name
    })

    nCourse.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            res.status(500).send({
                message: error.message || 'Error to create the course'
            })
        }
    )

}
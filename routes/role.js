/* Rutas de los roles */
module.exports = (app) => {
    const role = require('../controllers/roleController')

    app.post('/role/create', role.createRole) /* Crear un role */
    app.get('/role/get', role.findAllRole) /* Mostrar todos los roles */
    app.get('/role/getOne/:id', role.findOneRole) /* Encontrar un rol en especifico */
    app.put('/role/update/:id', role.updateRole) /* Actualizar un role por id */
    app.delete('/role/delete/:id', role.deleteRole) /* Eliminar un role por id */

}
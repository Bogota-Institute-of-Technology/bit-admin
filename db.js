const mongoose = require('mongoose')

const connectToDB = () => {
    mongoose.set('useCreateIndex', true)
    mongoose.connect('mongodb+srv://userAdminBook:testBITBook@proyectobit.3pvug.mongodb.net/BITAdmin?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
        if (error){
            console.log('Error -> ', error)
        }else{
            console.log('Nos conectamos correctamente...')
        }
    } )
}

module.exports = { connectToDB }
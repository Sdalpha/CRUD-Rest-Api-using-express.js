const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Todo', TodoSchema)
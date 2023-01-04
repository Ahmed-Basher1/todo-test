const mongoose = require('mongoose');


const TodoSchema =  mongoose.Schema({
    name: {
        type : String,
        minLength : 3,
        required: [true, 'Please provide name of todo name'],
    },
    content : {
        type : String,
        minLength : 3,
        required: [true, 'Please provide name of todo content'],
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
        },
    date : {
        type : Date,
        default : Date.now
    },
})
module.exports =  mongoose.model('Todo',TodoSchema)


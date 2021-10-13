const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item:[
        {
            data:   {
                    type:String
                    }
        }
    ],
    user:{
        type:String,
        unique:[true,'Please use another username']
    }
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo;
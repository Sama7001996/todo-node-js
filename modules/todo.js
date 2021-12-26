const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title : {
        type:String,
        minlength:3
    }
});
const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;
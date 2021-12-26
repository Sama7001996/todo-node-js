
const express = require('express')
const router = express.Router()
const app = express();
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const unique = Array.from(new Set(username)) 


app.get('/todos',()=>console.log("hello")
)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 8,
    },
    dob: Date,
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        maxlength: 15,
        required: true
    },
})

userSchema.pre('save', function () {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
});
userSchema.methods.comparePassword = function (password) {
    const isValid = bcrypt.compareSync(password, this.password);
    return isValid
}
const User = mongoose.model('User', userSchema);
module.exports = User;

const todoSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    },
    user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    require: true
    },
    status:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    require: true
    },
    tags :{
        type :string ,
        maxlength: 10
    },

});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo


function userRegistration(req, res) {
const hashedPassword = bcrypt.hashSync(req.body.psw, 10);
const user = new User(req.body);
    user.psw = hashedPassword;
        user.save(function (err) {      
            if (err) return res.status(500).send("There was a problem registering the user.");
            const token = jwt.sign({ id: user.userName }
            );
        res.status(200).send({ auth: true, token: token });        
});
}

app.get('/todos',function(req,res,next){
    const todos = readFile("./data.json")
    console.log("test");
    res.send(todos).end()
    });

    app.post('/todos', (req, res, next) => {
        const todo = req.body;
        todo.id = myId();
        todos.push(todo);
        writeFile('data.json', todos);
        res.json(todo);
    });

    app.delete('/todos/:id', (req, res, next) => {
        const todo = todos.find(m => m.id == req.params.id);
        todos = todos.filter(m => m.id != todo.id)
        writeFile('data.json', todos);
        res.json(todo);
});

    app.patch('/todos/:id', function (req, res) {
        const todo = todos.find(m => m.id = req.params.id)
        todo.todo = req.body
        writeFile("./data.json" , todos);
        res.send(todos)
});

const path = require('path');
const { auth } = require('express-openid-connect');
app.use(express.static(path.join(__id, "..", "")));


app.use(
    User({login: process.env
    }),
);

app.listen(3000 , function(){
    console.log("hello")
})

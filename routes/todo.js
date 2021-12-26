const express = require ('express');
const {validateTodo} = require('../middlewares/validation');
const Todo = require('../modules/todo')
const router = express.Router()

router.get('/', async(req , res , next) => {
    const todos =  await Todo.find({title:'new'},{_id:1})
    res.json(todos);
})

router.post('/',validateTodo, async(req , res, next) => {
    const todo = req.body;
    const doc = await Todo.create(todo);
    res.json(doc)
})




module.exports = router;

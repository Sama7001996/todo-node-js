const validateTodo = (req , res, next) => {
    const {title} = req.body;
    if (! title){
        next('Erorr title is not found');
    }
    next();
}
module.exports = {
    validateTodo
}
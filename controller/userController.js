const Todo = require('../model/todo');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');


    const createTodo = async(req,res)=>{
        const { name,content} = req.body

        const {userId} = req.user
        console.log(req.user)
        const todo  =  await Todo.create({
            name,
            content,
            userId: userId
        })
        res.status(StatusCodes.CREATED).json({
            msg: "add todo successfully",todo
          });
    }

    const getUserTodos = async(req,res)=>{
        const {userId} = req.user
        const userTodo =  await Todo.find({userId:userId})
        res.status(StatusCodes.CREATED).json({
            userTodo
          });
    }
    const getuserTodoById = async(req,res)=>{
        
            const {userId} = req.user
            const userTodo =  await Todo.find({_id:req.params.id,userId:userId}).populate({path:'userId'})
            res.status(StatusCodes.CREATED).json({
                userTodo
              });
    }

    const updateTodo = async(req,res)=>{
        
        const {userId} = req.user
        const updateTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
          });
          if (!updateTodo) {
            throw new CustomError.BadRequestError (" didn't update successfully plz try again ")
          }
            const userTodo =  await Todo.find({_id:req.params.id,userId:userId}).populate({path:'userId'})
            res.status(StatusCodes.OK).json({
                userTodo
            });
    }
    const deleteTodo =  async(req,res)=>{
        const { id } = req.params;
        const todo = await Todo.findOne({ _id: id });
        if (!todo) {
          throw new CustomError.NotFoundError(`No product with id : ${productId}`);
        }
        await todo.remove();
        res.status(StatusCodes.OK).json({ msg: 'Success! todo removed.' });
    }


    module.exports = {
        createTodo,
        getUserTodos,
        getuserTodoById,
        updateTodo,
        deleteTodo
    }

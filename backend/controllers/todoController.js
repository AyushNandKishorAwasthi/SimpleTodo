const Todo = require('./../models/todoModel')
const CatchAsync = require('./../utils/CatchAsync')
const AppErrorHandler = require('./../utils/appErrorHandler')

exports.createUser=CatchAsync(async(req,res,next)=>{
    console.log(req.body.user);
    const user = await Todo.findOne({user:req.body.user});
    if(user)
    return res.status(200).json({
        success:'true',
        user
    })
    else{
        const user = await Todo.create({
            user:req.body.user,
        })
        res.status(200).json({
            success:'true',
            user
        })
    }
    
})

exports.createTodo=CatchAsync(async(req,res,next)=>{
 const todo = await Todo.findById(req.params.id);
 console.log(req.body.input);
 todo.item.push({
     data:req.body.input
 })
 await todo.save()
 if(!todo)return next ( new AppErrorHandler('Try again',404));
 return res.status(200).json({
     status:'true',
     item:todo.item,
 })   
})

exports.deleteTodo=CatchAsync(async(req,res,next)=>{
    const todo = await Todo.findById(req.params.id);
    todo.item.pull(req.params.todoId);
    await todo.save();
    if(!todo) return next ( new AppErrorHandler('Failed deleting',404));
    res.status(200).json({
        success:'true',
        item:todo.item
    })
})
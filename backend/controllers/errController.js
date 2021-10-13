const sendErrorPro=(err,req,res)=>{
    console.log(err.name);
    return res.status(err.statusCode).json({
        status:err.statusCode,
        message:err.message
    })
}

const sendErrorDev=(err,req,res)=>
    {
        console.log(err.name);
        return res.status(err.statusCode).json({
            status:err.statusCode,
            message:err.message,
            error:err,
            stack:err.stack,
        })
    }

module.exports = (err,req,res,next)=>{
    if(process.env.NODE_ENV==='DEVELOPMENT')
    sendErrorDev(err,req,res);
    if(process.env.NODE_ENV==='PRODUCTION')
    sendErrorPro(err,req,res);
}
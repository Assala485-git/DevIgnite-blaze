const errorHandler=(err,req,res,newt)=>{
    let statusCode;
    if(res.statusCode){
        statusCode=res.statusCode === 200 ? 500 : res.statusCode; 
    }
    else{
        statusCode=404;
    }
    let message=err.message;
    // If Mongoose not found error, set to 404 and change message
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }
  res.status(statusCode).json({
    massage:message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
export default errorHandler
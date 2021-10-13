class AppErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode||500;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppErrorHandler
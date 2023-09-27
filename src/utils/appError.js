class AppError{
    message;
    statusCode;

    //Caso o StatusCode do constructor não receba nada, ele já iniciará com o 400.
    constructor(message, statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;
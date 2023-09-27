require("express-async-errors");

const migrationsRun = require("./databases/sqlite/migrations");
migrationsRun();

const express = require("express");

const AppError = require("./utils/appError")

const routes = require("./routes");

const app = express();
app.use(express.json());

app.use(routes);
app.use((error, request, response, next) =>{
    // Criei o error como uma INSTÂNCIA do AppError.
    if(error instanceof AppError){
        //retorne o status da instância-erro com o statusCode padrão do construtor (400). 
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        });
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "internal sever error"
    })
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on Port ${port}`));
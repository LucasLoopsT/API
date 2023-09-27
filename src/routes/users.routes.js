const {Router} = require("express");
const userController = require("../controllers/userController");
const usersRoutes = Router();

function myMiddleware(request, response, next){
    console.log("Middleware foi utilizado");
    next();
}

const controller = new userController();

// Método Post é chamado de outro lugar e não escreve assim que entra na página
usersRoutes.post("/", myMiddleware, controller.create);

usersRoutes.put("/:id", controller.update);

module.exports = usersRoutes;

const {Router} = require("express");
const NotesController = require("../controllers/notesController");
const notesRoutes = Router();

const controller = new NotesController();

notesRoutes.post("/:user_id", controller.create);
notesRoutes.get("/:id", controller.show);

module.exports = notesRoutes;

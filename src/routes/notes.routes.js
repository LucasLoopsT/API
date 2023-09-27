const {Router} = require("express");
const NotesController = require("../controllers/notesController");
const notesRoutes = Router();

const controller = new NotesController();

notesRoutes.get("/", controller.index);
notesRoutes.post("/:user_id", controller.create);
notesRoutes.get("/:id", controller.show);
notesRoutes.delete("/:id", controller.delete);

module.exports = notesRoutes;
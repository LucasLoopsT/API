const {Router} = require("express");
const TagsController = require("../controllers/tagsController");
const tagsRoutes = Router();

const controller = new TagsController();

tagsRoutes.get("/:user_id", controller.index);

module.exports = tagsRoutes;
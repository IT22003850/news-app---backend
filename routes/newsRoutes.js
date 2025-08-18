const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newsController");

router.get("/", newsController.getNews);
router.post("/", newsController.postNews);
router.put("/:id", newsController.updateNews);

module.exports = router;

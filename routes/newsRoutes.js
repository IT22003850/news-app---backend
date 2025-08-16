const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController')

router.get('/', newsController.getNews)
router.post('/',newsController.postNews)

module.exports = router;
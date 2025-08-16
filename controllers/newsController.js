const News = require('../models/newsModel');

const getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        console.log(`Error Fetching News: ${error}`.red);
        res.status(500).json({message: 'Server error, please try again later..!'})
    }
}

module.exports = {getNews};
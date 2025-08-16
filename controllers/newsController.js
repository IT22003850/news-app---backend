const News = require('../models/newsModel');
const mongoose = require('mongoose');

const getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json(news);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getNews};
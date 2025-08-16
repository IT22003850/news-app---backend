const News = require('../models/newsModel');

const getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        console.log(`Error Fetching News: ${error}`.red);
        res.status(500).json({message: 'Server error, please try again later!'})
    }
}

const postNews = async (req, res) => {
    try {
        const {title, description} = req.body;

        if(!title || !description){
            return res.status(400).json({message: "title and description are required fields!"})
        }

        const news = await News.create({
            title,
            description,
        });

        res.status(201).json(news);
        
    } catch (error) {
        console.log(`Error creating news: ${error}`);
        res.status(500).json({message: 'Server error, please try again later!'})
    }
}

module.exports = {getNews, postNews};
var express = require('express');
var router = express.Router();
const sections = require('../public/json/chapterStructure.json');

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

// Generate routes for each chapter
for (const part in sections) {
  for (const section in sections[part]) {
    sections[part][section].forEach(chapter => {
      router.get(`/${encodeURIComponent(chapter.title)}`, (req, res) => {
        const randomQuote = getRandomQuote(chapter.quotes);
        res.render('chapter', { title: chapter.title, quote: randomQuote });
      });
    });
  }
}

module.exports = router;

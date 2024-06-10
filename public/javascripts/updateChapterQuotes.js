const axios = require('axios');
const cheerio = require('cheerio');
const sections = require('../json/chapterStructure.json');
const fs = require('fs');

// Function to fetch quotes from a chapter
async function fetchQuotes(chapter) {
  try {
    // Fetch the webpage
    const response = await axios.get(chapter.url);
    const html = response.data;
    
    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Find all <blockquote> tags and extract their text
    const quotes = $('blockquote').map((index, element) => {
      return $(element).text().trim();
    }).get();

    return quotes;

  } catch (error) {
    console.error('Error scraping the website:', error);
  }
}

// Function to update the chapterStructure.json file with quotes
async function updateChapterQuotes() {
  for (const part in sections) {
    for (const section in sections[part]) {
      for (const chapter of sections[part][section]) {
        quotes = await fetchQuotes(chapter);
        chapter.quotes = quotes;
      }
    }
  }
  fs.writeFileSync('../json/chapterStructure.json', JSON.stringify(sections, null, 2));
  console.log('Quotes saved to chapterStructure.json');
}

updateChapterQuotes();
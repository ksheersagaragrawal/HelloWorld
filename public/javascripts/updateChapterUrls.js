const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const chapterStructure = require('../json/chapterStructure.json');

// Function to update the chapterStructure.json file with urls
async function updateChapterUrls() {
  try {
    // Fetch the webpage
    const response = await axios.get('https://www.navalmanack.com/almanack-of-naval-ravikant/table-of-contents');
    const html = response.data;
    
    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Find all <a> tags 
    const allLinks = $('a').map((index, element) => {
      return {
        title: $(element).text().trim().toUpperCase(),
        url: $(element).attr('href')
      };
    }).get();

    // Filter all the links
    const chapters = allLinks.map(link => ({
      title: link.title,
      url: `https://www.navalmanack.com${link.url}`
    }));

    
    // Update the chapterStructure url where chapters.title==chapterTitles.title
    Object.entries(chapterStructure).forEach(([part, sections]) => {
      Object.entries(sections).forEach(([section, chapterTitles]) => {
        chapterTitles.forEach(chapter => {
          const foundChapter = chapters.find(c => c.title === chapter.title);
          if (foundChapter) {
            chapter.url = foundChapter.url;
          }
        });
      });
    });

    // Save to a JSON file
    fs.writeFileSync('../json/chapterStructure.json', JSON.stringify(chapterStructure, null, 2));
    console.log('Table of contents saved to chapterStructure.json');
  } catch (error) {
    console.error('Error scraping the website:', error);
  }
}

updateChapterUrls();
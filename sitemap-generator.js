const path = require('path');
const sitemapGenerator = require('nextjs-sitemap-generator');

const baseUrl = 'https://www.example.com';

sitemapGenerator({
  baseUrl,
  pagesDirectory: path.join(__dirname, 'src/pages'),
  targetDirectory: 'public/',
});

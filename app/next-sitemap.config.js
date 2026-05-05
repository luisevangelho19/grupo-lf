/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // Set the production site URL here; default to the configured custom domain
  siteUrl: process.env.SITE_URL || 'https://servicoslf.com.br',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000
}

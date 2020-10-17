const cheerio = require('cheerio')

function metaMarkup({ name, description, image, url }) {
  return `
    <meta property="og:type" content="website">
    <meta property="og:title" content="${name}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta itemprop="name" content="${name}">
    <meta itemprop="description" content="${description}">
    <meta itemprop="url" content="${url}">
    <meta itemprop="image" content="${image}">
  `
}

function meta({ route, html }) {
  // meta tags (fill in your info here / dynamic per route)
  const metaTags = {
    name: 'UBC Local Hack Day 2020',
    description:
      'At UBC Local Hack Day, we welcome hundreds of tech newbies to learn new skills, build cool projects, and share new experiences! We are part of an international celebration of diversity, accessibility, and inclusivity for newcomers in the Greater Vancouver hackathon and tech community.',
    image: 'https://lhd.nwplus.io/thumbnail.png',
    url: 'https://lhd.nwplus.io'
  }

  // Load Nuxt generared HTML
  const $ = cheerio.load(html)

  // Generate meta markup
  const tags = metaMarkup(metaTags)

  // Append them to <head>
  $('head').append(tags)

  // Return new HTML
  return $.html()
}

exports.meta = meta

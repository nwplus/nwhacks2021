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
    name: 'nwHacks 2021',
    description:
      'nwHacks 2021 is the largest hackathon in the pacific northwest. Usually located at UBC, Vancouver campus, this year, nwHacks 2021 is happening online. Be part of this amazing e-gathering with developers, engineers, and designers from around the world. nwHacks is part of nwPlus, a team committed to supporting tech communities in BC and beyond.',
    image: 'https://nwhacks.io/thumbnail.png',
    url: 'https://nwhacks.io'
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

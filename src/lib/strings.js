

exports.cleanChar = (slug) => { return slug.toLowerCase()
    .replace(/[']/gi, '')
    .replace(/ /gi, '-')
    .replace(/[,]/gi, '')
    .replace(/[ä]/gi, 'a')
    .replace(/[ö]/gi, 'o') }
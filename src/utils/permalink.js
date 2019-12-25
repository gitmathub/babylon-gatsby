const createValidName = require('slug')

exports.createPublicationLink = ({ publicationTitle }) => {
  if (!publicationTitle) {
    throw {
      error: `Filename creation failed. Missing publication title: ${publicationTitle}`,
    }
  }
  return createValidName(publicationTitle.toLowerCase())
}

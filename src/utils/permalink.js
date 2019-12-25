const createValidName = require('slug')

exports.createPublicationLink = ({ publicationTitle }) => {
  if (!publicationTitle) {
    throw new Error(
      `Filename creation failed. Missing publication title: ${publicationTitle}`
    )
  }
  return createValidName(publicationTitle.toLowerCase())
}

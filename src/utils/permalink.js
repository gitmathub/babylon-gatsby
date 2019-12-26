const createValidName = require('slug')

exports.createPublicationLink = ({ publicationTitle }) => {
  if (!publicationTitle) {
    throw new Error(
      `Filename creation failed. Missing publication title: ${publicationTitle}`
    )
  }
  const path = '/'
  return path + createValidName(publicationTitle.toLowerCase())
}

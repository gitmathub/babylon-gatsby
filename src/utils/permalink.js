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

exports.createAuthorPageLink = ({ firstname, lastname }) => {
  if (!firstname || !lastname) {
    throw new Error(
      `Filename creation failed. Missing parameters: ${firstname} ${lastname}`
    )
  }
  const path = '/'
  return (
    path +
    createValidName(firstname.toLowerCase() + '-' + lastname.toLowerCase())
  )
}

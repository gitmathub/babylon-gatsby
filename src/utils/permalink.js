const createValidName = require('slug')

exports.createPublicationLink = ({ title }) => {
  if (!title) {
    throw new Error(
      `Filename creation failed. Missing publication title: ${title}`
    )
  }
  const path = '/'
  return path + createValidName(title.toLowerCase())
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

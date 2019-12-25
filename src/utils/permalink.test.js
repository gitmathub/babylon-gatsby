import { createPublicationLink } from './permalink.js'

it('creates simple names', () => {
  const publicationTitle = 'lexicon'
  const expectedFileName = 'lexicon'
  const result = createPublicationLink({ publicationTitle })
  expect(result).toBe(expectedFileName)
})

it('creates always lower case names', () => {
  const publicationTitle = 'Once Uppon A Time In America'
  const expectedFileName = 'once-uppon-a-time-in-america'
  const result = createPublicationLink({ publicationTitle })
  expect(result).toBe(expectedFileName)
})

it('handles non rfc characters', () => {
  const publicationTitle = 'Let’s get сложный!'
  const expectedFileName = 'lets-get-slozhnyj'
  const result = createPublicationLink({ publicationTitle })
  expect(result).toBe(expectedFileName)
})

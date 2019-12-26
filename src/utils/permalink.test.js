import { createPublicationLink } from './permalink.js'
import { createAuthorPageLink } from './permalink.js'

describe('Creation of publication link works', () => {
  it('creates simple names', () => {
    const title = 'lexicon'
    const expectedFileName = '/lexicon'
    const result = createPublicationLink({ title })
    expect(result).toBe(expectedFileName)
  })

  it('creates always lower case names', () => {
    const title = 'Once Uppon A Time In America'
    const expectedFileName = '/once-uppon-a-time-in-america'
    const result = createPublicationLink({ title })
    expect(result).toBe(expectedFileName)
  })

  it('handles non rfc characters', () => {
    const title = 'Let’s get сложный!'
    const expectedFileName = '/lets-get-slozhnyj'
    const result = createPublicationLink({ title })
    expect(result).toBe(expectedFileName)
  })
})

describe('Creation of author link works', () => {
  it('creates simple names', () => {
    const firstname = 'Ronald'
    const lastname = 'Daus'
    const expectedFileName = '/ronald-daus'
    const result = createAuthorPageLink({ firstname, lastname })
    expect(result).toBe(expectedFileName)
  })
})

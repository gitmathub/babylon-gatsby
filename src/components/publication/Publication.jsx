import * as React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({ publication }) => {
  const { abstract, description, authors, subtitle, title } = publication

  return (
    <article>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <div className="pub__author-list">
        {authors.map(({ titles, firstname, lastname }, index) => (
          <span className="pub__author" key={index}>
            {titles} {firstname} {lastname}
          </span>
        ))}
      </div>
      <ReactMarkdown escapeHtml={false} className="layout__floating-text">
        {getText(description, abstract)}
      </ReactMarkdown>
      <DetailsAndProperties publication={publication} />
    </article>
  )
}

const getText = (description, abstract) =>
  description ? description : abstract

const DetailsAndProperties = ({ publication }) => {
  const {
    figures,
    is_sold_out,
    isbn,
    issn,
    pages,
    price,
    properties,
    release_date,
    size,
  } = publication

  return (
    <table className="pub__details">
      <tbody>
        <SoldOut isSoldOut={is_sold_out} />
        <ReleaseDate release_date={release_date} />
        <Detail name="ISBN" data={isbn} />
        <Detail name="ISSN" data={issn} />
        <Detail name="Seiten" data={pages} />
        <Detail name="Abbildungen" data={figures} />
        <Detail name="Buchformat" data={size} />
        <Price price={price} />
        <Properties properties={properties} />
      </tbody>
    </table>
  )
}

const SoldOut = ({ isSoldOut }) => {
  if (!isSoldOut) return null
  return (
    <tr>
      <td colSpan="2">
        <span className="pub__sold-out">
          Die Ausgabe ist leider vergriffen.
        </span>
      </td>
    </tr>
  )
}

const ReleaseDate = ({ release_date }) => {
  if (!release_date) return null
  return (
    <tr>
      <td>Datum:</td>
      <td>{new Date(release_date).getFullYear()}</td>
    </tr>
  )
}

const Detail = ({ name, data }) => {
  if (!data) return null
  return (
    <tr>
      <td>{name}:</td>
      <td>{data}</td>
    </tr>
  )
}

const Price = ({ price }) => {
  if (!price) return null
  return (
    <tr>
      <td>Preis:</td>
      <td>{Number.parseFloat(price).toFixed(2)} €</td>
    </tr>
  )
}

const Properties = ({ properties }) => {
  if (!properties) return null
  return (
    <tr>
      <td colSpan="2">
        <ReactMarkdown escapeHtml={false}>{properties}</ReactMarkdown>
      </td>
    </tr>
  )
}

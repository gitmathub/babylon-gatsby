import * as React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({ publication }) => {
  const { abstract, description, authors, subtitle, title } = publication

  return (
    <article className="pub">
      <h1>{title}</h1>
      <h3 className="pub__subtitle">{subtitle}</h3>
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
      <td colspan="2">
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
      <td colspan="2">
        <ReactMarkdown escapeHtml={false}>{properties}</ReactMarkdown>
      </td>
    </tr>
  )
}
// Datum: 1987 ISBN: 978-3-925529-00-9 Seitenanzahl: 192 Buchformat: 13,9 x 21
// Preis: Euro 20.00
// <div>{publication.price}€</div>
// <div>{publication.isbn}</div>
// <div>{publication.issn}</div>
// <div>{publication.size}</div>
// <div>{publication.is_sold_out}</div>
// <div>{publication.properties}</div>

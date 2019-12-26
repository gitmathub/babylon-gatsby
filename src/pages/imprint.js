import React from 'react'
import Layout from 'src/components/Layout'

export default () => {
  return (
    <Layout>
      <div>
        <section>
          <h1>Adresse</h1>
          <p className="layout__floating-text">
            <div>Babylon Metropolis Studies</div>
            <div>Ursula Opitz Verlag</div>
            <div>Krohnweg 3</div>
            <div>D-14089 Berlin</div>
          </p>
          <div>babylonmetropolis@yahoo.de</div>
          <div>ViSdP: Ursula Daus</div>
        </section>
        <section>
          <h1>Datenschutz - Hinweis zur DSGVO</h1>
          <p className="layout__floating-text">
            Unsere Website erhebt und speichert keine Userdaten, betreibt kein
            Tracking und nutzt keine Cookies. Wir hoffen Sie finden interessante
            und inspirierende Informationen zum Babylon-Metropolis Verlag und
            seinem Angebot.
          </p>
        </section>
      </div>
    </Layout>
  )
}

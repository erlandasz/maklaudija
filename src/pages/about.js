import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Labas, tai visgi pasidarei portfolio?
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">Idomus faktas apie tinginius:</h3>
          <p>
            <b>Tinginiai turi itin lėtą medžiagų apykaitą</b>
          </p>
          <p>
            Šis faktas yra pakankamai akivaizdus, tačiau retas žino, kokio
            lėtumo yra tinginių medžiagų apykaita. Pavyzdžiui, žmogui reikia nuo
            12 iki 48 valandų, kad suvalgytų, suvirškintų ir pašalintų iš savo
            organizmo maistą. Tuo metu tinginys vos vieną medžio lapą virškina
            įspūdingas 30 dienų. Jie retai išlipa iš medžių ir tai daro tik kai
            nori išsituštinti. Bet net ir šį procesą jie gali kontroliuoti ir
            nulipa nuo medžio tik kartą per savaitę. Be to, tuštinimosi proceso
            metu jie netenka net iki trečdalio savo kūno masės.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(relativePath: { eq: "tinginys.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)

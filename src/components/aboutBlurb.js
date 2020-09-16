import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AboutBlurb = () => {
  const data = useStaticQuery(graphql`
    query {
      unnamed: file(relativePath: { eq: "unnamed.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      david: file(relativePath: { eq: "david.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-blurb">
      <div className="container">
        <div className="inner-blurb">
          <div className="content">
            <h3>
              Renessaince, <i>a rebirth</i>
            </h3>
            <p>
              Known as the Renaissance, the period immediately following the
              Middle Ages in Europe saw a great revival of interest in the
              classical learning and values of ancient Greece and Rome. Against
              a backdrop of political stability and growing prosperity, the
              development of new technologies–including the printing press, a
              new system of astronomy and the discovery and exploration of new
              continents–was accompanied by a flowering of philosophy,
              literature and especially art. The style of painting, sculpture
              and decorative arts identified with the Renaissance emerged in
              Italy in the late 14th century; it reached its zenith in the late
              15th and early 16th centuries, in the work of Italian masters such
              as Leonardo da Vinci, Michelangelo and Raphael.
            </p>
            <div className="btn-row">
              <Link to="/work">View Series</Link>
            </div>
          </div>
          <div className="images">
            <div className="top-right"></div>
            <div className="bottom-left">
              <Img fluid={data.david.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="black-box"></div>
      <div className="black-box overlay"></div>
    </div>
  )
}

export default AboutBlurb

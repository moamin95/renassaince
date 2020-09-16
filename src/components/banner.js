import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

function Banner() {
  const data = useStaticQuery(graphql`
    query {
      dyke1: file(relativePath: { eq: "dyke1.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mona: file(relativePath: { eq: "mona.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      eyck1: file(relativePath: { eq: "eyck1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="side-image left">
            <Img fluid={data.dyke1.childImageSharp.fluid} />
          </div>
          <div className="main-text"> renaissance</div>
          <div className="main-image">
            <Img fluid={data.mona.childImageSharp.fluid} />
          </div>
          <div className="side-image right">
            <Img fluid={data.eyck1.childImageSharp.fluid} />
          </div>
        </div>
        <div className="scroll">
          <span>scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">portraiture in renassaince in europe</div>
    </div>
  )
}

export default Banner

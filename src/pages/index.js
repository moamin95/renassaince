import React from "react"
import "../styles/styles.scss"

import Scrollbar from "smooth-scrollbar"

//import components
import Header from "../components/header"
import Banner from "../components/banner"
import AboutBlurb from "../components/aboutBlurb"
import Footer from "../components/footer"

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
    <Footer />
  </div>
)

export default IndexPage

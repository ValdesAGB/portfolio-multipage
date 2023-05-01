import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Footer from './Footer'
import Biographie from '../pages/Biographie'
import Portfolio from '../pages/Portfolio'
import ScrollToTopOnPageChange from './ScrollToTopOnPageChange '
import Contact from '../pages/Contact'

function App() {
  const GlobalStyle = createGlobalStyle`
  *{
    font-family : Montserrat ;
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <ScrollToTopOnPageChange />
      <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default App

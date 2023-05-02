import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Footer from './Footer'
import Biographie from '../pages/Biographie'
import Portfolio from '../pages/Portfolio'
import ScrollToTopOnPageChange from './ScrollToTopOnPageChange '
import Contact from '../pages/Contact'
import Header from './Header'

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
      <Header />
      <div className="row my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biographie" element={<Biographie />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App

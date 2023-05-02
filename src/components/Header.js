import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../data'
import styled from 'styled-components'

function Header() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset === 0) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const HeadHeader = styled.div`
    background-color: ${isAtTop ? '#652c87' : 'rgba(255, 255, 255, 0.5)'};
  `

  return (
    <React.Fragment>
      <header className=" fixed-top">
        <HeadHeader className=" align-items-center p-2 px-3 navbar navbar-expand-md ">
          <span className=" navbar-brand">
            <Link
              to="/"
              className={`text-dark fw-bolder text-decoration-none fs-4 ${
                isAtTop ? 'text-white' : null
              }`}
            >
              LUCY{' '}
              <span style={{ color: isAtTop ? '#f9a03f' : '#652c87' }}>
                TOWNSEND
              </span>
            </Link>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="justify-content-end collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="row">
              {menu.map(({ id, to }) => (
                <Link
                  key={id}
                  to={to}
                  className={`col-12 col-md nav-item text-decoration-none fw-bold text-center ms-lg-5 my-2 my-lg-0`}
                  style={{ color: isAtTop ? 'white' : '#652c87' }}
                >
                  {to.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </HeadHeader>
      </header>
    </React.Fragment>
  )
}

export default Header

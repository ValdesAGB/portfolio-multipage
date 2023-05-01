import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cover from '../assets/iover.png'

function Accueil() {
  const DIV = styled.div`
    background-color: #f9a03f;
    height: 320px;
  `

  return (
    <React.Fragment>
      <section>
        <div
          className="row justify-content-center"
          style={{ backgroundColor: '#652c87', height: '300px' }}
        >
          <div className="row col-10 align-items-center ">
            <div className="col-5 p-3">
              <img src={cover} alt="1" className="w-100" />
            </div>
            <div className="col">
              <h1 className="text-white ">
                Lucy{' '}
                <span className="fw-bold" style={{ fontSize: '1.5em' }}>
                  TOWNSEND
                </span>
              </h1>
              <p
                className="fw-bold fst-italic my-4"
                style={{ fontSize: '0.8em' }}
              >
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium." (Bonorum et Malorum - 1875)
              </p>
              <Link
                to="/biographie"
                className="btn text-white fw-bold"
                style={{ backgroundColor: '#652c87' }}
              >
                Qui suis-je.?
              </Link>
            </div>
          </div>
        </div>
        <DIV className="row"></DIV>
      </section>
    </React.Fragment>
  )
}

export default Accueil

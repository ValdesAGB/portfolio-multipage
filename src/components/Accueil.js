import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cover from '../assets/iover.png'

function Accueil() {
  const DivOrange = styled.div`
    background-color: #f9a03f;

    @media (min-width: 321px) and (max-width: 425px) {
      height: 450px;
    }

    @media (min-width: 768px) and (max-width: 992px) {
      height: 200px;
    }

    @media (min-width: 993px) and (max-width: 1024px) {
      height: 200px;
    }
    @media (min-width: 1025px) and (max-width: 1439px) {
      height: 300px;
    }
    @media (min-width: 1440px) {
      height: 300px;
    }
    @media (min-width: 2560px) {
      height: 590px;
    }
    height: 320px;
  `

  const DivViolet = styled.div`
    @media (min-width: 768px) and (max-width: 992px) {
      height: 200px;
    }

    @media (min-width: 993px) and (max-width: 1024px) {
      height: 250px;
    }
    @media (min-width: 1025px) and (max-width: 1439px) {
      height: 300px;
    }
    @media (min-width: 1440px) {
      height: 350px;
    }
    @media (min-width: 2560px) {
      height: 620px;
    }
    height: 300px;
  `

  return (
    <React.Fragment>
      <section>
        <DivViolet
          className="row justify-content-center"
          style={{ backgroundColor: '#652c87' }}
        >
          <div className="row col-10 align-items-center ">
            <div className="col-12 col-md-6 col-lg-5 p-3">
              <h1 className="text-white d-md-none text-center">
                Lucy{' '}
                <span className="fw-bold " style={{ fontSize: '1.5em' }}>
                  TOWNSEND
                </span>
              </h1>
              <img src={cover} alt="1" className="w-100" />
            </div>
            <div className="col-md-6">
              <h1 className="text-white d-none d-md-block">
                Lucy{' '}
                <span className="fw-bold" style={{ fontSize: '1.5em' }}>
                  TOWNSEND
                </span>
              </h1>
              <p
                className="fw-bold fst-italic my-4 text-center text-md-start"
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
        </DivViolet>
        <DivOrange className="row"></DivOrange>
      </section>
    </React.Fragment>
  )
}

export default Accueil

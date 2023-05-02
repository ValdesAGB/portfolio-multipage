import React, { useState } from 'react'
import { projetsPerso, projetsPro } from '../data'
import styled from 'styled-components'
import Avis from './Avis'

function Porfolio() {
  const [selectedElement, setSelectedElement] = useState(null)

  function findElementById(array, id) {
    setSelectedElement(array.find((element) => element.id === id))
  }

  const Modal = () => {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedElement && selectedElement.title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body row">
              <div className="col">
                <img
                  src={selectedElement && selectedElement.cover}
                  alt="1"
                  className="w-100"
                />
              </div>
              <p className="col-12">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const Card = ({ array, id, title, cover }) => {
    const DIV = styled.div`
      &:hover {
        cursor: pointer;
      }
    `
    return (
      <DIV
        className="card col-12 col-md-5 m-3"
        onClick={() => findElementById(array, id)}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={cover} className="card-img-top" alt="1" />
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
        </div>
      </DIV>
    )
  }

  return (
    <React.Fragment>
      <section>
        <div className="my-5">
          <h3 className="fw-bold text-center text-decoration-underline">
            Bienvenue sur mon{' '}
            <span style={{ color: '#652c87' }}>PORTFOLIO</span>
          </h3>
          <p
            className="text-center row p-5 text-white my-3"
            style={{ backgroundColor: '#652c87' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            <br />
            <br />
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt
          </p>
        </div>

        <div className="my-5">
          <h3 className="fw-bold text-center fst-italic">
            Projets <span style={{ color: '#652c87' }}>Professionels</span>
          </h3>
          <div className="row align-items-center justify-content-center">
            {projetsPro.map(({ id, title, cover }) => (
              <Card
                key={id}
                array={projetsPro}
                id={id}
                title={title}
                cover={cover}
              />
            ))}
          </div>
          <div>{Modal()}</div>
        </div>

        <div>
          <h3 className="fw-bold text-center fst-italic">
            Projets <span style={{ color: '#652c87' }}>Personnels</span>
          </h3>
          <div className="row align-items-center justify-content-center">
            {projetsPerso.map(({ id, title, cover }) => (
              <Card
                key={id}
                array={projetsPerso}
                id={id}
                title={title}
                cover={cover}
              />
            ))}
          </div>
          <div>{Modal()}</div>
        </div>

        <Avis />
      </section>
    </React.Fragment>
  )
}

export default Porfolio

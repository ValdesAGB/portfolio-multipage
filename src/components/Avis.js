import React, { useState } from 'react'
import { avis } from '../data'
import { Link } from 'react-router-dom'

function Avis() {
  const pathActuel = window.location.pathname

  const card = (id, cover, name) => {
    return (
      <div class="card col-4 m-2" style={{ border: 'solid 2px #652c87' }}>
        <div class="card-body">
          <div className="row align-items-center">
            <h5 class="card-title col-8">{name}</h5>
            <div className="col">
              <img
                src={cover}
                alt="1"
                className="w-100"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  border: 'solid 2px #652c87',
                  boxShadow: '2px 2px 10px #652c87',
                }}
              />
            </div>
          </div>
          <p class="card-text fst-italic mt-2">
            "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate."
          </p>
        </div>
      </div>
    )
  }

  const [all, setAll] = useState(3)

  return (
    <React.Fragment>
      <section className="container mt-5">
        <h3 className="text-center fw-bold text-decoration-underline">
          <span style={{ color: '#652c87' }}>AVIS</span> ET{' '}
          <span style={{ color: '#652c87' }}>RETOUR </span>CLIENTS
        </h3>
        <div className="row justify-content-center">
          {pathActuel === '/'
            ? avis
                .slice(0, 2)
                .map(({ id, cover, name }) => card(id, cover, name))
            : avis
                .slice(0, all)
                .map(({ id, cover, name }) => card(id, cover, name))}
        </div>
        <div className="row justify-content-end mx-5">
          {pathActuel === '/' ? (
            <Link
              to="/biographie"
              className="btn col-3 fw-bold border-0 text-white"
              style={{ backgroundColor: ' #652c87' }}
            >
              Visitez mes services et avis clients
            </Link>
          ) : all < avis.length ? (
            <button
              className="btn col-2 "
              style={{ border: 'solid 2px #652c87' }}
              onClick={() => setAll(avis.length)}
            >
              Voir plus
            </button>
          ) : all === avis.length ? (
            <button
              className="btn col-2 "
              style={{ border: 'solid 2px #652c87' }}
              onClick={() => setAll(3)}
            >
              Voir moins
            </button>
          ) : null}
        </div>
      </section>
    </React.Fragment>
  )
}

export default Avis

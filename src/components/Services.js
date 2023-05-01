import React from 'react'
import { services } from '../data'

function Services() {
  const Card = (id, icone, title) => {
    return (
      <div class="card col-5 m-2 border-0" key={id}>
        <div class="card-body">
          <h5 class="card-title">
            <i className={`fs-1 ${icone}`} style={{ color: '#652c87' }} />
          </h5>
          <h6 class="card-subtitle mb-2 text-body-secondary fs-3">{title}</h6>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <section>
        <h1 className="fw-bold text-center">
          Mes <span style={{ color: '#652c87' }}>services</span>
        </h1>
        <div>
          <i className=""></i>
          <div className="row justify-content-center">
            {services.map(({ id, icone, title }) => Card(id, icone, title))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Services

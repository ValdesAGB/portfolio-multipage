import React from 'react'
import { contact } from '../../data'

function Contact() {
  const card = (id, icone, text, number) => {
    return (
      <div
        key={id}
        className="card text-center col-12 col-md-6 col-lg-4 m-2 "
        style={{
          border: 'solid 2px #652c87',
        }}
      >
        <div className="card-body ">
          <h5 className="card-title">
            <i className={`fs-3 bi ${icone}`} style={{ color: '#652c87' }} />
          </h5>
          <p className="card-text  my-4 ">{text}</p>
          <h6 className="card-subtitle mb-2 fs-2 text-body-secondary">
            {number}
          </h6>
        </div>
      </div>
    )
  }

  return (
    <React.Fragment>
      <section className="my-5">
        <div className="row">
          <h3 className="fw-bold text-center">
            Vous avez besoin de <span style={{ color: '#652c87' }}>moi</span>
            .?
          </h3>
          <p
            className="p-5 text-white mt-3 text-center text-md-start"
            style={{ backgroundColor: '#652c87' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center my-5">
            <div className="row col-12 col-md justify-content-center mb-5 mb-md-0">
              <h2 className="text-center" style={{ color: '#652c87' }}>
                Coordonnées
              </h2>
              {contact.map(({ id, icone, text, number }) =>
                card(id, icone, text, number)
              )}
            </div>
            <hr className="d-lg-none " />
            <div className="col-12 col-md ">
              <form>
                <div className="mb-3 row ">
                  <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nom*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      style={{ border: 'solid 2px #652c87' }}
                    />
                  </div>

                  <div className="col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Mail*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      style={{ border: 'solid 2px #652c87' }}
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Sujet
                  </label>
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="10"
                    style={{ border: 'solid 2px #652c87' }}
                  ></textarea>
                </div>
                <div className="mb-3">* important</div>
                <button
                  type="submit"
                  className="btn border-0 text-white fw-bold"
                  onClick={(e) => {
                    e.preventDefault()
                    alert('votre message est envoyé.')
                  }}
                  style={{ backgroundColor: '#652c87' }}
                >
                  Envoyé
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact

import React from 'react'
import { Link } from 'react-router-dom'

function Biographie() {
  const title = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit`
  return (
    <React.Fragment>
      <section className="my-5 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg mt-lg-5">
              <p
                className="fs-1 text-white p-3 p-md-5 rounded-5 mt-5"
                style={{
                  backgroundColor: '#652c87',
                }}
              >
                {title.toUpperCase()}
              </p>
            </div>

            <div className="col-12 col-md-8 col-lg ">
              <img
                src="https://cotepub.com/wp-content/uploads/2019/02/design-web-creation-graphisme-site-web-1024x768.jpg"
                className="d-block w-100  rounded-5"
                alt="1"
              />

              <Link
                to="/portfolio"
                className="btn text-white fw-bold mt-3 col-6 col-md-4 p-3"
                style={{ backgroundColor: '#652c87' }}
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Biographie

import React from 'react'
import { Link } from 'react-router-dom'

function Biographie() {
  const title = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit`
  return (
    <React.Fragment>
      <section className=" p-5">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <p
                className="text-white p-5 rounded-5 mt-5"
                style={{
                  fontSize: '2.5em',
                  backgroundColor: '#652c87',
                }}
              >
                {title.toUpperCase()}
              </p>
            </div>
            <div className="col">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-interval="500"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://cotepub.com/wp-content/uploads/2019/02/design-web-creation-graphisme-site-web-1024x768.jpg"
                      class="d-block w-100  rounded-5"
                      alt="1"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://img.freepik.com/vecteurs-premium/agence-voyages-tourisme-modele-presentation-powerpoint_284754-648.jpg?w=740"
                      class="d-block w-100  rounded-5"
                      alt="2"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://elements-cover-images-0.imgix.net/3df2f740-3493-4fb4-a589-2286ea4b2ebc?auto=compress%2Cformat&fit=max&w=1019&s=870f55f0f9b18aca609dff52518c6b9e"
                      class="d-block w-100  rounded-5"
                      alt="3"
                    />
                  </div>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="btn text-white fw-bold mt-3 col-4 p-3"
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

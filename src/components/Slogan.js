import React from 'react'
import 'animate.css'
import { skills } from '../data'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Slogan() {
  const Image1 = styled.div`
    @media (max-width: 576px) {
      margin: 0 0 0 -10px;
    }
  `

  const Image2 = styled.div`
    @media (max-width: 576px) {
      margin: -20px 0 0 10px;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      margin: 0 0 0 -10px;
    }

    @media (min-width: 1200px) {
      margin: 0 0 -500px 0;
    }
  `

  const Text = styled.div`
    @media (max-width: 576px) {
      margin: 20px 0 0 0;
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      margin: -150px 0 0 50px;
    }

    @media (min-width: 1200px) {
      margin: -50px 0 0 0;
    }
  `

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <Image1 className="col-12 col-md-6 col-xl-5">
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/99060715fe2d5fb49126589a/rtttt.jpg"
                alt="1"
                className="w-100"
              />
            </Image1>

            <Image2 className="col-12 col-md-6 col-xl-4">
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f45bc3d373d1599b80fc620f/fff-min.jpg?version="
                alt="1"
                className="w-100"
              />
            </Image2>

            <Text className="col-12 col-md-6 col-xl-5 bg-black  rounded-5 p-5 text-white">
              <div>
                <h5 className="d-lg-none">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit
                </h5>
                <h1 className="d-none d-lg-block">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit
                </h1>
              </div>
              <ul className="list-unstyled my-3">
                {skills.map(({ id, text }) => (
                  <li key={id} className="mb-2">
                    <i className="bi bi-check2 ">
                      <span className="mx-2">{text}</span>
                    </i>
                  </li>
                ))}
              </ul>
            </Text>
          </div>
          <div className=" text-center my-2">
            <Link
              to="/contact"
              id="boutoncontact"
              className={`btn  rounded-5 fw-bold my-2 `}
              style={{ border: 'solid 5px #652c87' }}
            >
              Contactez-moi
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Slogan

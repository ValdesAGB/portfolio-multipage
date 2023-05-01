import React, { useEffect, useState } from 'react'
import 'animate.css'
import { skills } from '../data'
import { Link } from 'react-router-dom'

function Slogan() {
  const [isAnimated, setIsAnimated] = useState(false)
  const startAnimation = () => {
    setInterval(() => {
      setIsAnimated(!isAnimated)
    }, 2000)
  }
  useEffect(() => {
    startAnimation()
  }, [isAnimated])

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row justify-content-end ">
            <div className="col-6 bg-black  rounded-5 p-5 text-white">
              <h1>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              </h1>
              <ul className="list-unstyled my-3">
                {skills.map(({ id, text }) => (
                  <li key={id} className="mb-2">
                    <i class="bi bi-check2 ">
                      <span className="mx-2">{text}</span>
                    </i>
                  </li>
                ))}
              </ul>
            </div>
            <div className="row justify-content-end  ">
              <Link
                to="/contact"
                id="boutoncontact"
                className={`btn col-2 rounded-5 fw-bold my-2 animate__animated ${
                  isAnimated ? ' animate__rubberBand' : ''
                }`}
                style={{ border: 'solid 5px #652c87', marginLeft: '-150px' }}
              >
                Contactez-moi
              </Link>
            </div>
          </div>

          <div className="row" style={{ marginTop: '-250px' }}>
            <div className="col-6">
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/99060715fe2d5fb49126589a/rtttt.jpg"
                alt="1"
                className="w-100"
              />
            </div>
            <div
              className="col-4 "
              style={{ marginTop: '150px', marginLeft: '-100px' }}
            >
              <img
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/f45bc3d373d1599b80fc620f/fff-min.jpg?version="
                alt="1"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Slogan

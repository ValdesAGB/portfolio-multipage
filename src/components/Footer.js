import React, { useState } from 'react'
import { networks } from '../data'
import styled from 'styled-components'
import Modal from './Modal'
import { Link } from 'react-router-dom'

function Footer() {
  const Networks = styled.i`
    &:hover {
      cursor: pointer;
    }
  `
  const [net, setNet] = useState(null)

  const text = `Ce bouton vous mettra en relation avec le réseau "${net}" du sujet`

  return (
    <React.Fragment>
      <footer className="mt-5">
        <div className="row bg-secondary text-white p-4 text-center text-md-start">
          <div className="col-12 col-md my-3 my-md-0">
            <Link
              to="/"
              className="fw-bolder text-white text-decoration-none fs-4"
            >
              <span
                style={{ backgroundColor: '#652c87' }}
                className="p-2 rounded-2 text-white text-decoration-none"
              >
                LUCY
              </span>{' '}
              TOWNSEND
            </Link>
          </div>
          <div className="col-12 col-md text-md-end mt-3 mt-md-0">
            {networks.map(({ id, icone }) => (
              <span key={id} className="mx-2 ">
                <Networks
                  type="button"
                  className={`fs-4 bi  ${icone}`}
                  data-bs-toggle="modal"
                  data-bs-target="#networks"
                  onClick={() => setNet(id)}
                ></Networks>
              </span>
            ))}
            <Modal text={text} />
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer

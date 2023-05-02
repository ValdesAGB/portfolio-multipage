import React from 'react'
import { motOrdre } from '../../data'
import Avis from '../../components/Avis'
import Services from '../../components/Services'

function Biographie() {
  const card = (id, icone, text, number) => {
    return (
      <div
        key={id}
        className="card text-center col-12 col-md m-2"
        style={{
          border: 'solid 2px #652c87',
          boxShadow: '15px 15px 15px #652c87',
        }}
      >
        <div className="card-body">
          <h5 className="card-title">
            <i className={`fs-1 bi ${icone}`} />
          </h5>
          <p
            className="card-text  my-4 fs-3 fw-bold"
            style={{ color: '#652c87' }}
          >
            {text}
          </p>
          <h6 className="card-subtitle mb-2 fs-2 text-body-secondary">
            {number}
          </h6>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <section>
        <div className="">
          <div
            className="row text-white mb-5 p-0 p-lg-3 justify-content-center "
            style={{ backgroundColor: '#652c87' }}
          >
            <div className="col-12 row align-items-center  justify-content-center my-5">
              <p className="col-12 col-md col-lg-6 mb-5 mb-md-0 ">
                <span
                  className="fw-bold"
                  style={{
                    fontSize: '8em',
                    fontFamily: 'lobster',
                  }}
                >
                  L
                </span>
                orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lot labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip rem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt.
              </p>
              <div className="col-12 col-md col-lg-4 ">
                <img
                  src="https://www.paprika-shopping.be/dw/image/v2/ABCC_PRD/on/demandware.static/-/Sites-paprika-master-catalog/default/dwd122ee99/Assets/8YT251201_69_2_5_WM/withmodel/b/1/d/4/b1d4f2dc4dbce2c55a5d149ddb12ff4cc70b6168_8YT251201_69_2_5.jpg?sw=451&sh=660"
                  alt="2"
                  className="w-100 rounded-5"
                />
              </div>
            </div>

            <div className="col-12 row justify-content-center align-items-center">
              <div className="col-12 col-md col-lg-4 order-1 order-md-0 mb-5 ">
                <img
                  src="https://www.paprika-shopping.be/dw/image/v2/ABCC_PRD/on/demandware.static/-/Sites-paprika-master-catalog/default/dw00ff2db9/Assets/8YT251201_69_2_1_WM/withmodel/6/d/3/4/6d344a609e652b1b4eb1d49721544a740c5e163f_8YT251201_69_2_1.jpg?sw=451&sh=660"
                  alt="2"
                  className="w-100 rounded-5"
                />
              </div>
              <p className="col-12 col-md col-lg-6 mb-5 mb-md-0 order- order-md-1">
                Ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <Services />
        <Avis />
        <div className="container">
          <div className="row justify-content-center my-5">
            <h3 className="fw-bold text-center mb-4">
              Mes <span style={{ color: '#652c87' }}>mots d'ordre </span>
            </h3>
            {motOrdre.map(({ id, icone, text, number }) =>
              card(id, icone, text, number)
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Biographie

import React from 'react'

function Modal({ text }) {
  return (
    <React.Fragment>
      <section>
        <div
          className="modal fade"
          id="networks"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-dark text-center">{text}</div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Modal

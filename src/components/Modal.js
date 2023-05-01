import React from 'react'

function Modal({ text }) {
  return (
    <React.Fragment>
      <section>
        <div
          class="modal fade"
          id="networks"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body text-dark text-center">{text}</div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Modal

import React from "react";

import "./Modal.css";

const Modal = (props) => (
  <>
    {props.isOpen && (
      <>
        {props.backdrop && <div className="backdrop"></div>}
        <div className={`modal ${props.darkTheme ? "darkTheme" : ""}`}>
          {props.crossClose && (
            <section className="modal-cross-close">
              <button className="btn" onClick={props.onClose}>
                ✖
              </button>
            </section>
          )}
          <section className="modal-content">{props.children}</section>

          {props.btnClose && (
            <section className="modal-btn-close">
              <button className="btn" onClick={props.onClose}>
                Close
              </button>
            </section>
          )}
        </div>
      </>
    )}
  </>
);

export default Modal;

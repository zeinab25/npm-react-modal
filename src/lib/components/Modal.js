import React from "react";

import "./Modal.css";

const Modal = (props) => (
  <>
    {props.backdrop && <div className="backdrop"></div>}
    <div className= {`modal ${props.darkTheme? 'darkTheme':''}`}>
    <section className="modal-close">
      <button className="btn" onClick={props.onCancel}>✖</button></section>
      <section className="modal-content">{props.children}</section>

      {props.canCancel && (
        <section className="modal-cancel">
          <button className="btn" onClick={props.onCancel}>
            Cancel
          </button>
        </section>
      )}
   
    </div>
  </>
);

export default Modal;

import React, { useState } from "react";
import "./App.css";
import Modal from "./lib/components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
 

  return (
    <>
      <main>
        <button className="btn-click" onClick={toggleModal}>
          CLICK ME
        </button>
        {isOpen && (
          <Modal backdrop canCancel onCancel={toggleModal}>
            <p>Success! 🥳</p>
          </Modal>
        )}
      </main>
    </>
  );
}

export default App;

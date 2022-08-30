import React, { useState } from "react";
import "./App.css";
import Modal from "./lib/components/Modal";

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);
 

  return (
    <>
      <main>
        <button className="btn-click" onClick={toggleModal}>
          CLICK ME
        </button>

          <Modal backdrop crossClose darkTheme onClose={toggleModal} isOpen={isOpenModal}>
            <p>Success! 🥳</p>
          </Modal>
      
      </main>
    </>
  );
}

export default App;

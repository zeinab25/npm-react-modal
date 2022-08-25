# Modal

## Install

Install using `npm install modal-zb`

## Usage

In a React app, use the Modal components:
import { Modal } from 'modal-zb'

## Modal props

backdrop : Backdrop option
darkTheme : Dark theme option
canCancel : Cancel button option
onCancel : Cancel button onclick function

## Exemple

```js
import React, { useState } from "react";
import { Modal } from "modal-zb";

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
```

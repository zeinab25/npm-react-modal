# Modal

## Install

Install using `npm install react-modal-zeinab`

## Usage

In a React app, use the Modal components:
`import { Modal } from 'react-modal-zeinab'`


## Modal props

| Name        | Description      
| ----------- | -----------      
| backdrop    | Boolean (optional)           
| darkTheme   | Boolean (optional)             
| btnClose    | Boolean (optional)           
| crossClose  | Boolean (optional)             
| onClose     | function              
| isOpen      | Boolean          


## Exemple

```js
import React, { useState } from "react";
import { Modal } from "react-modal-zeinab";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <main>
        <button className="btn-click" onClick={toggleModal}>
          CLICK ME
        </button>
     
          <Modal  isOpen={isOpenModal} backdrop crossClose onClose={toggleModal}>
            <p>Success! 🥳</p>
          </Modal>
        
      </main>
    </>
  );
}

export default App;
```

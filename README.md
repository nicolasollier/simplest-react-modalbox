## Installation

To install the `simplest-react-modalbox` package, you need to have Node.js and npm (Node Package Manager) installed on your machine. Run the following command in your project directory:

```bash
npm install simplest-react-modalbox
```

## Basic Usage

Here is a simple example of how to use the `simplest-react-modalbox` in your React application:

1. **Import the Module:**

   Import the `Modal` component from the `simplest-react-modalbox` package:

   ```javascript
   import Modal from 'simplest-react-modalbox';
   ```

2. **Add Modal to Your Component:**

   Use the `Modal` component in your React component. You can control the visibility of the modal using a state variable:

   ```javascript
   import React, { useState } from 'react';
   import Modal from 'simplest-react-modalbox';

   const App = () => {
     const [modalOpen, setModalOpen] = useState(false);

     const toggleModal = () => {
       setModalOpen(!modalOpen);
     };

     return (
       <div>
         <button onClick={toggleModal}>Open Modal</button>
         <Modal 
           title="Modal Title"
           text="This is a simple modal box."
           isOpen={modalOpen}
           customStyles={{
             modal: { backgroundColor: 'rgba(0,0,0,0.5)' },
             content: { padding: '20px', borderRadius: '10px' },
             close: { fontSize: '20px', cursor: 'pointer' }
           }}
         />
       </div>
     );
   };

   export default App;
   ```

3. **Styling the Modal:**

   The `simplest-react-modalbox` comes with basic styling, but you can customize it according to your needs.

## Props

The `Modal` component accepts the following props:

- `title` (string): The title text to be displayed in the modal.
- `text` (string): The main content text to be displayed in the modal.
- `isOpen` (boolean): Controls the visibility of the modal.
- `customStyles` (object): An optional object to apply custom styles to the modal, its content, and the close button. The object can have the following properties:
  - `modal` (React.CSSProperties): Styles for the modal background.
  - `content` (React.CSSProperties): Styles for the modal content.
  - `close` (React.CSSProperties): Styles for the close button.

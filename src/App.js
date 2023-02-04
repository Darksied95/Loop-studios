import React from 'react';
import { Header, Modal, Hero, Gallery, Footer } from './components'
import './App.css'
function App() {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="App">
      <Header setModalState={setModal} />
      <Modal modalState={modal} setModalState={setModal} />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import { useState } from 'react';




function App() {
  const [count, setcount]=useState(0)
  function handleClick(){
    setcount(count+1)
  }
  return (
    <div className="App">
      <Header count={count}/>
      <Section handleClick={handleClick}/>
      <Footer />
    </div>
  );
}

export default App;

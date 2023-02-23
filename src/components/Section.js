import {Routes, Route} from 'react-router-dom';
import Home from "./Home"
import Contact from './Contact';
import Product from './Product';


function Section(props) {
    return (
        <Routes>
          <Route path="/" element={<Home handleClick={props.handleClick} minclick={props.minclick}/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/product/:id" element={<Product />}/>
        </Routes>
    );
  }
  
  export default Section;
import {Routes, Route} from 'react-router-dom';
import Home from "./Home"
import Contact from './Contact';
import Product from './Product';



function Section() {
    return (
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/id" element={<Product />}/>
        </Routes>
    );
  }
  
  export default Section;
import React from 'react';

// import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
      <Products heading='Choose what you want to do today with your hair' data={productData}/>
      <Feature/>
      <Products heading='Art your face' data={productDataTwo}/>
      <Footer/>
    </Router>
  );
}

export default App;

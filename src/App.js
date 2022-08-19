
import './App.css';
//import Navbar from './containers/navbar/Navbar';
import ProductScreen from './containers/products/ProductScreen';
//import {BrowserRouter as Routes, Route} from 'react-router-dom';
import CartScreen from './containers/cart/CartScreen';
//as the cart sceen appears, i need to work out the routings.

function App() {
  return (
    
      <div className="App">
        
          <ProductScreen />
          <CartScreen/>
      </div>
    
)}


export default App;

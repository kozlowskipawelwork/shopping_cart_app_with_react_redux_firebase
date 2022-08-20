
import './App.css';
import Navbar from './containers/navbar/Navbar';
import ProductScreen from './containers/products/ProductScreen';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
  } from "react-router-dom";
import CartScreen from './containers/cart/CartScreen';
//as the cart sceen appears, i need to work out the routings.
/*<CartScreen/>*/ 
function App() {
  return (
    
      <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/products" element={<ProductScreen />} /> 
                <Route path="/cart" element={<CartScreen />} />  
            </Switch>
        </Router>
        
        
         
      </div>
    
)}


export default App;

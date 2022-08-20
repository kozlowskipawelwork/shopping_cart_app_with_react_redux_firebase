
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
<<<<<<< HEAD
/*<CartScreen/>*/ 
=======
/*<CartScreen/>*/
>>>>>>> 082989cd9ea415129ce0fc9c6597da82542a84c1
function App() {
  return (
    
      <div className="App">
<<<<<<< HEAD
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/products" element={<ProductScreen />} /> 
                <Route path="/cart" element={<CartScreen />} />  
            </Switch>
        </Router>
        
        
         
=======
        <ProductScreen />
        
        
          
>>>>>>> 082989cd9ea415129ce0fc9c6597da82542a84c1
      </div>
    
)}


export default App;


import './App.css';
import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Routes, Route,  useNavigate } from "react-router-dom";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Home } from './Home';
import { ProductList } from './ProductList';
import { ContactUS } from './ContactUS';
import { Login } from './Login';
import { Register } from './Register';
import { Cart } from './Cart';





function App() {


  const navigate = useNavigate();


  return (
    <div className="App">


      <AppBar position="static" color="secondary">
        <Toolbar>
            San 
            Rental
            <Button color="inherit"  
            onClick={()=> navigate("/")} >Home</Button>
            <Button color="inherit"  
            onClick={()=> navigate("/Product")} >Product</Button>
            <Button color="inherit"  
            onClick={()=> navigate("/ContactUs")} >ContactUS</Button>
            <Button color="inherit"  style={{ marginLeft: "auto" }}
            onClick={()=> navigate("/Login")} >Login</Button>
            <Button color="inherit"  
            onClick={()=> navigate("/Register")} >Register</Button>
            <Button color="inherit"  
            onClick={()=> navigate("/Cart")} >
              <ShoppingCartCheckoutIcon />cart
              </Button>
        </Toolbar>
      </AppBar>

      <div>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<ProductList />} />
          <Route path="/ContactUs" element={<ContactUS />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />

        </Routes>
      </div>
  

    </div>
  );
}

function Payment() {

  

  return(
    <div>

      
      Razerpayemnt
    </div>
  )
}

export default App;

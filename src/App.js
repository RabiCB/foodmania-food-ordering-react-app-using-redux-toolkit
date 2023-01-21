import Home from "./Components/Home"
import './App.css';
import Contactform from "./Contact/Contactform"
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Cart from "./Components/Cart";
import Singleitem from "./Singleitem/Singleitem"
import Order from "./Contact/Order";
import AuthProvider from "./AuthContext/Authcontext";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
function App() {
  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/contactform" element={<Contactform/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/singleitem/:Id" element={<Singleitem/>}/>
        <Route path="/order/:Id" element={<Order/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

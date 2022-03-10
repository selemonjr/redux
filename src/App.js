import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {auth} from "./firebase/firebaseConfig.js";
import {useState} from "react";
import Login from "./pages/Login";
const App = () => {
  const [signedIn,setSignedIn] = useState(false);
      // firebase authentication listener
      auth.onAuthStateChanged((user)=>{
        if(user){
          setSignedIn(true);
        }else{
          setSignedIn(false);
        }
      });

      const protectedRoute = (component) => {
        if(signedIn === true){
           return component
        }
  
        return <Login/>
      }
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={protectedRoute(<Home/>)}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  )
}
export default App;
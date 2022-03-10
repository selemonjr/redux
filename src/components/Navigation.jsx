import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {auth} from "../firebase/firebaseConfig"
import {useState} from  "react";
import "../App.css";
const Navigation = () => {
    const cart = useSelector(state => state.cartItems);
    console.log(cart.cartItems.length);
    const [signedIn,setSignedIn] = useState(false);
    // firebase authentication listener
    auth.onAuthStateChanged((user)=>{
      if(user){
        setSignedIn(true);
      }else{
        setSignedIn(false);
      }
    });
    return (
        <div>
            <nav>
            <div>
                <Link to="/"> <h2 className="nav_logo font-bold text-lg">Redux Store</h2></Link>
                </div>
              {!signedIn && (<>
                <div>
                   <Link to="/login"><h2 className="nav_logo font-bold">Login</h2></Link>
                </div></>)}
               {signedIn && (<> <div>
                   <h2>Item(s) in Cart: {cart.cartItems.length}</h2>
                </div>
                <div>
                    <Link to ="/cart"><h4 className="bag"><i class='bx bx-shopping-bag'></i></h4></Link>
                </div></>)}
            </nav>
        </div>
    )
}
export default Navigation;
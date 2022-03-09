import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
const Navigation = () => {
    // const cart = useSelector(state => state.cartItems);
    // console.log(cart.cartItems.length)
    return (
        <div>
            <nav>
                <div>
                   <Link to="/"> <h2 className="nav_logo">Redux Store</h2></Link>
                </div>
                <div>
                   {/* <h2>Item(s) in Cart: {cart.cartItems.length}</h2> */}
                </div>
                <div>
                    <Link to ="/cart"><h4 className="bag"><i class='bx bx-shopping-bag'></i></h4></Link>
                </div>
            </nav>
        </div>
    )
}
export default Navigation;
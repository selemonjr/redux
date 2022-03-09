import { useSelector,useDispatch } from "react-redux";
import {cartTotal,removeFromCart,clearCart,decreaseCart,addToCart} from "../features/cartSlice";
import { useEffect } from "react";
const Cart = () => {
    const cart = useSelector(state => state.cartItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(cartTotal())
    },[cart,dispatch]);
    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    };
    const handleDecreaseCart = (item) => {
        dispatch(decreaseCart(item))
    };
    const handleRemoveCart = (item) => {
        dispatch(removeFromCart(item))
    };
    const handleClearCart = (item) => {
        dispatch(clearCart())
    }
    return (
        <div>
            <div className="cartHeader">
                <h2 className="cartTitle">Your Cart</h2>
            </div>
            <div>
            {cart.cartItems.length > 0 ? (<>
                        {cart.cartItems.map((item) => {
                            const { price, title, image, id,cartQuantity } = item;
                            return (
                                <div key={id} className="cartFlex">
                                    <img className="cartImage" src={image} alt={title} />
                                    <h4 className="cartTitle">{title}</h4>
                                    <h4 className="cartPrice">Price:${price}</h4>
                                    <div className="cartQuantity">
                                        <button className="buttonEl" onClick={() => handleDecreaseCart(item)}>-</button>
                                        <h3>{cartQuantity}</h3>
                                        <button className="buttonEl" onClick={() => handleAddToCart(item)}>+</button>
                                    </div>
                                    <button className="cartButton" onClick={() => handleRemoveCart(item)}>Remove</button>
                                </div>
                            );
                        })}<div className="cartTotal">
                        <h2>Total : ${cart.cartTotalAmount}</h2>
                    </div>
                    <div>
                        <button onClick={() => handleClearCart()}>Clear Cart</button>
                    </div>
                    </>) : (
                        <div className="cartEmpty">
                            <h2>Your Cart Is Empty...</h2>
                        </div>
                    )}
            </div>
        </div>
    )
}
export default Cart;
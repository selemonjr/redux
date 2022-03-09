import {useDispatch} from "react-redux";
import {useGetAllProductsQuery} from "../features/productsApi";
const Home = () => {
    const dispatch = useDispatch();
    const {data,error,isLoading} = useGetAllProductsQuery();
    console.log(data,error,isLoading)
    const handleAddToCart = () => {
        dispatch()
    };
    if(isLoading) {
        return (
            <>
            <h2 className="isLoading">Loading....</h2>
            </>
        )
    };

    if(error) {
        return (
            <>
            <h2 className="error">Error...</h2>
            </>
        )
    }
    return (
        <>
         <div>
            <div>
                <h2 className="productsHeader">Products Available</h2>
                <div className="productContainer">
                    {data?.map((product) => {
                        const {id,title,price,image} = product;
                        return (
                            <div key={id}>
                                <div>
                                    <div className="productDesc">
                                        <img className="productImage" src={image} alt={title}/>
                                        <h3 className="productTitle">{title.slice(0,27)}</h3>
                                        <h4 className="productPrice">Price: ${price}</h4>
                                        <div  className="productButton">
                                        <button onClick={() =>  handleAddToCart(product)}>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
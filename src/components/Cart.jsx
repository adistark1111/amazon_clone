import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { updateCart } from '../redux/action';

const Cart = () => {
    // const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartData); //Get cart data from Redux
    // const [localCartData, setLocalCartData] = React.useState(cartData); // Local state
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    // const amount = localCartData.reduce((total, item) => total + item.price * item.quantity, 0);
    console.warn(amount)

    // useEffect(() => {
    //     // Sync local state with Redux state whenever it changes
    //     setLocalCartData(cartData);
    //   }, [cartData]);

   
    // const increaseQuantity = (key) => {
    //     setLocalCartData((prevData) =>
    //       prevData.map((item) =>
    //         item.key === key
    //           ? { ...item, quantity: item.quantity + 1 } // Increase quantity
    //           : item
    //       )
    //     );
    //     // Update Redux store
    // // dispatch({ type: 'UPDATE_CART', payload: localCartData });
    // dispatch(updateCart(prevData)); // Dispatch action to update Redux store
    //   };
    
    //   const decreaseQuantity = (key) => {
    //     setLocalCartData((prevData) =>
    //       prevData.map((item) =>
    //         item.key === key && item.quantity > 0
    //           ? { ...item, quantity: item.quantity - 1 } // Decrease quantity if greater than 0
    //           : item
    //       )
    //     );
    //     // Update Redux store
    // // dispatch({ type: 'UPDATE_CART', payload: localCartData });
    // dispatch(updateCart(prevData)); // Dispatch action to update Redux store
    //   };
    return (
        <div>
            <Link to="/" >Go to Products Link</Link>
            <h1>Cart Page</h1>
            <div className="cart-page-container">
                {/* className="cart-page-container" */}
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Product</td>
                            <td>Color</td>
                            <td>Price</td>
                            <td>Brand</td>
                            <td>Category</td>
                            <td>Quantity</td>
                        </tr>
                    </thead>
                    { // dispatch(updateCart(localCartData));

                       cartData.map((item) => <tr key={item.key}>
                            <td>{item.name}</td>
                            <td><img src={item.photo} className="box-img" style={{ width: '180px', height: '150px' }} alt="Image of Products" /></td>
                            
                            <td>{item.color}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>
                            <td>{item.category}</td>
                            <td>
              <button onClick={() => increaseQuantity(item.key)}>+</button>
              <td>{item.quantity}</td>
              <button onClick={() => decreaseQuantity(item.key)}>-</button>
            </td>
                        </tr>)
                    }
                </table>
                <div className="price-details">
                    {/* className="price-details" */}
                    <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                    <div className="adjust-price"><span>Discount</span><span>{amount / 10}</span></div>
                    <div className="adjust-price"><span>Tax</span><span>000</span></div>
                    <div className="adjust-price"><span>Total</span><span>{amount - (amount / 10)}</span></div>

                </div>
            </div>
        </div>
    )
}

export default Cart;
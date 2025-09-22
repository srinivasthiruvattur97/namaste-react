import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/store/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  function handleClearCart() {
    console.log("here");
    dispatch(clearCart());
  }

  return (
    <div className="text-center">
      <h1 className="font-bold m-4 p-4">Cart</h1>
      <button
        className="bg-black text-white rounded-md p-2 cursor-pointer"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <ItemList menuItems={cartItems} />
    </div>
  );
};

export default Cart;

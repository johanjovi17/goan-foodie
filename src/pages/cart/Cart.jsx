import { StoreContext } from "../../context/StoreContext";
import { MdDelete, MdCurrencyRupee } from "react-icons/md";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <div className="pt-20">
      <div className="cart-items pt-20 px-40 ">
        <div className="cart-items-title grid grid-cols-6 text-center justify-between border-b border-indigo-600 pb-3 ">
          <p className="text-indigo-600">Items</p>
          <p className="text-indigo-600">Title</p>
          <p className="text-indigo-600">Price</p>
          <p className="text-indigo-600">Quantity</p>
          <p className="text-indigo-600">Total</p>
          <p className="text-indigo-600">Remove</p>
        </div>

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={index}
                className="cart-items-item font-display py-3 grid grid-cols-6 gap-2 text-center items-center justify-between border-b border-slate-500"
              >
                <div className="cart-img flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className=" h-[60px] w-[60px]"
                  />
                </div>
                <p className="">{item.name} </p>
                <p className="items-center flex justify-center">
                  <MdCurrencyRupee className="text-sm" /> {item.price}
                </p>
                <p className="">{cartItems[item._id]}</p>
                <p className="items-center flex justify-center">
                  <MdCurrencyRupee className="text-sm" />
                  {item.price * cartItems[item._id]}
                </p>
                <p className=" flex items-center justify-center cursor-pointer">
                  <MdDelete
                    onClick={() => removeFromCart(item._id)}
                    className="text-2xl text-red-600  "
                  />
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom my-10 px-40">
        <div className="cart-total-section w-1/2 ">
          <h2 className="cart-total-title text-2xl font-bold mb-2">
            Cart Total
          </h2>
          <div className="cart-subtotal-container flex items-center justify-between py-2 border-b border-slate-300 text-slate-500">
            <p className="cart-subtotal">Subtotal</p>
            <p className="cart-subtotal-value flex items-center">
              <MdCurrencyRupee className="text-sm" />
              {getTotalCartAmount()}
            </p>
          </div>
          <div className="delivery-fee-container flex items-center justify-between py-2 border-b border-slate-300 text-slate-500">
            <p className="delivery-fee">Delivery Fee</p>
            <p className="delivery-fee-value flex items-center">
              <MdCurrencyRupee className="text-sm" />
              {getTotalCartAmount() === 0 ? 0 : 2}
            </p>
          </div>
          <div className="total-container flex items-center justify-between py-1 text-slate-500">
            <p className="total">Total</p>
            <p className="total-value flex items-center">
              <MdCurrencyRupee className="text-sm" />
              {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
            </p>
          </div>
        </div>
        <button className="cart-total-proceed-btn bg-indigo-600 rounded px-8 py-3 mt-2 text-white w-fit">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

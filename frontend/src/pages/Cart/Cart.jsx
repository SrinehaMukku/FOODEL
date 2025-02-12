import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button onClick={() => removeFromCart(item._id)} className='cross'>Remove</button>
                </div>
                <hr />
              </div>
            )
          }
        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${2}</p>
              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()+2}</b>
              </div>
              <hr/>
              <button onClick={()=>navigate('/place')}>PROCEED TO CHECKOUT</button>
            </div>
            </div>
            <div className="cart-promocode">
                <p>If any promo code,ENTER</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder='promo code'/>
                  <button>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Cart;

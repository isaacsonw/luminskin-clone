import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useContext,
} from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { GrFormClose } from 'react-icons/gr';

import { CartWrapper } from './styles';
import { formatter } from '../../helpers/currencyFormatter';
import { AppContext } from '../../AppContext/AppContext';
import {
  deleteFromCart,
  increamentItem,
  decreamentItem,
  toggleCart,
} from '../../redux/cart/cart.action';

export const Cart = forwardRef((props, ref) => {
  const [allCurrency, setAllCurrency] = useState([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const {
    cartItems: { cartItems, toggle },
  } = useSelector((state) => state);

  const { currency } = props;

  const { handleSetCurrency, currencyEnum } = useContext(AppContext);

  useEffect(() => {
    setAllCurrency(currencyEnum.currency);
  }, [currencyEnum]);

  useEffect(() => {
    const price = cartItems.map((item) => item.price * item.count);
    let sum = price.reduce(function (a, b) {
      return a + b;
    }, 0);
    setTotal(sum);
  }, [cartItems]);

  const handleSetCurrencyCart = (event) => {
    handleSetCurrency(event.target.value);
  };

  return (
    <CartWrapper open={toggle}>
      <div className="cart-overlay" onClick={() => dispatch(toggleCart())} />
      <div className="cart">
        <div onClick={() => dispatch(toggleCart())} className="close">
          <div className="close__btn">
            <MdKeyboardArrowRight size={20} />
          </div>
          <div className="close__text"> YOUR CART </div>
        </div>
        <div className="currency">
          <select onChange={handleSetCurrencyCart} name="" id="">
            {allCurrency ? (
              allCurrency.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))
            ) : (
              <option key="cur" value="CUR">
                CUR
              </option>
            )}
          </select>
        </div>
        <main>
          {cartItems.length === 0 ? (
            <div
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: 25,
                  opacity: 0.5,
                  fontStyle: 'italic',
                  color: 'chocolate',
                }}
              >
                No item in your cart
              </h1>
            </div>
          ) : (
            cartItems.map((item, idx, arr) => (
              <div key={item.title + idx} className="cartItems">
                <div className="top">
                  <h1>{item.title}</h1>
                  <GrFormClose
                    style={{ cursor: 'pointer' }}
                    size={20}
                    onClick={() => dispatch(deleteFromCart(item))}
                  />
                </div>
                <img src={item.image_url} alt={item.title} />
                <div className="price__counter">
                  <div className="counter">
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(decreamentItem(item))}
                    >
                      <span style={{ padding: 10 }}>-</span>
                    </div>
                    <div className="counter--value">
                      <span style={{ padding: 12 }}>{item.count}</span>
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => dispatch(increamentItem(item))}
                    >
                      <span style={{ padding: 10 }}>+</span>
                    </div>
                  </div>
                  <h1>
                    {currency} {formatter.format(item.price * item.count)}
                  </h1>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
      <div className="action__btn">
        <div className="total">
          <h3>Total</h3>
          <h3>
            {currency} {formatter.format(total)}
          </h3>
        </div>
        <button className="btn btn__1">
          MAKE THIS A SUBSCRIPTION (SAVE 20%)
        </button>
        <button className="btn btn__2">PROCEED TO CHECKOUT</button>
      </div>
    </CartWrapper>
  );
});

import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  useContext,
} from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { GrFormClose } from 'react-icons/gr';
import { CartWrapper } from './styles';
import { formatter } from '../../helpers/currencyFormatter';
import { AppContext } from '../../AppContext/AppContext';

export const Cart = forwardRef((props, ref) => {
  const [allCurrency, setAllCurrency] = useState([]);
  const { currency } = props;
  const {
    handleSetCurrency,
    refetch,
    productList,
    currencyEnum,
    cartItems,
    handleRemoveCartItem,
    total,
  } = useContext(AppContext);

  useEffect(() => {
    setAllCurrency(currencyEnum.currency);
  }, [currencyEnum]);

  const [value, setValue] = useState(false);

  const showCart = () => {
    setValue(true);
  };

  const hideCart = () => {
    setValue(false);
  };

  useImperativeHandle(ref, () => {
    return {
      showCart,
    };
  });

  const handleSetCurrencyCart = (event) => {
    handleSetCurrency(event.target.value);
    const product = productList.filter((item) => cartItems.price < item.price);
    console.log(product);
    refetch();
  };

  return (
    <CartWrapper open={value}>
      <div className="cart">
        <div onClick={hideCart} className="close">
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
          {cartItems.length === 0
            ? null
            : cartItems.map((item, idx, arr) => (
                <div key={item.title + idx} className="cartItems">
                  <div className="top">
                    <h1>{item.title}</h1>
                    <GrFormClose
                      size={20}
                      onClick={() => handleRemoveCartItem(item)}
                    />
                  </div>
                  <img src={item.image_url} alt={item.title} />
                  <div className="price__counter">
                    <div className="counter">
                      <div>
                        <span>-</span>
                      </div>
                      <div className="counter--value">
                        <span>{item.count}</span>
                      </div>
                      <div>
                        <span>+</span>
                      </div>
                    </div>
                    <h1>
                      {currency} {formatter.format(item.price * item.count)}
                    </h1>
                  </div>
                </div>
              ))}
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

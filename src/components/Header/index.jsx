import React, { useEffect, useState } from 'react';
import { HeaderWrapper } from './styles';
import LOGO from '../../assets/logo-20c2cb1d9d2bb6d2139d0e5cec3103bd.png';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../redux/cart/cart.action';
import { ReactComponent as CartIcon } from '../../assets/11.2 shopping-bag.svg.svg';

export const Header = () => {
  const lang = ['AR', 'FR', 'EN', 'ES', 'DE', 'HE', 'ID', 'ZH'];
  const titleHead = [
    {
      title: 'All Products',
      tag: 'A 360° look at Lumin',
    },
    {
      title: 'New Products',
      tag: 'Brand new upgrades for your routine',
    },
    {
      title: 'Sets',
      tag: 'Find your perfect routine',
    },
    {
      title: 'Skincare',
      tag: 'Unlock your full face potential',
    },
    {
      title: 'Hair & Body Care',
      tag: 'Lather up with the good stuff',
    },
  ];
  const [scrolled, setScrolled] = useState(false);
  const [titleHeader, setTitle] = useState('All Products');
  const [titleHeaderTag, setTitleTag] = useState('All Products');
  const [itemCount, setCount] = useState('All Products');

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartItems);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const tagLine = (text) => {
    titleHead.map(({ title, tag }) => {
      if (text === title) {
        setTitleTag(tag);
      }
    });
  };

  useEffect(() => {
    let totalItemCount = cartItems
      .map((item) => item.count)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
    setCount(totalItemCount);
  }, [cartItems]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });
  useEffect(() => {
    tagLine(titleHeader);
  });
  let navbarClasses = ['top-header'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <HeaderWrapper>
      <div className={navbarClasses.join(' ')}>
        <img src={`${LOGO}`} alt="logo" />

        <div className="nav-items">
          <ul>
            <li>Shop</li>
            <li>Help</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="filters">
          <ul>
            <li>Account</li>
            <li onClick={() => dispatch(toggleCart())}>
              <CartIcon style={{ width: 32, height: 32, fill: 'red' }} />
              <div
                style={{
                  fontSize: 16,
                  color: itemCount ? 'green' : 'red',
                  fontWeight: '500',
                  borderRadius: 200,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 25,
                }}
              >
                {itemCount}
              </div>
            </li>
            <li>
              <select name="lang" id="lang">
                {lang.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </div>
      <div className="search-section">
        <div className="title">
          <div>
            <h1>{titleHeader}</h1>
            <p>{titleHeaderTag}</p>
          </div>
          <select
            name="lang"
            id="lang"
            onChange={(e) => setTitle(e.target.value)}
          >
            {titleHead.map(({ title, tag }) => (
              <option key={tag} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </HeaderWrapper>
  );
};

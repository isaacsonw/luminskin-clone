import styled from 'styled-components';
export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: 100vw;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  background: rgb(205, 209, 206, 0.6);
  backdrop-filter: blur(1px);
  z-index: 22222;
  top: 0;
  h1,
  h3 {
    font-size: 13px;
    font-family: FF Bau Regular, sans-serif;
    font-weight: 400;
  }
  .cart,
  .action__btn {
    max-width: 550px;
    background-color: #f2f2ef;
    width: 100%;
    height: 100%;
    padding: 1.4em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .currency {
      margin: 1.5em 0;
    }
    main {
      overflow-y: scroll;
      width: 100%;
      height: 68%;
    }
    .cartItems {
      background: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 1em;
      margin: 0.5em 0;

      .top {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      img {
        height: 30px;
        align-self: flex-end;
        margin: 1.5em 3em;
      }
    }
    select {
      border: none;
      padding: 6px;
      font-size: 12px;
      outline: none;
      cursor: pointer;
    }
    .close {
      display: flex;
      width: 100%;
      align-items: center;
      .close__text {
        text-align: center;
        flex: 1;
      }
      .close__btn {
        cursor: pointer;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 1px solid #00000055;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .action__btn {
    box-shadow: 5px -2px 20px -5px #00000065;
    height: 210px;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .total {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .btn {
      width: 100%;
      padding: 20px 0;
      color: #2b2e2b;
      letter-spacing: 0.96px;
      border: 1px solid #2b2e2b;
      background-color: #fff;
      outline: none;
      cursor: pointer;
    }
    .btn__2 {
      color: #fff;
      letter-spacing: 2px;
      background-color: #4b5548;
      border: none;
    }
  }
  .price__counter {
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    .counter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 0.5px solid #bcbcbc;
      padding: 7px;
      width: 76px;
      font-size: 13px;
      .plus,
      .minus {
        cursor: pointer;
        color: #000;
      }
    }
  }
`;

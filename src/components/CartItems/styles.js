import styled from 'styled-components';
export const CartWrapper = styled.div`
  position: fixed;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: 100vw;
  justify-content: flex-end;
  height: 100%;
  background-color: #00000066;
  z-index: 22222;
  top: 0;
  .cart {
    width: 400px;
    background-color: white;
    height: 100%;
  }
`;

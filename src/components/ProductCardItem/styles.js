import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  img {
    object-fit: cover;
    max-width: 100%;
    max-height: 130px;
    flex: 1 1 0%;
    vertical-align: middle;
  }
  h2 {
    font-size: 1rem;
    line-height: 2.5;
    font-family: FF Bau Regular, sans-serif;
    font-weight: 400;
  }
  button {
    appearance: none;
    align-items: center;
    justify-content: center;
    transition: all 250ms ease 0s;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    outline: none;
    border: 0px;
    line-height: 1.2;
    padding-top: 2px;
    font-weight: 600;
    font-family: 'FF Bau Regular', sans-serif;
    padding-left: 2rem;
    padding-right: 2rem;
    min-height: 52px;
    cursor: pointer;
    background: rgb(75, 85, 72);
    color: rgb(252, 252, 249);
  }
`;

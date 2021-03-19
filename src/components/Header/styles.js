import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: #f5f5f4;
  ul {
    list-style: none;
    display: flex;

    align-items: center;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1em;
      cursor: pointer;
      font-weight: 400;
      font-size: 15px;
    }
  }
  select {
    padding: 5px 10px;
    border-radius: 0;
    outline: none;
    width: 80px;
    background: white;
    border-color: #00000035;
    background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
      no-repeat right #fff;
    -webkit-appearance: none;
    appearance: none;
    background-position-x: 50px;
  }
  img {
    width: 150px;
    cursor: pointer;
  }
  .top-header,
  .search-section {
    display: flex;
    align-items: center;
  }

  .top-header {
    padding: 0.5em 3em;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #00000025;
    transition: all 0.7s ease-in;
    box-sizing: border-box; /* background: salmon; */
    .filters {
      margin-left: auto;
    }
  }

  .scrolled {
    position: fixed;
    top: 0;
    left: 0;
    background: #f5f5f4;
    width: 100%;
    z-index: 222;
  }
  .search-section {
    justify-content: center;
    .title {
      width: 1300px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 7em 0;
      select {
        padding: 1.3em 1.5em;
        width: 400px;
        background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
          no-repeat right #fff;
        -webkit-appearance: none;
        appearance: none;
        background-position-x: 364px;
      }
      h1 {
        font-size: 3rem;
        line-height: 1.25em;
        /* font-family: freight-display-pro, serif; */
        font-weight: 300;
      }
      p {
        font-weight: 400;
        padding: 0.6em 0;
        font-size: 15px;
      }
    }
  }
`;

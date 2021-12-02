import styled from "styled-components";

const StyledNavbar = styled.div`
  height: 50px;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;

    li {
      margin-right: 1rem;
    }

    .links {
      text-decoration: none;
      outline: 0;
      cursor: pointer;
      color: white;
    }
  }
`;

export default StyledNavbar;

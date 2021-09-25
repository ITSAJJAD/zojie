import React from "react";
import styled from "styled-components";
import logo from "../img/black.png";

const Nav = () => {
  return (
    <React.Fragment>
      <NavStyle>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#who">Who We Are</a>
          </li>
          <li>
            <a href="#impact">Impact</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </NavStyle>
    </React.Fragment>
  );
};

// Styles

const NavStyle = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;

  margin: auto;
  padding: 1rem 10rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  img {
    /* padding-left: 2rem; */
  }
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-left: 20rem;
    margin: auto;
    li {
      padding-left: 5rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
  button {
    margin-right: 2rem;
    border: none;
    cursor: pointer;
    background: #e8991d;
    color: white;
    border-radius: 5rem;
    padding: 1rem 3rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

export default Nav;
